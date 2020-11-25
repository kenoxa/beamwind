> [Globals](../README.md) / "is"

# Module: "is"

## Index

### Variables

- [array](_is_.md#array)

### Functions

- [fn](_is_.md#fn)
- [numberLike](_is_.md#numberlike)
- [object](_is_.md#object)
- [string](_is_.md#string)

## Variables

### array

• `Const` **array**: isArray = Array.isArray

_Defined in [is.ts:8](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L8)_

## Functions

### fn

▸ `Const`**fn**\<T>(`value`: unknown): value is T

_Defined in [is.ts:11](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L11)_

#### Type parameters:

| Name | Type     |
| ---- | -------- |
| `T`  | Function |

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| `value` | unknown |

**Returns:** value is T

---

### numberLike

▸ `Const`**numberLike**(`value`: string): boolean

_Defined in [is.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L15)_

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `value` | string |

**Returns:** boolean

---

### object

▸ `Const`**object**(`value`: unknown): value is object

_Defined in [is.ts:6](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L6)_

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| `value` | unknown |

**Returns:** value is object

---

### string

▸ `Const`**string**(`value`: unknown): value is string

_Defined in [is.ts:3](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L3)_

#### Parameters:

| Name    | Type    |
| ------- | ------- |
| `value` | unknown |

**Returns:** value is string
