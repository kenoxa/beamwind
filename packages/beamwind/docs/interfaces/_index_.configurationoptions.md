> [Globals](../README.md) / ["index"](../modules/_index_.md) / ConfigurationOptions

# Interface: ConfigurationOptions

## Hierarchy

- **ConfigurationOptions**

## Index

### Properties

- [hash](_index_.configurationoptions.md#hash)
- [init](_index_.configurationoptions.md#init)
- [injector](_index_.configurationoptions.md#injector)
- [nonce](_index_.configurationoptions.md#nonce)
- [plugins](_index_.configurationoptions.md#plugins)
- [prefix](_index_.configurationoptions.md#prefix)
- [theme](_index_.configurationoptions.md#theme)
- [warn](_index_.configurationoptions.md#warn)

## Properties

### hash

• `Optional` **hash**: [Hasher](../modules/_index_.md#hasher) \| false

_Defined in [types/config.ts:59](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L59)_

---

### init

• `Optional` **init**: [OnInit](../modules/_index_.md#oninit)

_Defined in [types/config.ts:54](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L54)_

Called right before the first rule is injected.

---

### injector

• `Optional` **injector**: [Injector](_index_.injector.md)

_Defined in [types/config.ts:51](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L51)_

Style insertion methodology to be used.

---

### nonce

• `Optional` **nonce**: undefined \| string

_Defined in [types/config.ts:48](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L48)_

Sets a cryptographic nonce (number used once) on the enclosing `<style>` tag when generating a page on demand.

Useful for enforcing a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP).

---

### plugins

• `Optional` **plugins**: Record\<string, [Plugin](../modules/_index_.md#plugin)>

_Defined in [types/config.ts:41](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L41)_

---

### prefix

• `Optional` **prefix**: [Prefixer](../modules/_index_.md#prefixer)

_Defined in [types/config.ts:57](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L57)_

Auto-prefixer method for CSS property–value pairs.

---

### theme

• `Optional` **theme**: [ThemeConfiguration](../modules/_index_.md#themeconfiguration)

_Defined in [types/config.ts:39](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L39)_

---

### warn

• `Optional` **warn**: [WarnHandler](../modules/_index_.md#warnhandler)

_Defined in [types/config.ts:61](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L61)_
