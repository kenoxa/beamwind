> [Globals](../README.md) / "index"

# Module: "index"

## Index

### Interfaces

- [ClassNameCreator](../interfaces/_index_.classnamecreator.md)
- [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)
- [Injector](../interfaces/_index_.injector.md)
- [InjectorConfig](../interfaces/_index_.injectorconfig.md)
- [Instance](../interfaces/_index_.instance.md)
- [PluginApply](../interfaces/_index_.pluginapply.md)
- [PluginContext](../interfaces/_index_.plugincontext.md)
- [Theme](../interfaces/_index_.theme.md)
- [ThemeAngle](../interfaces/_index_.themeangle.md)
- [ThemeAnimation](../interfaces/_index_.themeanimation.md)
- [ThemeBorderRadius](../interfaces/_index_.themeborderradius.md)
- [ThemeBorderWidth](../interfaces/_index_.themeborderwidth.md)
- [ThemeBoxShadow](../interfaces/_index_.themeboxshadow.md)
- [ThemeColors](../interfaces/_index_.themecolors.md)
- [ThemeColorsWithDefault](../interfaces/_index_.themecolorswithdefault.md)
- [ThemeDurations](../interfaces/_index_.themedurations.md)
- [ThemeFlex](../interfaces/_index_.themeflex.md)
- [ThemeFontFamily](../interfaces/_index_.themefontfamily.md)
- [ThemeFontSize](../interfaces/_index_.themefontsize.md)
- [ThemeFontWeight](../interfaces/_index_.themefontweight.md)
- [ThemeKeyframes](../interfaces/_index_.themekeyframes.md)
- [ThemeLetterSpacing](../interfaces/_index_.themeletterspacing.md)
- [ThemeLineHeight](../interfaces/_index_.themelineheight.md)
- [ThemeOpacity](../interfaces/_index_.themeopacity.md)
- [ThemeOrder](../interfaces/_index_.themeorder.md)
- [ThemeScale](../interfaces/_index_.themescale.md)
- [ThemeScreens](../interfaces/_index_.themescreens.md)
- [ThemeSizes](../interfaces/_index_.themesizes.md)
- [ThemeSpacing](../interfaces/_index_.themespacing.md)
- [ThemeStrokeWidth](../interfaces/_index_.themestrokewidth.md)
- [ThemeTransitionProperty](../interfaces/_index_.themetransitionproperty.md)
- [ThemeTransitionTimingFunction](../interfaces/_index_.themetransitiontimingfunction.md)
- [ThemeZIndex](../interfaces/_index_.themezindex.md)
- [TokenGrouping](../interfaces/_index_.tokengrouping.md)

### Type aliases

- [Declarations](_index_.md#declarations)
- [DeepPartial](_index_.md#deeppartial)
- [Falsy](_index_.md#falsy)
- [Hasher](_index_.md#hasher)
- [InjectKeyframes](_index_.md#injectkeyframes)
- [OnInit](_index_.md#oninit)
- [OnInitCallback](_index_.md#oninitcallback)
- [PartialTheme](_index_.md#partialtheme)
- [Plugin](_index_.md#plugin)
- [PluginResult](_index_.md#pluginresult)
- [PluginTokenResult](_index_.md#plugintokenresult)
- [Prefixer](_index_.md#prefixer)
- [ThemeAnimationDefintion](_index_.md#themeanimationdefintion)
- [ThemeConfiguration](_index_.md#themeconfiguration)
- [ThemeValueResolver](_index_.md#themevalueresolver)
- [Token](_index_.md#token)
- [TokenParser](_index_.md#tokenparser)
- [UnknownKeyHandler](_index_.md#unknownkeyhandler)
- [WarnHandler](_index_.md#warnhandler)

### Variables

- [corners](_index_.md#corners)
- [cx](_index_.md#cx)
- [edges](_index_.md#edges)
- [setup](_index_.md#setup)

### Functions

- [apply](_index_.md#apply)
- [autoprefix](_index_.md#autoprefix)
- [compose](_index_.md#compose)
- [consoleWarn](_index_.md#consolewarn)
- [convertTo](_index_.md#convertto)
- [createInstance](_index_.md#createinstance)
- [cssomInjector](_index_.md#cssominjector)
- [cyrb32](_index_.md#cyrb32)
- [defaultToKey](_index_.md#defaulttokey)
- [divideBy](_index_.md#divideby)
- [fail](_index_.md#fail)
- [join](_index_.md#join)
- [noOpInjector](_index_.md#noopinjector)
- [noprefix](_index_.md#noprefix)
- [optional](_index_.md#optional)
- [tail](_index_.md#tail)
- [virtualInjector](_index_.md#virtualinjector)

## Type aliases

### Declarations

Ƭ **Declarations**: Record\<string, string \| undefined>

_Defined in [types/common.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L12)_

---

### DeepPartial

Ƭ **DeepPartial**\<T>: T _extends_ Function ? T : T _extends_ object ? {} : T

_Defined in [types/util.ts:2](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/util.ts#L2)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

---

### Falsy

Ƭ **Falsy**: "" \| 0 \| 0 \| false \| null \| undefined

_Defined in [types/util.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/util.ts#L9)_

---

### Hasher

Ƭ **Hasher**: (value: string) => string

_Defined in [types/config.ts:30](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L30)_

---

### InjectKeyframes

Ƭ **InjectKeyframes**: (name: string, waypoints?: Record\<string, [Declarations](_index_.md#declarations)>) => string

_Defined in [types/plugin.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L5)_

---

### OnInit

Ƭ **OnInit**: (insert: [OnInitCallback](_index_.md#oninitcallback), theme: [Theme](../interfaces/_index_.theme.md)) => void

_Defined in [types/config.ts:36](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L36)_

---

### OnInitCallback

Ƭ **OnInitCallback**: (rule: string) => void

_Defined in [types/config.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L34)_

---

### PartialTheme

Ƭ **PartialTheme**: [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

_Defined in [types/config.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L5)_

---

### Plugin

Ƭ **Plugin**: [PluginResult](_index_.md#pluginresult) \| (parts: string[], theme: [ThemeValueResolver](_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_index_.md#pluginresult) \| [PluginTokenResult](_index_.md#plugintokenresult)

_Defined in [types/plugin.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L26)_

---

### PluginResult

Ƭ **PluginResult**: string \| [Declarations](_index_.md#declarations) \| [] \| [Falsy](_index_.md#falsy)

_Defined in [types/plugin.ts:20](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L20)_

---

### PluginTokenResult

Ƭ **PluginTokenResult**: (parse: [TokenParser](_index_.md#tokenparser)) => void

_Defined in [types/plugin.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L13)_

---

### Prefixer

Ƭ **Prefixer**: (property: string, value: string) => string

_Defined in [types/config.ts:28](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L28)_

---

### ThemeAnimationDefintion

Ƭ **ThemeAnimationDefintion**: string \| [] \| []

_Defined in [types/theme.ts:227](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L227)_

---

### ThemeConfiguration

Ƭ **ThemeConfiguration**: [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)> \| (activeTheme: [Theme](../interfaces/_index_.theme.md)) => [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

_Defined in [types/config.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L7)_

---

### ThemeValueResolver

Ƭ **ThemeValueResolver**: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>

_Defined in [types/theme.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L5)_

---

### Token

Ƭ **Token**: string \| [Falsy](_index_.md#falsy) \| [TokenGrouping](../interfaces/_index_.tokengrouping.md) \| [Token](_index_.md#token)[] \| TypescriptCompat

_Defined in [types/common.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L10)_

---

### TokenParser

Ƭ **TokenParser**: (token: [Token](_index_.md#token)) => void

_Defined in [types/plugin.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L12)_

---

### UnknownKeyHandler

Ƭ **UnknownKeyHandler**\<T>: (key: string) => undefined \| T

_Defined in [types/theme.ts:3](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L3)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

---

### WarnHandler

Ƭ **WarnHandler**: (message: string, token?: undefined \| string) => void

_Defined in [types/config.ts:32](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L32)_

## Variables

### corners

• `Const` **corners**: (Anonymous function) = positions((key) => CORNERS[key])

_Defined in [helpers.ts:77](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L77)_

---

### cx

• **cx**: [ClassNameCreator](../interfaces/_index_.classnamecreator.md)

_Defined in [index.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/index.ts#L5)_

---

### edges

• `Const` **edges**: (Anonymous function) = positions((key) => (X_Y_TO_EDGES[key] \|\| key) .split('') .sort() // eslint-disable-next-line unicorn/no-reduce, array-callback-return .reduce((result, edge) => { if (result && EDGES[edge]) { result.push(EDGES[edge] as string) return result } }, [] as string[] \| undefined \| void),)

_Defined in [helpers.ts:92](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L92)_

---

### setup

• **setup**: (options?: [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[]) => void

_Defined in [index.ts:6](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/index.ts#L6)_

## Functions

### apply

▸ `Const`**apply**(...`tokens`: unknown[]): [PluginTokenResult](_index_.md#plugintokenresult)

_Defined in [helpers.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L9)_

#### Parameters:

| Name        | Type      |
| ----------- | --------- |
| `...tokens` | unknown[] |

**Returns:** [PluginTokenResult](_index_.md#plugintokenresult)

---

### autoprefix

▸ `Const`**autoprefix**(`property`: string, `value`: string): string

_Defined in [prefix.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/prefix.ts#L5)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `property` | string |
| `value`    | string |

**Returns:** string

---

### compose

▸ `Const`**compose**\<T>(`first`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>, ...`handlers`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[]): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

_Defined in [helpers.ts:105](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L105)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name          | Type                                                    |
| ------------- | ------------------------------------------------------- |
| `first`       | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>   |
| `...handlers` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[] |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

---

### consoleWarn

▸ `Const`**consoleWarn**(`message`: string, `token`: undefined \| string): void

_Defined in [context.ts:25](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L25)_

#### Parameters:

| Name      | Type                |
| --------- | ------------------- |
| `message` | string              |
| `token`   | undefined \| string |

**Returns:** void

---

### convertTo

▸ `Const`**convertTo**(`unit`: string, `screenUnit?`: \"h\" \| \"w\"): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

_Defined in [helpers.ts:22](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L22)_

#### Parameters:

| Name          | Type           |
| ------------- | -------------- |
| `unit`        | string         |
| `screenUnit?` | \"h\" \| \"w\" |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

---

### createInstance

▸ `Const`**createInstance**(`options?`: [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[]): [Instance](../interfaces/_index_.instance.md)

_Defined in [instance.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/instance.ts#L7)_

#### Parameters:

| Name       | Type                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options?` | [ConfigurationOptions](../interfaces/_index_.configurationoptions.md) \| [ConfigurationOptions](../interfaces/_index_.configurationoptions.md)[] |

**Returns:** [Instance](../interfaces/_index_.instance.md)

---

### cssomInjector

▸ `Const`**cssomInjector**(`__namedParameters?`: { nonce: undefined \| string ; target: CSSStyleSheet = getStyleElement().sheet as CSSStyleSheet }): [Injector](../interfaces/_index_.injector.md)\<CSSStyleSheet>

_Defined in [injectors.ts:41](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L41)_

Creates an injector which inserts style rules through the CSS Object Model.

#### Parameters:

| Name                | Type                                                                                              | Default value |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| `__namedParameters` | { nonce: undefined \| string ; target: CSSStyleSheet = getStyleElement().sheet as CSSStyleSheet } | {}            |

**Returns:** [Injector](../interfaces/_index_.injector.md)\<CSSStyleSheet>

---

### cyrb32

▸ `Const`**cyrb32**(`value`: string): string

_Defined in [hash.ts:27](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/hash.ts#L27)_

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `value` | string |

**Returns:** string

---

### defaultToKey

▸ `Const`**defaultToKey**(`key`: string): string

_Defined in [helpers.ts:43](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L43)_

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** string

---

### divideBy

▸ `Const`**divideBy**(`divisor`: number): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

_Defined in [helpers.ts:40](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L40)_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `divisor` | number |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

---

### fail

▸ `Const`**fail**(`message`: string, `token?`: undefined \| string): never

_Defined in [util.ts:18](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L18)_

#### Parameters:

| Name      | Type                |
| --------- | ------------------- |
| `message` | string              |
| `token?`  | undefined \| string |

**Returns:** never

---

### join

▸ `Const`**join**(`parts`: keyof string[], `separator?`: string): string

_Defined in [util.ts:8](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L8)_

#### Parameters:

| Name        | Type           | Default value |
| ----------- | -------------- | ------------- |
| `parts`     | keyof string[] | -             |
| `separator` | string         | "-"           |

**Returns:** string

---

### noOpInjector

▸ `Const`**noOpInjector**(): [Injector](../interfaces/_index_.injector.md)\<null>

_Defined in [injectors.ts:63](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L63)_

An injector placeholder which performs no operations. Useful for avoiding errors in a non-browser environment.

**Returns:** [Injector](../interfaces/_index_.injector.md)\<null>

---

### noprefix

▸ `Const`**noprefix**(`property`: string, `value`: string): string

_Defined in [prefix.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/prefix.ts#L15)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `property` | string |
| `value`    | string |

**Returns:** string

---

### optional

▸ `Const`**optional**(): string

_Defined in [helpers.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L45)_

**Returns:** string

---

### tail

▸ `Const`**tail**\<T>(`array`: T): T

_Defined in [util.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L13)_

#### Type parameters:

| Name | Type                      |
| ---- | ------------------------- |
| `T`  | string \| keyof unknown[] |

#### Parameters:

| Name    | Type |
| ------- | ---- |
| `array` | T    |

**Returns:** T

---

### virtualInjector

▸ `Const`**virtualInjector**(`__namedParameters?`: { target: string[] = [] }): [Injector](../interfaces/_index_.injector.md)\<string[]>

_Defined in [injectors.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L26)_

Creates an injector which collects style rules during server-side rendering.

#### Parameters:

| Name                | Type                      | Default value |
| ------------------- | ------------------------- | ------------- |
| `__namedParameters` | { target: string[] = [] } | {}            |

**Returns:** [Injector](../interfaces/_index_.injector.md)\<string[]>
