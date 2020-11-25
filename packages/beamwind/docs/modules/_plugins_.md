> [Globals](../README.md) / "plugins"

# Module: "plugins"

## Index

### Object literals

* [utilities](_plugins_.md#utilities)

## Object literals

### utilities

▪ `Const` **utilities**: object

*Defined in [plugins.ts:92](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/plugins.ts#L92)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`absolute` | position | position |
`block` | display | display |
`bottom` | propertyAndValue | propertyAndValue |
`capitalize` | textTransform | textTransform |
`clear` | propertyAndValue | propertyAndValue |
`clearfix` | [string, { clear: string = "both"; content: string = """"; display: string = "table" }] | [     '::after',     {       content: '""',       display: 'table',       clear: 'both',     },   ] |
`content` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | contentPluginFor('align-content') |
`fixed` | position | position |
`float` | propertyAndValue | propertyAndValue |
`flow` | display | display |
`hidden` | object | display(['none']) |
`inline` | display | display |
`justify` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | contentPluginFor('justify-content') |
`left` | propertyAndValue | propertyAndValue |
`lowercase` | textTransform | textTransform |
`m` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`max` | function | minMax |
`mb` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`min` | function | minMax |
`ml` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`mr` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`mt` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`mx` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`my` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | margin |
`normal-case` | object | textTransform(['none']) |
`p` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`pb` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`pl` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`pr` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`pt` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`px` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`py` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | padding |
`relative` | position | position |
`right` | propertyAndValue | propertyAndValue |
`self` | undefined \| null \| string \| false \| 0 \| {} \| [string, undefined \| null \| false \| "" \| 0 \| {}] \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult) | contentPluginFor('align-self') |
`static` | position | position |
`sticky` | position | position |
`top` | propertyAndValue | propertyAndValue |
`uppercase` | textTransform | textTransform |
`align` | function | (parts: string[]) => { vertical-align: string = join(tail(parts)) } |
`animate` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { keyframes: (name: string, waypoints?: Record\<string, [Declarations](_index_.md#declarations)>) => string  }) => { animation: string = is.string(animation)         ? animation         : \`${keyframes(animation[1] \|\| \_)} ${animation[0]}\` } |
`appearance` | function | (parts: string[]) => { appearance: string = join(tail(parts)) } |
`bg` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => false \| { background-attachment: \"fixed\" \| \"local\" \| \"scroll\" = parts[1] } \| { background-position: string = join(tail(parts), ' ') } \| { background-repeat: string = join(tail(parts)) } \| { background-size: \"auto\" \| \"cover\" \| \"contain\" = parts[1] } \| { background-color: string = theme('colors', join(tail(parts)), keyColor); color: string = theme(         'colors',         join(parts[1] === 'on' ? parts.slice(2) : ['on'].concat(tail(parts))),         compose(keyColor, optional),       ) } |
`bg-gradient` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { background-image: string = \`linear-gradient(${       parts[1] === 'to' && (\_ = expandEdges(parts[2]))         ? 'to ' + join(\_, ' ')         : theme('angle', join(tail(parts), ' '), compose(convertTo('deg'), defaultToKey))     },var(--${tag('gradient-stops')},var(--${tag('gradient-from')},transparent),var(--${tag(       'gradient-to',     )},transparent)))\` } |
`border` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => {} |
`box` | function | (parts: string[]) => { box-sizing: string = \`${parts[1]}-box\` } |
`break` | function | (parts: string[]) => undefined \| { overflow-wrap: \"normal\" = parts[1]; word-break: \"normal\" = parts[1] } \| { overflow-wrap: string = "break-word" } \| { word-break: string = "break-all" } |
`col` | function | (parts: string[]) => undefined \| { grid-column: string = parts[2] === 'full' ? '1 / -1' : \`span ${parts[2]} / span ${parts[2]}\` } \| { __computed: string = parts[2] } |
`cursor` | function | (parts: string[]) => { cursor: string = join(tail(parts)) } |
`d` | function | (parts: string[]) => {} |
`delay` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { transition-delay: string = theme('durations', parts[1], convertTo('ms')) } |
`divide` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => [string, {}] |
`duration` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { transition-duration: string = theme('durations', parts[1], convertTo('ms')) } |
`ease` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { transition-timing-function: string = theme(       'transitionTimingFunction',       join(tail(parts)),       defaultToKey,     ) } |
`fill` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { fill: string = theme('colors', join(tail(parts)), keyColor) } |
`flex` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => {} |
`font` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => "" \| { font-family: string = \_ } \| { font-weight: string = \_ } |
`from` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string = theme('colors', join(tail(parts)), keyColor) } |
`gap` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { gap: string = theme('spacing', parts[1], convertTo('rem')) } |
`grid` | function | (parts: string[]) => {} |
`h` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { height: string = theme('sizes', parts[1], compose(convertTo('rem', 'h'), defaultToKey)) } |
`inset` | function | (parts: string[]) => undefined \| { bottom: \"auto\" \| \"0\" = parts[1]; left: \"auto\" \| \"0\" = parts[1]; right: \"auto\" \| \"0\" = parts[1]; top: \"auto\" \| \"0\" = parts[1] } \| { bottom: string = parts[2]; top: string = parts[2] } \| { left: string = parts[2]; right: string = parts[2] } |
`items` | function | (parts: string[]) => { align-items: string = \`flex-${parts[1]}\` } |
`leading` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { line-height: string = theme('lineHeight', parts[1], convertTo('rem')) } |
`list` | function | (parts: string[]) => { list-style-position: \"inside\" \| \"outside\" = parts[1] } \| { list-style-type: string = parts[1] } |
`object` | function | (parts: string[]) => { object-fit: string = join(tail(parts)) } \| { object-position: string = join(tail(parts), ' ') } |
`opacity` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { opacity: string = theme('opacity', parts[1], divideBy(100)) } |
`order` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { order: string = theme('order', parts[1], defaultToKey) } |
`origin` | function | (parts: string[]) => { transform-origin: string = join(tail(parts), ' ') } |
`outline` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { outline: string = \`2px ${parts[1] === 'none' ? 'solid' : 'dotted'} ${theme(       'colors',       join(tail(parts)),       keyColor,     )}\`; outline-offset: string = "2px" } |
`overflow` | function | (parts: string[]) => {} |
`placeholder` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => [string, { color: string = theme('placeholderColor', join(tail(parts)), keyColor) }] |
`pointer-events` | function | (parts: string[]) => { pointer-events: string = parts[1] } |
`resize` | function | (parts: string[]) => { resize: string = "vertical" } |
`rotate` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string = \_; transform: string = \`rotate(${\_})\` } |
`rounded` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => {} |
`row` | function | (parts: string[]) => undefined \| { grid-row: string = parts[2] === 'full' ? '1 / -1' : \`span ${parts[2]} / span ${parts[2]}\` } \| { __computed: string = parts[2] } |
`scale` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string \| false = parts[1] !== 'x' && \_; transform: string = \`scale${parts[2] ? parts[1].toUpperCase() : ''}(${\_})\` } |
`select` | function | (parts: string[]) => { user-select: string = parts[1] } |
`shadow` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { box-shadow: string = theme('boxShadow', parts[1]) } |
`skew` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string \| false = parts[1] !== 'x' && \_; transform: string = \`skew${parts[1].toUpperCase()}(${\_})\` } |
`space` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => [string, "" \| { __computed: string = theme('spacing', parts[2] \|\| 'base', convertTo('rem')) } \| { margin-left: string = \_; margin-top: string = \_ }] |
`stroke` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { stroke-width: string = theme('strokeWidth', parts[1], defaultToKey) } |
`subpixel` | function | (parts: string[]) => false \| { -moz-osx-font-smoothing: string = "auto"; -webkit-font-smoothing: string = "auto" } |
`table` | function | (parts: string[]) => {} |
`text` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { text-align: \"left\" \| \"center\" \| \"right\" \| \"justify\" = parts[1] } \| { font-size: string = fontSize } \| { font-size: string = fontSize[0]; letter-spacing: undefined \| string = (fontSize[1] as { letterSpacing?: string }).letterSpacing; line-height: undefined \| string = is.string(fontSize[1]) ? fontSize[1] : fontSize[1].lineHeight } \| { color: string = theme('colors', join(tail(parts)), keyColor) } |
`to` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string = theme('colors', join(tail(parts)), keyColor) } |
`tracking` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { letter-spacing: string = theme('letterSpacing', parts[1]) } |
`transform` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { transform: string = \`translateX(var(--${tag('transform-translate-x')},0)) translateY(var(--${tag(       'transform-translate-y',     )},0)) rotate(var(--${tag('transform-rotate')},0)) skewX(var(--${tag(       'transform-skew-x',     )},0)) skewY(var(--${tag('transform-skew-y')},0)) scaleX(var(--${tag(       'transform-scale-x',     )},1)) scaleY(var(--${tag('transform-scale-y')},1))\` } |
`transition` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { transition: string = join(       [         parts[1]           ? theme('transitionProperty', parts[1], defaultToKey)           : 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',         theme('durations', undefined, convertTo('ms')),         theme('transitionTimingFunction'),       ],       ' ',     ) } |
`translate` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string \| false = parts[1] !== 'x' && \_; transform: string = \`translate${parts[1].toUpperCase()}(${\_})\` } |
`via` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>, \_\_namedParameters: { tag: (token: string) => string  }) => { __computed: string = \`var(--${tag('gradient-from')},transparent),${theme(       'colors',       join(tail(parts)),       keyColor,     )},var(--${tag('gradient-to')},transparent)\` } |
`w` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { width: string = theme('sizes', parts[1], compose(convertTo('rem', 'w'), defaultToKey)) } |
`whitespace` | function | (parts: string[]) => { white-space: string = join(tail(parts)) } |
`z` | function | (parts: string[], theme: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>) => { z-index: string = theme('zIndex', parts[1], defaultToKey) } |
`antialiased` | object | { -moz-osx-font-smoothing: string = "grayscale"; -webkit-font-smoothing: string = "antialiased" } |
`invisible` | object | { visibility: string = "hidden" } |
`italic` | object | { font-style: string = "italic" } |
`line-through` | object | { text-decoration: string = "line-through" } |
`no-underline` | object | { text-decoration: string = "none" } |
`not-italic` | object | { font-style: string = "normal" } |
`not-sr-only` | object | { clip: string = "auto"; height: string = "auto"; margin: string = "0"; overflow: string = "visible"; padding: string = "0"; position: string = "static"; white-space: string = "normal"; width: string = "auto" } |
`sr-only` | object | { border-width: string = "0"; clip: string = "rect(0,0,0,0)"; height: string = "1px"; margin: string = "-1px"; overflow: string = "hidden"; padding: string = "0"; position: string = "absolute"; white-space: string = "nowrap"; width: string = "1px" } |
`stroke-current` | object | { stroke: string = "currentColor" } |
`transition-none` | object | { transition-property: string = "none" } |
`truncate` | object | { overflow: string = "hidden"; text-overflow: string = "ellipsis"; white-space: string = "nowrap" } |
`underline` | object | { text-decoration: string = "underline" } |
`visible` | object | { visibility: string = "visible" } |
