> [Globals](../README.md) / ["types/index"](../modules/_types_index_.md) / ConfigurationOptions

# Interface: ConfigurationOptions

## Hierarchy

* **ConfigurationOptions**

## Index

### Properties

* [hash](_types_index_.configurationoptions.md#hash)
* [init](_types_index_.configurationoptions.md#init)
* [injector](_types_index_.configurationoptions.md#injector)
* [nonce](_types_index_.configurationoptions.md#nonce)
* [plugins](_types_index_.configurationoptions.md#plugins)
* [prefix](_types_index_.configurationoptions.md#prefix)
* [theme](_types_index_.configurationoptions.md#theme)
* [warn](_types_index_.configurationoptions.md#warn)

## Properties

### hash

• `Optional` **hash**: [Hasher](../modules/_types_index_.md#hasher) \| false

*Defined in [types/config.ts:59](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L59)*

___

### init

• `Optional` **init**: [OnInit](../modules/_types_index_.md#oninit)

*Defined in [types/config.ts:54](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L54)*

Called right before the first rule is injected.

___

### injector

• `Optional` **injector**: [Injector](_types_index_.injector.md)

*Defined in [types/config.ts:51](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L51)*

Style insertion methodology to be used.

___

### nonce

• `Optional` **nonce**: undefined \| string

*Defined in [types/config.ts:48](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L48)*

Sets a cryptographic nonce (number used once) on the enclosing `<style>` tag when generating a page on demand.

Useful for enforcing a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP).

___

### plugins

• `Optional` **plugins**: Record\<string, [Plugin](../modules/_types_index_.md#plugin)>

*Defined in [types/config.ts:41](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L41)*

___

### prefix

• `Optional` **prefix**: [Prefixer](../modules/_types_index_.md#prefixer)

*Defined in [types/config.ts:57](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L57)*

Auto-prefixer method for CSS property–value pairs.

___

### theme

• `Optional` **theme**: [ThemeConfiguration](../modules/_types_index_.md#themeconfiguration)

*Defined in [types/config.ts:39](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L39)*

___

### warn

• `Optional` **warn**: [WarnHandler](../modules/_types_index_.md#warnhandler)

*Defined in [types/config.ts:61](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L61)*
