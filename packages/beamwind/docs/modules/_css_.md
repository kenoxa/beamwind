> [Globals](../README.md) / "css"

# Module: "css"

## Index

### Variables

- [escape](_css_.md#escape)

### Functions

- [createRule](_css_.md#createrule)
- [isAtRuleVariant](_css_.md#isatrulevariant)
- [isPseudoVariant](_css_.md#ispseudovariant)
- [toClassName](_css_.md#toclassname)

## Variables

### escape

• `Const` **escape**: escape = (typeof CSS !== 'undefined' && CSS.escape) \|\| // Simplified: escaping only special characters ((className: string): string => className.replace(/[!"#$%&'()*+,./:;\<=>?@[\]^\`{\|}~]/g, '\\$&'))

_Defined in [css.ts:4](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L4)_

## Functions

### createRule

▸ `Const`**createRule**(`className`: string, `variants`: keyof string[], `declaration`: string, `suffix`: string, `tag`: (token: string) => string): string

_Defined in [css.ts:34](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L34)_

#### Parameters:

| Name          | Type                      |
| ------------- | ------------------------- |
| `className`   | string                    |
| `variants`    | keyof string[]            |
| `declaration` | string                    |
| `suffix`      | string                    |
| `tag`         | (token: string) => string |

**Returns:** string

---

### isAtRuleVariant

▸ `Const`**isAtRuleVariant**(`variant`: string): boolean

_Defined in [css.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L10)_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `variant` | string |

**Returns:** boolean

---

### isPseudoVariant

▸ `Const`**isPseudoVariant**(`variant`: string): boolean

_Defined in [css.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L9)_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `variant` | string |

**Returns:** boolean

---

### toClassName

▸ `Const`**toClassName**(`token`: string, `variants`: keyof string[]): string

_Defined in [css.ts:12](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/css.ts#L12)_

#### Parameters:

| Name       | Type           |
| ---------- | -------------- |
| `token`    | string         |
| `variants` | keyof string[] |

**Returns:** string
