> [Globals](../README.md) / ["index"](../modules/_index_.md) / InjectorConfig

# Interface: InjectorConfig\<T>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **InjectorConfig**

## Index

### Properties

* [nonce](_index_.injectorconfig.md#nonce)
* [target](_index_.injectorconfig.md#target)

## Properties

### nonce

• `Optional` **nonce**: undefined \| string

*Defined in [types/config.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L15)*

Sets a cryptographic nonce (number used once) on the enclosing `<style>` tag when generating a page on demand.

Useful for enforcing a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP).

___

### target

• `Optional` **target**: T

*Defined in [types/config.ts:18](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/config.ts#L18)*

Target to insert rules into.
