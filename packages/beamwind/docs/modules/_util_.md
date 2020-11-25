> [Globals](../README.md) / "util"

# Module: "util"

## Index

### Interfaces

* [Cache](../interfaces/_util_.cache.md)

### Functions

* [asTokens](_util_.md#astokens)
* [createCache](_util_.md#createcache)
* [fail](_util_.md#fail)
* [format](_util_.md#format)
* [join](_util_.md#join)
* [joinTruthy](_util_.md#jointruthy)
* [merge](_util_.md#merge)
* [sortedInsertionIndex](_util_.md#sortedinsertionindex)
* [tail](_util_.md#tail)
* [toFixed](_util_.md#tofixed)

## Functions

### asTokens

▸ `Const`**asTokens**(`tokens`: unknown[]): [Token](_index_.md#token)[]

*Defined in [util.ts:69](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L69)*

#### Parameters:

Name | Type |
------ | ------ |
`tokens` | unknown[] |

**Returns:** [Token](_index_.md#token)[]

___

### createCache

▸ `Const`**createCache**\<V>(): [Cache](../interfaces/_util_.cache.md)\<V>

*Defined in [util.ts:28](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L28)*

#### Type parameters:

Name |
------ |
`V` |

**Returns:** [Cache](../interfaces/_util_.cache.md)\<V>

___

### fail

▸ `Const`**fail**(`message`: string, `token?`: undefined \| string): never

*Defined in [util.ts:18](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`token?` | undefined \| string |

**Returns:** never

___

### format

▸ `Const`**format**(`message`: string, `token?`: undefined \| string): string

*Defined in [util.ts:15](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`token?` | undefined \| string |

**Returns:** string

___

### join

▸ `Const`**join**(`parts`: keyof string[], `separator?`: string): string

*Defined in [util.ts:8](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L8)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`parts` | keyof string[] | - |
`separator` | string | "-" |

**Returns:** string

___

### joinTruthy

▸ `Const`**joinTruthy**(`parts`: keyof (undefined \| null \| string \| false \| 0)[], `separator?`: undefined \| string): string

*Defined in [util.ts:10](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`parts` | keyof (undefined \| null \| string \| false \| 0)[] |
`separator?` | undefined \| string |

**Returns:** string

___

### merge

▸ `Const`**merge**\<A, B>(`a`: A, `b`: [DeepPartial](_index_.md#deeppartial)\<B> \| undefined): A & B

*Defined in [util.ts:101](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L101)*

#### Type parameters:

Name | Type |
------ | ------ |
`A` | object |
`B` | object |

#### Parameters:

Name | Type |
------ | ------ |
`a` | A |
`b` | [DeepPartial](_index_.md#deeppartial)\<B> \| undefined |

**Returns:** A & B

___

### sortedInsertionIndex

▸ `Const`**sortedInsertionIndex**(`array`: keyof number[], `element`: number): number

*Defined in [util.ts:79](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L79)*

Find the array index of where to add an element to keep it sorted.

#### Parameters:

Name | Type |
------ | ------ |
`array` | keyof number[] |
`element` | number |

**Returns:** number

The insertion index

___

### tail

▸ `Const`**tail**\<T>(`array`: T): T

*Defined in [util.ts:13](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L13)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | string \| keyof unknown[] |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T |

**Returns:** T

___

### toFixed

▸ `Const`**toFixed**(`value`: number, `precision`: number): number

*Defined in [util.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/util.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |
`precision` | number |

**Returns:** number
