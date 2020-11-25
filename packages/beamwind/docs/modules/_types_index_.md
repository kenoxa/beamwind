> [Globals](../README.md) / "types/index"

# Module: "types/index"

## Index

### Interfaces

- [ClassNameCreator](../interfaces/_types_index_.classnamecreator.md)
- [ConfigurationOptions](../interfaces/_types_index_.configurationoptions.md)
- [Injector](../interfaces/_types_index_.injector.md)
- [InjectorConfig](../interfaces/_types_index_.injectorconfig.md)
- [Instance](../interfaces/_types_index_.instance.md)
- [PluginApply](../interfaces/_types_index_.pluginapply.md)
- [PluginContext](../interfaces/_types_index_.plugincontext.md)
- [Theme](../interfaces/_types_index_.theme.md)
- [ThemeAngle](../interfaces/_types_index_.themeangle.md)
- [ThemeAnimation](../interfaces/_types_index_.themeanimation.md)
- [ThemeBorderRadius](../interfaces/_types_index_.themeborderradius.md)
- [ThemeBorderWidth](../interfaces/_types_index_.themeborderwidth.md)
- [ThemeBoxShadow](../interfaces/_types_index_.themeboxshadow.md)
- [ThemeColors](../interfaces/_types_index_.themecolors.md)
- [ThemeColorsWithDefault](../interfaces/_types_index_.themecolorswithdefault.md)
- [ThemeDurations](../interfaces/_types_index_.themedurations.md)
- [ThemeFlex](../interfaces/_types_index_.themeflex.md)
- [ThemeFontFamily](../interfaces/_types_index_.themefontfamily.md)
- [ThemeFontSize](../interfaces/_types_index_.themefontsize.md)
- [ThemeFontWeight](../interfaces/_types_index_.themefontweight.md)
- [ThemeKeyframes](../interfaces/_types_index_.themekeyframes.md)
- [ThemeLetterSpacing](../interfaces/_types_index_.themeletterspacing.md)
- [ThemeLineHeight](../interfaces/_types_index_.themelineheight.md)
- [ThemeOpacity](../interfaces/_types_index_.themeopacity.md)
- [ThemeOrder](../interfaces/_types_index_.themeorder.md)
- [ThemeScale](../interfaces/_types_index_.themescale.md)
- [ThemeScreens](../interfaces/_types_index_.themescreens.md)
- [ThemeSizes](../interfaces/_types_index_.themesizes.md)
- [ThemeSpacing](../interfaces/_types_index_.themespacing.md)
- [ThemeStrokeWidth](../interfaces/_types_index_.themestrokewidth.md)
- [ThemeTransitionProperty](../interfaces/_types_index_.themetransitionproperty.md)
- [ThemeTransitionTimingFunction](../interfaces/_types_index_.themetransitiontimingfunction.md)
- [ThemeZIndex](../interfaces/_types_index_.themezindex.md)
- [TokenGrouping](../interfaces/_types_index_.tokengrouping.md)

### Type aliases

- [Declarations](_types_index_.md#declarations)
- [DeepPartial](_types_index_.md#deeppartial)
- [Falsy](_types_index_.md#falsy)
- [Hasher](_types_index_.md#hasher)
- [InjectKeyframes](_types_index_.md#injectkeyframes)
- [OnInit](_types_index_.md#oninit)
- [OnInitCallback](_types_index_.md#oninitcallback)
- [PartialTheme](_types_index_.md#partialtheme)
- [Plugin](_types_index_.md#plugin)
- [PluginResult](_types_index_.md#pluginresult)
- [PluginTokenResult](_types_index_.md#plugintokenresult)
- [Prefixer](_types_index_.md#prefixer)
- [ThemeAnimationDefintion](_types_index_.md#themeanimationdefintion)
- [ThemeConfiguration](_types_index_.md#themeconfiguration)
- [ThemeValueResolver](_types_index_.md#themevalueresolver)
- [Token](_types_index_.md#token)
- [TokenParser](_types_index_.md#tokenparser)
- [UnknownKeyHandler](_types_index_.md#unknownkeyhandler)
- [WarnHandler](_types_index_.md#warnhandler)

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

Ƭ **InjectKeyframes**: (name: string, waypoints?: Record\<string, [Declarations](_types_index_.md#declarations)>) => string

_Defined in [types/plugin.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L5)_

---

### OnInit

Ƭ **OnInit**: (insert: [OnInitCallback](_types_index_.md#oninitcallback), theme: [Theme](../interfaces/_index_.theme.md)) => void

_Defined in [types/config.ts:36](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L36)_

---

### OnInitCallback

Ƭ **OnInitCallback**: (rule: string) => void

_Defined in [types/config.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L34)_

---

### PartialTheme

Ƭ **PartialTheme**: [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

_Defined in [types/config.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L5)_

---

### Plugin

Ƭ **Plugin**: [PluginResult](_types_index_.md#pluginresult) \| (parts: string[], theme: [ThemeValueResolver](_types_index_.md#themevalueresolver), context: [PluginContext](../interfaces/_index_.plugincontext.md)) => [PluginResult](_types_index_.md#pluginresult) \| [PluginTokenResult](_types_index_.md#plugintokenresult)

_Defined in [types/plugin.ts:26](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L26)_

---

### PluginResult

Ƭ **PluginResult**: string \| [Declarations](_types_index_.md#declarations) \| [] \| [Falsy](_types_index_.md#falsy)

_Defined in [types/plugin.ts:20](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/plugin.ts#L20)_

---

### PluginTokenResult

Ƭ **PluginTokenResult**: (parse: [TokenParser](_types_index_.md#tokenparser)) => void

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

Ƭ **ThemeConfiguration**: [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)> \| (activeTheme: [Theme](../interfaces/_index_.theme.md)) => [DeepPartial](_types_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

_Defined in [types/config.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L7)_

---

### ThemeValueResolver

Ƭ **ThemeValueResolver**: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_types_index_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>

_Defined in [types/theme.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L5)_

---

### Token

Ƭ **Token**: string \| [Falsy](_types_index_.md#falsy) \| [TokenGrouping](../interfaces/_index_.tokengrouping.md) \| [Token](_types_index_.md#token)[] \| TypescriptCompat

_Defined in [types/common.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/common.ts#L10)_

---

### TokenParser

Ƭ **TokenParser**: (token: [Token](_types_index_.md#token)) => void

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
