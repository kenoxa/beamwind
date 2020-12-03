export interface BeamwindPluginConfiguration {
  readonly tags: ReadonlyArray<string>;
  // readonly validate: boolean;
  // readonly lint: { [key: string]: any };
  // readonly emmet: { [key: string]: any };
}

export class ConfigurationManager {

  private static readonly defaultConfiguration: BeamwindPluginConfiguration = {
      tags: ['bw', 'ow'],
      // validate: true,
      // lint: {
      //     emptyRules: 'ignore',
      // },
      // emmet: {},
  };

  private readonly _configUpdatedListeners = new Set<() => void>();

  public get config(): BeamwindPluginConfiguration {
    return this._configuration;
  }

  private _configuration: BeamwindPluginConfiguration = ConfigurationManager.defaultConfiguration;

  public updateFromPluginConfig(config: BeamwindPluginConfiguration): void {
      this._configuration = {
          ...ConfigurationManager.defaultConfiguration,
          ...config,
      };

      for (const listener of this._configUpdatedListeners) {
          listener();
      }
  }

  public onUpdatedConfig(listener: () => void): void {
      this._configUpdatedListeners.add(listener);
  }
}
