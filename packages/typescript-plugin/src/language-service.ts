// Original code forked from https://github.com/microsoft/typescript-styled-plugin/blob/master/src/_language-service.ts
// License MIT

import type {
  Logger,
  TemplateContext,
  TemplateLanguageService,
} from 'typescript-template-language-service-decorator'
import type * as ts from 'typescript/lib/tsserverlibrary'

import type { ConfigurationManager } from './configuration'

import * as vscode from 'vscode-languageserver-types'

import { processPlugins } from './process-plugins'

function arePositionsEqual(left: ts.LineAndCharacter, right: ts.LineAndCharacter): boolean {
  return left.line === right.line && left.character === right.character
}

function isAfter(left: vscode.Position, right: vscode.Position): boolean {
  return right.line > left.line || (right.line === left.line && right.character >= left.character)
}

function overlaps(a: vscode.Range, b: vscode.Range): boolean {
  return !isAfter(a.end, b.start) && !isAfter(b.end, a.start)
}

function pad(n: string): string {
  return ('00000000' + n).slice(-8)
}

function naturalExpand(value: number | string): string {
  const string = typeof value === 'string' ? value : value.toString()
  return string.replace(/\d+/g, pad)
}

const emptyCompletionList: vscode.CompletionList = {
  items: [],
  isIncomplete: false,
}

class CompletionsCache {
  private _cachedCompletionsFile?: string
  private _cachedCompletionsPosition?: ts.LineAndCharacter
  private _cachedCompletionsContent?: string
  private _completions?: vscode.CompletionList

  public getCached(
    context: TemplateContext,
    position: ts.LineAndCharacter,
  ): vscode.CompletionList | undefined {
    if (
      this._completions &&
      context.fileName === this._cachedCompletionsFile &&
      this._cachedCompletionsPosition &&
      arePositionsEqual(position, this._cachedCompletionsPosition) &&
      context.text === this._cachedCompletionsContent
    ) {
      return this._completions
    }
  }

  public updateCached(
    context: TemplateContext,
    position: ts.LineAndCharacter,
    completions: vscode.CompletionList,
  ): void {
    this._cachedCompletionsFile = context.fileName
    this._cachedCompletionsPosition = position
    this._cachedCompletionsContent = context.text
    this._completions = completions
  }
}

export class BeamwindTemplateLanguageService implements TemplateLanguageService {
  private readonly typescript: typeof ts
  private readonly configurationManager: ConfigurationManager
  private readonly logger: Logger
  private readonly _completionsCache = new CompletionsCache()

  private state: ReturnType<typeof processPlugins>

  constructor(typescript: typeof ts, configurationManager: ConfigurationManager, logger: Logger) {
    this.typescript = typescript
    this.configurationManager = configurationManager
    this.logger = logger
    this.state = processPlugins()
  }

  public getCompletionsAtPosition(
    context: TemplateContext,
    position: ts.LineAndCharacter,
  ): ts.WithMetadata<ts.CompletionInfo> {
    const items = this.getCompletionItems(context, position)

    return translateCompletionItemsToCompletionInfo(context, items)
  }

  public getCompletionEntryDetails(
    context: TemplateContext,
    position: ts.LineAndCharacter,
    name: string,
  ): ts.CompletionEntryDetails {
    const item = this.getCompletionItems(context, position).items.find((x) => x.label === name)

    if (!item) {
      return {
        name,
        kind: this.typescript.ScriptElementKind.unknown,
        kindModifiers: '',
        tags: [],
        displayParts: toDisplayParts(name),
        documentation: [],
      }
    }

    return translateCompletionItemsToCompletionEntryDetails(this.typescript, item)
  }

  // public getQuickInfoAtPosition(
  //   context: TemplateContext,
  //   position: ts.LineAndCharacter,
  // ): ts.QuickInfo | undefined {
  // const doc = this.virtualDocumentFactory.createVirtualDocument(context)
  // const stylesheet = this.scssLanguageService.parseStylesheet(doc)
  // const hover = this.scssLanguageService.doHover(
  //   doc,
  //   this.virtualDocumentFactory.toVirtualDocPosition(position),
  //   stylesheet,
  // )
  // if (hover) {
  //   return this.translateHover(
  //     hover,
  //     this.virtualDocumentFactory.toVirtualDocPosition(position),
  //     context,
  //   )
  // }
  // }

  // public getSemanticDiagnostics(context: TemplateContext): ts.Diagnostic[] {
  //   const diagnostics: ts.Diagnostic[] = []

  //   // for (const match of regexExec(/[^:\s]+:?/g, templateContext.text)) {
  //   //   const className = match[0]
  //   //   const start = match.index
  //   //   const length = match[0].length

  //   //   if (!languageServiceContext.completionEntries.has(className)) {
  //   //     diagnostics.push({
  //   //       messageText: `unknown tailwind class or variant "${className}"`,
  //   //       start: start,
  //   //       length: length,
  //   //       file: templateContext.node.getSourceFile(),
  //   //       category: ts.DiagnosticCategory.Warning,
  //   //       code: 0, // ???
  //   //     })
  //   //   }
  //   // }

  //   return diagnostics
  //   // const doc = this.virtualDocumentFactory.createVirtualDocument(context)
  //   // const stylesheet = this.scssLanguageService.parseStylesheet(doc)
  //   // return this.translateDiagnostics(
  //   //   this.scssLanguageService.doValidation(doc, stylesheet),
  //   //   doc,
  //   //   context,
  //   //   context.text,
  //   // ).filter((x) => !!x) as ts.Diagnostic[]
  // }

  // public getSupportedCodeFixes(): number[] {
  //   return [cssErrorCode]
  // }

  // public getCodeFixesAtPosition(
  //   context: TemplateContext,
  //   start: number,
  //   end: number,
  //   _errorCodes: number[],
  //   _format: ts.FormatCodeSettings,
  // ): ts.CodeAction[] {
  //   const doc = this.virtualDocumentFactory.createVirtualDocument(context)
  //   const stylesheet = this.scssLanguageService.parseStylesheet(doc)
  //   const range = this.toVsRange(context, start, end)
  //   const diagnostics = this.scssLanguageService
  //     .doValidation(doc, stylesheet)
  //     .filter((diagnostic) => overlaps(diagnostic.range, range))

  //   return this.translateCodeActions(
  //     context,
  //     this.scssLanguageService.doCodeActions(doc, range, { diagnostics }, stylesheet),
  //   )
  // }

  // public getOutliningSpans(context: TemplateContext): ts.OutliningSpan[] {
  //   const doc = this.virtualDocumentFactory.createVirtualDocument(context)
  //   const ranges = this.scssLanguageService.getFoldingRanges(doc)
  //   return ranges
  //     .filter((range) => {
  //       // Filter out ranges outside on last line
  //       const end = context.toOffset({
  //         line: range.endLine,
  //         character: range.endCharacter || 0,
  //       })
  //       return end < context.text.length
  //     })
  //     .map((range) => this.translateOutliningSpan(context, range))
  // }

  private getCompletionItems(
    context: TemplateContext,
    position: ts.LineAndCharacter,
  ): vscode.CompletionList {
    this.logger.log(
      `getCompletionItems[${context.fileName}:${position.line}:${
        position.character
      }] ${JSON.stringify(context.text)}`,
    )

    // const cached = this._completionsCache.getCached(context, position)

    // if (cached) {
    //   return cached
    // }

    const completions: vscode.CompletionList = {
      isIncomplete: false,
      items: [],
    }

    // List of active groupings: either variant ('xxx:') or prefix
    const groupings: string[] = []

    const startGrouping = (value = ''): '' => {
      groupings.push(value)

      return ''
    }

    const endGrouping = (isWhitespace?: boolean): void => {
      // If isWhitespace is true
      // ['', ':sm', ':hover'] => ['']
      // ['', ':sm', ':hover', ''] => ['', ':sm', ':hover', '']

      // If isWhitespace is falsey
      // ['', ':sm', ':hover'] => ['']
      // ['', ':sm', ':hover', ''] => ['', ':sm', ':hover', '']

      const index = groupings.lastIndexOf('')

      if (~index) {
        /* eslint-disable unicorn/prefer-math-trunc */
        groupings.splice(
          index + ~~(isWhitespace as boolean),
          groupings.length - index + ~~(isWhitespace as boolean),
        )
        /* eslint-enable unicorn/prefer-math-trunc */
      }
    }

    const onlyPrefixes = (s: string): '' | boolean => s && s[0] !== ':'
    const onlyVariants = (s: string): '' | boolean => s[0] === ':'

    const offset = context.toOffset(position)

    // We need an initial grouping
    startGrouping()

    let char: string
    let buffer = ''
    let tokenStartOffset = 0
    const { text } = context

    for (let index = 0; index < offset; index++) {
      switch ((char = text[index])) {
        case ':':
          if (buffer) {
            tokenStartOffset = offset
            buffer = startGrouping(':' + buffer)
          }

          break

        case '(':
          // If there is a buffer this is the prefix for all grouped tokens
          if (buffer) {
            tokenStartOffset = offset
            buffer = startGrouping(buffer)
          }

          startGrouping()

          break

        case ')':
        case ' ':
        case '\t':
        case '\n':
        case '\r':
          tokenStartOffset = offset
          buffer = ''
          endGrouping(char !== ')')

          break

        default:
          buffer += char
      }
    }

    const variants = groupings.filter(onlyVariants)
    const prefix = groupings.filter(onlyPrefixes).join('-')
    const token = buffer === '&' ? buffer : (prefix && prefix + '-') + buffer

    const directive = (variants.length === 0 ? '' : variants.join('').slice(1) + ':') + token

    if (buffer === '&') {
      tokenStartOffset += 1
    }

    completions.items = [
      {
        kind: vscode.CompletionItemKind.Text,
        data: 'token',
        label: directive,
        sortText: `!${directive}`,
      },
      ...Object.keys(this.state.screens)
        .filter((screen) => variants.length === 0 && screen.startsWith(buffer))
        .map((screen) => ({
          kind: vscode.CompletionItemKind.EnumMember,
          data: 'screens',
          label: `${screen}:`,
          sortText: `#${screen}`,
          detail: `breakpoint @ ${this.state.screens[screen]}`,
          documentation: {
            kind: vscode.MarkupKind.PlainText,
            value: `@media (min-width: ${this.state.screens[screen]})`,
          },
          textEdit: {
            newText: `${screen}:`.slice(buffer.length),
            range: {
              start: context.toPosition(tokenStartOffset + buffer.length),
              end: position,
            },
          },
        })),
      ...this.state.variants
        .filter((variant) => !variants.includes(':' + variant) && variant.startsWith(buffer))
        .map((variant) => ({
          kind: vscode.CompletionItemKind.Unit,
          data: 'variant',
          label: `${variant}:`,
          sortText: `:${variant}`,
          detail: `pseudo-class ${variant}`,
          documentation: { kind: vscode.MarkupKind.PlainText, value: `Add ${variant} variant` },
          textEdit: {
            newText: `${variant}:`.slice(buffer.length),
            range: {
              start: context.toPosition(tokenStartOffset + buffer.length),
              end: position,
            },
          },
        })),
      // Start a new directive group
      ...Object.keys(this.state.directives)
        .filter((directive) => directive.startsWith(token))
        // tex
        // text-current
        // => text
        // ring-off
        // ring-offset-70
        // => ring-offset
        .map((directive) => {
          const nextDash = directive.indexOf('-', token.length)
          return nextDash >= 0 ? directive.slice(0, nextDash) : ''
        })
        .filter((group, index, groups) => group && groups.indexOf(group) === index)
        .map((group) => ({
          kind: vscode.CompletionItemKind.Module,
          data: 'directive-group',
          label: prefix ? group.slice(prefix.length + 1) : group,
          sortText: `=${group}`,
          detail: `${group}(...)`,
          documentation: { kind: vscode.MarkupKind.PlainText, value: `Start a new ${group} group` },
          textEdit: {
            newText: (prefix ? group.slice(prefix.length + 1) : group).slice(buffer.length),
            range: {
              start: context.toPosition(tokenStartOffset + buffer.length),
              end: position,
            },
          },
        })),
      // Insert directive
      // tex
      // text-current
      // => text
      // ring-off
      // ring-offset-70
      // => ring-offset
      ...Object.keys(this.state.directives)
        .filter((directive) => directive.startsWith(token))
        .map((directive) => ({
          kind:
            directive === 'text-black'
              ? vscode.CompletionItemKind.Color
              : vscode.CompletionItemKind.Property,
          data: 'directive',
          label: prefix ? directive.slice(prefix.length + 1) : directive,
          sortText: `=${naturalExpand(directive)}`,
          // VS Code bug causes '0' to not display in some cases
          detail: directive === '0' ? '0 ' : directive,
          // TODO https://github.com/tailwindlabs/tailwindcss-intellisense/blob/264cdc0c5e6fdbe1fee3c2dc338354235277ed08/packages/tailwindcss-language-service/src/util/color.ts#L28
          documentation:
            directive === 'text-black'
              ? '#ff0000'
              : {
                  kind: vscode.MarkupKind.Markdown,
                  value: [
                    '```css',
                    '.' +
                      (variants.length === 0 ? '' : variants.join('').slice(1) + ':') +
                      this.state.directives[directive].selector.slice(1) +
                      ' {',
                    ...Object.entries(this.state.directives[directive].properties).map(
                      ([property, value]) => `  ${property}: ${value};`,
                    ),
                    '}',
                    '```',
                  ].join('\n'),
                },
          textEdit: {
            newText: (prefix ? directive.slice(prefix.length + 1) : directive).slice(buffer.length),
            range: {
              start: context.toPosition(tokenStartOffset + buffer.length),
              end: position,
            },
          },
        })),
    ]

    if (prefix && (!buffer || buffer === '&')) {
      completions.items.push({
        kind: vscode.CompletionItemKind.Snippet,
        label: `&`,
        detail: prefix,
        sortText: `=&`,
        textEdit: {
          newText: `&`.slice(buffer.length),
          range: {
            start: context.toPosition(tokenStartOffset + buffer.length),
            end: position,
          },
        },
      })
    }

    this._completionsCache.updateCached(context, position, completions)

    return completions
  }
}

function translateCompletionItemsToCompletionInfo(
  context: TemplateContext,
  items: vscode.CompletionList,
): ts.WithMetadata<ts.CompletionInfo> {
  return {
    metadata: {
      isIncomplete: items.isIncomplete,
    },
    isGlobalCompletion: false,
    isMemberCompletion: false,
    isNewIdentifierLocation: false,
    entries: items.items.map((x) => translateCompletionEntry(context, x)),
  }
}

function translateCompletionItemsToCompletionEntryDetails(
  typescript: typeof ts,
  item: vscode.CompletionItem,
): ts.CompletionEntryDetails {
  return {
    name: item.label,
    kind: item.kind
      ? translateCompletionItemKind(typescript, item.kind)
      : typescript.ScriptElementKind.unknown,
    kindModifiers: getKindModifiers(item),
    displayParts: toDisplayParts(item.detail),
    documentation: toDisplayParts(item.documentation),
    tags: [],
  }
}

function translateCompletionEntry(
  context: TemplateContext,
  item: vscode.CompletionItem,
): ts.CompletionEntry {
  return {
    name: item.label,
    kind: item.kind
      ? translateCompletionItemKind(context.typescript, item.kind)
      : context.typescript.ScriptElementKind.unknown,
    kindModifiers: getKindModifiers(item),
    sortText: item.sortText || item.label,
    insertText: item.textEdit && item.textEdit.newText,
    replacementSpan: item.textEdit && {
      start: context.toOffset(item.textEdit.range.start),
      length:
        context.toOffset(item.textEdit.range.end) - context.toOffset(item.textEdit.range.start),
    },
  }
}

function translateCompletionItemKind(
  typescript: typeof ts,
  kind: vscode.CompletionItemKind,
): ts.ScriptElementKind {
  switch (kind) {
    case vscode.CompletionItemKind.Method:
      return typescript.ScriptElementKind.memberFunctionElement
    case vscode.CompletionItemKind.Function:
      return typescript.ScriptElementKind.functionElement
    case vscode.CompletionItemKind.Constructor:
      return typescript.ScriptElementKind.constructorImplementationElement
    case vscode.CompletionItemKind.Field:
    case vscode.CompletionItemKind.Variable:
      return typescript.ScriptElementKind.variableElement
    case vscode.CompletionItemKind.Class:
      return typescript.ScriptElementKind.classElement
    case vscode.CompletionItemKind.Interface:
      return typescript.ScriptElementKind.interfaceElement
    case vscode.CompletionItemKind.File:
    case vscode.CompletionItemKind.Module:
      return typescript.ScriptElementKind.moduleElement
    case vscode.CompletionItemKind.Property:
      return typescript.ScriptElementKind.memberVariableElement
    case vscode.CompletionItemKind.Unit:
    case vscode.CompletionItemKind.Value:
      return typescript.ScriptElementKind.constElement
    case vscode.CompletionItemKind.Enum:
      return typescript.ScriptElementKind.enumElement
    case vscode.CompletionItemKind.EnumMember:
      return typescript.ScriptElementKind.enumMemberElement
    case vscode.CompletionItemKind.Keyword:
      return typescript.ScriptElementKind.keyword
    case vscode.CompletionItemKind.Constant:
      return typescript.ScriptElementKind.constElement
    case vscode.CompletionItemKind.Color:
      return typescript.ScriptElementKind.primitiveType
    case vscode.CompletionItemKind.Reference:
      return typescript.ScriptElementKind.alias
    case vscode.CompletionItemKind.Snippet:
    case vscode.CompletionItemKind.Text:
      return typescript.ScriptElementKind.string
    default:
      return typescript.ScriptElementKind.unknown
  }
}

function getKindModifiers(item: vscode.CompletionItem): string {
  if (item.kind === vscode.CompletionItemKind.Color) {
    return 'color'
  }

  return ''
}

function translateSeverity(
  typescript: typeof ts,
  severity: vscode.DiagnosticSeverity | undefined,
): ts.DiagnosticCategory {
  switch (severity) {
    case vscode.DiagnosticSeverity.Information:
    case vscode.DiagnosticSeverity.Hint:
      return typescript.DiagnosticCategory.Message

    case vscode.DiagnosticSeverity.Warning:
      return typescript.DiagnosticCategory.Warning

    case vscode.DiagnosticSeverity.Error:
    default:
      return typescript.DiagnosticCategory.Error
  }
}

function toDisplayParts(text: string | vscode.MarkupContent | undefined): ts.SymbolDisplayPart[] {
  if (!text) {
    return []
  }

  return [
    {
      kind: 'text',
      text: typeof text === 'string' ? text : text.value,
    },
  ]
}
