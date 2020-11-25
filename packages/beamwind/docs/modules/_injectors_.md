> [Globals](../README.md) / "injectors"

# Module: "injectors"

## Index

### Functions

* [cssomInjector](_injectors_.md#cssominjector)
* [noOpInjector](_injectors_.md#noopinjector)
* [virtualInjector](_injectors_.md#virtualinjector)

## Functions

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

### noOpInjector

▸ `Const`**noOpInjector**(): [Injector](../interfaces/_index_.injector.md)\<null>

*Defined in [injectors.ts:63](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/injectors.ts#L63)*

An injector placeholder which performs no operations. Useful for avoiding errors in a non-browser environment.

**Returns:** [Injector](../interfaces/_index_.injector.md)\<null>

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
