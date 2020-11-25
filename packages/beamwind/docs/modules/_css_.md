> [Globals](../README.md) / "css"

# Module: "css"

## Index

### Variables

* [escape](_css_.md#escape)

### Functions

* [createRule](_css_.md#createrule)
* [isAtRuleVariant](_css_.md#isatrulevariant)
* [isPseudoVariant](_css_.md#ispseudovariant)
* [toClassName](_css_.md#toclassname)

## Variables

### escape

• `Const` **escape**: escape = (typeof CSS !== 'undefined' && CSS.escape) \|\| // Simplified: escaping only special characters ((className: string): string => className.replace(/[!"#$%&'()*+,./:;\<=>?@[\]^\`{\|}~]/g, '\\$&'))

*Defined in [css.ts:4](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L4)*

## Functions

### createRule

▸ `Const`**createRule**(`className`: string, `variants`: keyof string[], `declaration`: string, `suffix`: string, `tag`: (token: string) => string): string

*Defined in [css.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`className` | string |
`variants` | keyof string[] |
`declaration` | string |
`suffix` | string |
`tag` | (token: string) => string |

**Returns:** string

___

### isAtRuleVariant

▸ `Const`**isAtRuleVariant**(`variant`: string): boolean

*Defined in [css.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`variant` | string |

**Returns:** boolean

___

### isPseudoVariant

▸ `Const`**isPseudoVariant**(`variant`: string): boolean

*Defined in [css.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`variant` | string |

**Returns:** boolean

___

### toClassName

▸ `Const`**toClassName**(`token`: string, `variants`: keyof string[]): string

*Defined in [css.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`token` | string |
`variants` | keyof string[] |

**Returns:** string
