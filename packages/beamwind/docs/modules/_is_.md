> [Globals](../README.md) / "is"

# Module: "is"

## Index

### Variables

* [array](_is_.md#array)

### Functions

* [fn](_is_.md#fn)
* [numberLike](_is_.md#numberlike)
* [object](_is_.md#object)
* [string](_is_.md#string)

## Variables

### array

• `Const` **array**: isArray = Array.isArray

*Defined in [is.ts:8](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L8)*

## Functions

### fn

▸ `Const`**fn**\<T>(`value`: unknown): value is T

*Defined in [is.ts:11](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L11)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | Function |

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** value is T

___

### numberLike

▸ `Const`**numberLike**(`value`: string): boolean

*Defined in [is.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** boolean

___

### object

▸ `Const`**object**(`value`: unknown): value is object

*Defined in [is.ts:6](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** value is object

___

### string

▸ `Const`**string**(`value`: unknown): value is string

*Defined in [is.ts:3](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/is.ts#L3)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** value is string
