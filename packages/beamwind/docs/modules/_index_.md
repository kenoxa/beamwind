> [Globals](../README.md) / "index"

# Module: "index"

## Index

### Interfaces

* [ClassNameCreator](../interfaces/_index_.classnamecreator.md)
* [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)
* [Injector](../interfaces/_index_.injector.md)
* [InjectorConfig](../interfaces/_index_.injectorconfig.md)
* [Instance](../interfaces/_index_.instance.md)
* [PluginApply](../interfaces/_index_.pluginapply.md)
* [PluginContext](../interfaces/_index_.plugincontext.md)
* [Theme](../interfaces/_index_.theme.md)
* [ThemeAngle](../interfaces/_index_.themeangle.md)
* [ThemeAnimation](../interfaces/_index_.themeanimation.md)
* [ThemeBorderRadius](../interfaces/_index_.themeborderradius.md)
* [ThemeBorderWidth](../interfaces/_index_.themeborderwidth.md)
* [ThemeBoxShadow](../interfaces/_index_.themeboxshadow.md)
* [ThemeColors](../interfaces/_index_.themecolors.md)
* [ThemeColorsWithDefault](../interfaces/_index_.themecolorswithdefault.md)
* [ThemeDurations](../interfaces/_index_.themedurations.md)
* [ThemeFlex](../interfaces/_index_.themeflex.md)
* [ThemeFontFamily](../interfaces/_index_.themefontfamily.md)
* [ThemeFontSize](../interfaces/_index_.themefontsize.md)
* [ThemeFontWeight](../interfaces/_index_.themefontweight.md)
* [ThemeKeyframes](../interfaces/_index_.themekeyframes.md)
* [ThemeLetterSpacing](../interfaces/_index_.themeletterspacing.md)
* [ThemeLineHeight](../interfaces/_index_.themelineheight.md)
* [ThemeOpacity](../interfaces/_index_.themeopacity.md)
* [ThemeOrder](../interfaces/_index_.themeorder.md)
* [ThemeScale](../interfaces/_index_.themescale.md)
* [ThemeScreens](../interfaces/_index_.themescreens.md)
* [ThemeSizes](../interfaces/_index_.themesizes.md)
* [ThemeSpacing](../interfaces/_index_.themespacing.md)
* [ThemeStrokeWidth](../interfaces/_index_.themestrokewidth.md)
* [ThemeTransitionProperty](../interfaces/_index_.themetransitionproperty.md)
* [ThemeTransitionTimingFunction](../interfaces/_index_.themetransitiontimingfunction.md)
* [ThemeZIndex](../interfaces/_index_.themezindex.md)
* [TokenGrouping](../interfaces/_index_.tokengrouping.md)

### Type aliases

* [Declarations](_index_.md#declarations)
* [DeepPartial](_index_.md#deeppartial)
* [Falsy](_index_.md#falsy)
* [Hasher](_index_.md#hasher)
* [InjectKeyframes](_index_.md#injectkeyframes)
* [OnInit](_index_.md#oninit)
* [OnInitCallback](_index_.md#oninitcallback)
* [PartialTheme](_index_.md#partialtheme)
* [Plugin](_index_.md#plugin)
* [PluginResult](_index_.md#pluginresult)
* [PluginTokenResult](_index_.md#plugintokenresult)
* [Prefixer](_index_.md#prefixer)
* [ThemeAnimationDefintion](_index_.md#themeanimationdefintion)
* [ThemeConfiguration](_index_.md#themeconfiguration)
* [ThemeValueResolver](_index_.md#themevalueresolver)
* [Token](_index_.md#token)
* [TokenParser](_index_.md#tokenparser)
* [UnknownKeyHandler](_index_.md#unknownkeyhandler)
* [WarnHandler](_index_.md#warnhandler)

### Variables

* [corners](_index_.md#corners)
* [cx](_index_.md#cx)
* [edges](_index_.md#edges)
* [setup](_index_.md#setup)

### Functions

* [apply](_index_.md#apply)
* [autoprefix](_index_.md#autoprefix)
* [compose](_index_.md#compose)
* [consoleWarn](_index_.md#consolewarn)
* [convertTo](_index_.md#convertto)
* [createInstance](_index_.md#createinstance)
* [cssomInjector](_index_.md#cssominjector)
* [cyrb32](_index_.md#cyrb32)
* [defaultToKey](_index_.md#defaulttokey)
* [divideBy](_index_.md#divideby)
* [fail](_index_.md#fail)
* [join](_index_.md#join)
* [noOpInjector](_index_.md#noopinjector)
* [noprefix](_index_.md#noprefix)
* [optional](_index_.md#optional)
* [tail](_index_.md#tail)
* [virtualInjector](_index_.md#virtualinjector)

## Type aliases

### Declarations

Ƭ  **Declarations**: Record\<string, string \| undefined>

*Defined in [types/common.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L12)*

___

### DeepPartial

Ƭ  **DeepPartial**\<T>: T *extends* Function ? T : T *extends* object ? {} : T

*Defined in [types/util.ts:2](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/util.ts#L2)*

#### Type parameters:

Name |
------ |
`T` |

___

### Falsy

Ƭ  **Falsy**: "" \| 0 \| 0 \| false \| null \| undefined

*Defined in [types/util.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/util.ts#L9)*

___

### Hasher

Ƭ  **Hasher**: (value: string) => string

*Defined in [types/config.ts:30](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L30)*

___

### InjectKeyframes

Ƭ  **InjectKeyframes**: (name: string, waypoints?: Record\<string, [Declarations](_index_.md#declarations)>) => string

*Defined in [types/plugin.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L5)*

___

### OnInit

Ƭ  **OnInit**: (insert: [OnInitCallback](_index_.md#oninitcallback), theme: [Theme](../interfaces/_index_.theme.md)) => void

*Defined in [types/config.ts:36](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L36)*

___

### OnInitCallback

Ƭ  **OnInitCallback**: (rule: string) => void

*Defined in [types/config.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L34)*

___

### PartialTheme

Ƭ  **PartialTheme**: [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

*Defined in [types/config.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L5)*

___

### Plugin

Ƭ  **Plugin**: [PluginResult](_index_.md#pluginresult) \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult)

*Defined in [types/plugin.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L26)*

___

### PluginResult

Ƭ  **PluginResult**: string \| [Declarations](_index_.md#declarations) \| [] \| [Falsy](_index_.md#falsy)

*Defined in [types/plugin.ts:20](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L20)*

___

### PluginTokenResult

Ƭ  **PluginTokenResult**: (parse: [TokenParser](_index_.md#tokenparser)) => void

*Defined in [types/plugin.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L13)*

___

### Prefixer

Ƭ  **Prefixer**: (property: string, value: string) => string

*Defined in [types/config.ts:28](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L28)*

___

### ThemeAnimationDefintion

Ƭ  **ThemeAnimationDefintion**: string \| [] \| []

*Defined in [types/theme.ts:227](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L227)*

___

### ThemeConfiguration

Ƭ  **ThemeConfiguration**: [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)> \| (activeTheme: [Theme](../interfaces/_index_.theme.md)) => [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

*Defined in [types/config.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L7)*

___

### ThemeValueResolver

Ƭ  **ThemeValueResolver**: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>

*Defined in [types/theme.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L5)*

___

### Token

Ƭ  **Token**: string \| [Falsy](_index_.md#falsy) \| [TokenGrouping](../interfaces/_index_.tokengrouping.md) \| [Token](_index_.md#token)[] \| TypescriptCompat

*Defined in [types/common.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L10)*

___

### TokenParser

Ƭ  **TokenParser**: (token: [Token](_index_.md#token)) => void

*Defined in [types/plugin.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L12)*

___

### UnknownKeyHandler

Ƭ  **UnknownKeyHandler**\<T>: (key: string) => undefined \| T

*Defined in [types/theme.ts:3](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L3)*

#### Type parameters:

Name |
------ |
`T` |

___

### WarnHandler

Ƭ  **WarnHandler**: (message: string, token?: undefined \| string) => void

*Defined in [types/config.ts:32](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L32)*

## Variables

### corners

• `Const` **corners**: (Anonymous function) = positions((key) => CORNERS[key])

*Defined in [helpers.ts:77](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L77)*

___

### cx

•  **cx**: [ClassNameCreator](../interfaces/_index_.classnamecreator.md)

*Defined in [index.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/index.ts#L5)*

___

### edges

• `Const` **edges**: (Anonymous function) = positions((key) => (X\_Y\_TO\_EDGES[key] \|\| key) .split('') .sort() // eslint-disable-next-line unicorn/no-reduce, array-callback-return .reduce((result, edge) => { if (result && EDGES[edge]) { result.push(EDGES[edge] as string) return result } }, [] as string[] \| undefined \| void),)

*Defined in [helpers.ts:92](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L92)*

___

### setup

•  **setup**: (options?: [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[]) => void

*Defined in [index.ts:6](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/index.ts#L6)*

## Functions

### apply

▸ `Const`**apply**(...`tokens`: unknown[]): [PluginTokenResult](_index_.md#plugintokenresult)

*Defined in [helpers.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`...tokens` | unknown[] |

**Returns:** [PluginTokenResult](_index_.md#plugintokenresult)

___

### autoprefix

▸ `Const`**autoprefix**(`property`: string, `value`: string): string

*Defined in [prefix.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/prefix.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`property` | string |
`value` | string |

**Returns:** string

___

### compose

▸ `Const`**compose**\<T>(`first`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>, ...`handlers`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[]): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

*Defined in [helpers.ts:105](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L105)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`first` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T> |
`...handlers` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[] |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

___

### consoleWarn

▸ `Const`**consoleWarn**(`message`: string, `token`: undefined \| string): void

*Defined in [context.ts:25](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`token` | undefined \| string |

**Returns:** void

___

### convertTo

▸ `Const`**convertTo**(`unit`: string, `screenUnit?`: \"h\" \| \"w\"): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

*Defined in [helpers.ts:22](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`unit` | string |
`screenUnit?` | \"h\" \| \"w\" |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

___

### createInstance

▸ `Const`**createInstance**(`options?`: [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[]): [Instance](../interfaces/_index_.instance.md)

*Defined in [instance.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/instance.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[] |

**Returns:** [Instance](../interfaces/_index_.instance.md)

___

### cssomInjector

▸ `Const`**cssomInjector**(`__namedParameters?`: { nonce: undefined \| string ; target: CSSStyleSheet = getStyleElement().sheet as CSSStyleSheet }): [Injector](../interfaces/_index_.injector.md)\<CSSStyleSheet>

*Defined in [injectors.ts:41](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L41)*

Creates an injector which inserts style rules through the CSS Object Model.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { nonce: undefined \| string ; target: CSSStyleSheet = getStyleElement().sheet as CSSStyleSheet } | {} |

**Returns:** [Injector](../interfaces/_index_.injector.md)\<CSSStyleSheet>

___

### cyrb32

▸ `Const`**cyrb32**(`value`: string): string

*Defined in [hash.ts:27](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/hash.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** string

___

### defaultToKey

▸ `Const`**defaultToKey**(`key`: string): string

*Defined in [helpers.ts:43](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string

___

### divideBy

▸ `Const`**divideBy**(`divisor`: number): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

*Defined in [helpers.ts:40](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`divisor` | number |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

___

### fail

▸ `Const`**fail**(`message`: string, `token?`: undefined \| string): never

*Defined in [util.ts:18](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`token?` | undefined \| string |

**Returns:** never

___

### join

▸ `Const`**join**(`parts`: keyof string[], `separator?`: string): string

*Defined in [util.ts:8](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L8)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`parts` | keyof string[] | - |
`separator` | string | "-" |

**Returns:** string

___

### noOpInjector

▸ `Const`**noOpInjector**(): [Injector](../interfaces/_index_.injector.md)\<null>

*Defined in [injectors.ts:63](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L63)*

An injector placeholder which performs no operations. Useful for avoiding errors in a non-browser environment.

**Returns:** [Injector](../interfaces/_index_.injector.md)\<null>

___

### noprefix

▸ `Const`**noprefix**(`property`: string, `value`: string): string

*Defined in [prefix.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/prefix.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`property` | string |
`value` | string |

**Returns:** string

___

### optional

▸ `Const`**optional**(): string

*Defined in [helpers.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L45)*

**Returns:** string

___

### tail

▸ `Const`**tail**\<T>(`array`: T): T

*Defined in [util.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L13)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | string \| keyof unknown[] |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T |

**Returns:** T

___

### virtualInjector

▸ `Const`**virtualInjector**(`__namedParameters?`: { target: string[] = [] }): [Injector](../interfaces/_index_.injector.md)\<string[]>

*Defined in [injectors.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L26)*

Creates an injector which collects style rules during server-side rendering.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { target: string[] = [] } | {} |

**Returns:** [Injector](../interfaces/_index_.injector.md)\<string[]>
