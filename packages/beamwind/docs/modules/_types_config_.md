> [Globals](../README.md) / "types/config"

# Module: "types/config"

## Index

### Interfaces

- [ConfigurationOptions](../interfaces/_types_config_.configurationoptions.md)
- [Injector](../interfaces/_types_config_.injector.md)
- [InjectorConfig](../interfaces/_types_config_.injectorconfig.md)

### Type aliases

- [Hasher](_types_config_.md#hasher)
- [OnInit](_types_config_.md#oninit)
- [OnInitCallback](_types_config_.md#oninitcallback)
- [PartialTheme](_types_config_.md#partialtheme)
- [Prefixer](_types_config_.md#prefixer)
- [ThemeConfiguration](_types_config_.md#themeconfiguration)
- [WarnHandler](_types_config_.md#warnhandler)

## Type aliases

### Hasher

Ƭ **Hasher**: (value: string) => string

_Defined in [types/config.ts:30](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L30)_

---

### OnInit

Ƭ **OnInit**: (insert: [OnInitCallback](_types_config_.md#oninitcallback), theme: [Theme](../interfaces/_index_.theme.md)) => void

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

### Prefixer

Ƭ **Prefixer**: (property: string, value: string) => string

_Defined in [types/config.ts:28](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L28)_

---

### ThemeConfiguration

Ƭ **ThemeConfiguration**: [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)> \| (activeTheme: [Theme](../interfaces/_index_.theme.md)) => [DeepPartial](_index_.md#deeppartial)\<[Theme](../interfaces/_index_.theme.md)>

_Defined in [types/config.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L7)_

---

### WarnHandler

Ƭ **WarnHandler**: (message: string, token?: undefined \| string) => void

_Defined in [types/config.ts:32](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L32)_
