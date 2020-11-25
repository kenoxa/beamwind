> [Globals](../README.md) / "types/index"

# Module: "types/index"

## Index

### Interfaces

* [ClassNameCreator](../interfaces/_types_index_.classnamecreator.md)
* [ConfigurationOptions](../interfaces/_types_index_.configurationoptions.md)
* [Injector](../interfaces/_types_index_.injector.md)
* [InjectorConfig](../interfaces/_types_index_.injectorconfig.md)
* [Instance](../interfaces/_types_index_.instance.md)
* [PluginApply](../interfaces/_types_index_.pluginapply.md)
* [PluginContext](../interfaces/_types_index_.plugincontext.md)
* [Theme](../interfaces/_types_index_.theme.md)
* [ThemeAngle](../interfaces/_types_index_.themeangle.md)
* [ThemeAnimation](../interfaces/_types_index_.themeanimation.md)
* [ThemeBorderRadius](../interfaces/_types_index_.themeborderradius.md)
* [ThemeBorderWidth](../interfaces/_types_index_.themeborderwidth.md)
* [ThemeBoxShadow](../interfaces/_types_index_.themeboxshadow.md)
* [ThemeColors](../interfaces/_types_index_.themecolors.md)
* [ThemeColorsWithDefault](../interfaces/_types_index_.themecolorswithdefault.md)
* [ThemeDurations](../interfaces/_types_index_.themedurations.md)
* [ThemeFlex](../interfaces/_types_index_.themeflex.md)
* [ThemeFontFamily](../interfaces/_types_index_.themefontfamily.md)
* [ThemeFontSize](../interfaces/_types_index_.themefontsize.md)
* [ThemeFontWeight](../interfaces/_types_index_.themefontweight.md)
* [ThemeKeyframes](../interfaces/_types_index_.themekeyframes.md)
* [ThemeLetterSpacing](../interfaces/_types_index_.themeletterspacing.md)
* [ThemeLineHeight](../interfaces/_types_index_.themelineheight.md)
* [ThemeOpacity](../interfaces/_types_index_.themeopacity.md)
* [ThemeOrder](../interfaces/_types_index_.themeorder.md)
* [ThemeScale](../interfaces/_types_index_.themescale.md)
* [ThemeScreens](../interfaces/_types_index_.themescreens.md)
* [ThemeSizes](../interfaces/_types_index_.themesizes.md)
* [ThemeSpacing](../interfaces/_types_index_.themespacing.md)
* [ThemeStrokeWidth](../interfaces/_types_index_.themestrokewidth.md)
* [ThemeTransitionProperty](../interfaces/_types_index_.themetransitionproperty.md)
* [ThemeTransitionTimingFunction](../interfaces/_types_index_.themetransitiontimingfunction.md)
* [ThemeZIndex](../interfaces/_types_index_.themezindex.md)
* [TokenGrouping](../interfaces/_types_index_.tokengrouping.md)

### Type aliases

* [Declarations](_types_index_.md#declarations)
* [DeepPartial](_types_index_.md#deeppartial)
* [Falsy](_types_index_.md#falsy)
* [Hasher](_types_index_.md#hasher)
* [InjectKeyframes](_types_index_.md#injectkeyframes)
* [OnInit](_types_index_.md#oninit)
* [OnInitCallback](_types_index_.md#oninitcallback)
* [PartialTheme](_types_index_.md#partialtheme)
* [Plugin](_types_index_.md#plugin)
* [PluginResult](_types_index_.md#pluginresult)
* [PluginTokenResult](_types_index_.md#plugintokenresult)
* [Prefixer](_types_index_.md#prefixer)
* [ThemeAnimationDefintion](_types_index_.md#themeanimationdefintion)
* [ThemeConfiguration](_types_index_.md#themeconfiguration)
* [ThemeValueResolver](_types_index_.md#themevalueresolver)
* [Token](_types_index_.md#token)
* [TokenParser](_types_index_.md#tokenparser)
* [UnknownKeyHandler](_types_index_.md#unknownkeyhandler)
* [WarnHandler](_types_index_.md#warnhandler)

## Type aliases

### Declarations

Ƭ  **Declarations**: Record\<string, string \| [Falsy](_types_index_.md#falsy)>

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

Ƭ  **InjectKeyframes**: (name: string, waypoints?: Record\<string, [Declarations](_types_index_.md#declarations)>) => string

*Defined in [types/plugin.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L5)*

___

### OnInit

Ƭ  **OnInit**: (insert: [OnInitCallback](_types_index_.md#oninitcallback), theme: [Theme](../interfaces/_index_.theme.md)) => void

*Defined in [types/config.ts:36](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L36)*

___

### OnInitCallback

Ƭ  **OnInitCallback**: (rule: string) => void

*Defined in [types/config.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L34)*

___

### PartialTheme

Ƭ  **PartialTheme**: [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

*Defined in [types/config.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L5)*

___

### Plugin

Ƭ  **Plugin**: [PluginResult](_types_index_.md#pluginresult) \| (parts: string[], theme: [ThemeValueResolver](_types_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_types_index_.md#pluginresult) \| [PluginTokenResult](_types_index_.md#plugintokenresult)

*Defined in [types/plugin.ts:27](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L27)*

___

### PluginResult

Ƭ  **PluginResult**: string \| [Declarations](_types_index_.md#declarations) \| [] \| [Falsy](_types_index_.md#falsy)

*Defined in [types/plugin.ts:21](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L21)*

___

### PluginTokenResult

Ƭ  **PluginTokenResult**: (parse: [TokenParser](_types_index_.md#tokenparser)) => void

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

Ƭ  **ThemeConfiguration**: [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)> \| (activeTheme: [Theme](../interfaces/_index_.theme.md)) => [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

*Defined in [types/config.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L7)*

___

### ThemeValueResolver

Ƭ  **ThemeValueResolver**: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_types_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>

*Defined in [types/theme.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L5)*

___

### Token

Ƭ  **Token**: string \| [Falsy](_types_index_.md#falsy) \| [TokenGrouping](../interfaces/_index_.tokengrouping.md) \| [Token](_types_index_.md#token)[] \| TypescriptCompat

*Defined in [types/common.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L10)*

___

### TokenParser

Ƭ  **TokenParser**: (token: [Token](_types_index_.md#token)) => void

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
