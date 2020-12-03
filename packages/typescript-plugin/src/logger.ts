import type { Logger } from 'typescript-template-language-service-decorator'

import type * as ts from 'typescript/lib/tsserverlibrary'

import { pluginName } from './config'

export class LanguageServiceLogger implements Logger {
  private readonly info: ts.server.PluginCreateInfo

  constructor(info: ts.server.PluginCreateInfo) {
    this.info = info
  }

  log(message: string): void {
    this.info.project.projectService.logger.info(`[${pluginName}] ${message}`)
  }
}
