> [Globals](../README.md) / "helpers"

# Module: "helpers"

## Index

### Variables

* [corners](_helpers_.md#corners)
* [edges](_helpers_.md#edges)

### Functions

* [apply](_helpers_.md#apply)
* [compose](_helpers_.md#compose)
* [convertTo](_helpers_.md#convertto)
* [defaultToKey](_helpers_.md#defaulttokey)
* [divideBy](_helpers_.md#divideby)
* [expandEdges](_helpers_.md#expandedges)
* [optional](_helpers_.md#optional)

## Variables

### corners

• `Const` **corners**: (Anonymous function) = positions((key) => CORNERS[key])

*Defined in [helpers.ts:77](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L77)*

___

### edges

• `Const` **edges**: (Anonymous function) = positions(expandEdges)

*Defined in [helpers.ts:107](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L107)*

## Functions

### apply

▸ `Const`**apply**(...`tokens`: unknown[]): [PluginTokenResult](_index_.md#plugintokenresult)

*Defined in [helpers.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`...tokens` | unknown[] |

**Returns:** [PluginTokenResult](_index_.md#plugintokenresult)

___

### compose

▸ `Const`**compose**\<T>(`first`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>, ...`handlers`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[]): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

*Defined in [helpers.ts:109](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L109)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`first` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T> |
`...handlers` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[] |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

___

### convertTo

▸ `Const`**convertTo**(`unit`: string, `screenUnit?`: \"h\" \| \"w\"): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

*Defined in [helpers.ts:22](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`unit` | string |
`screenUnit?` | \"h\" \| \"w\" |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

___

### defaultToKey

▸ `Const`**defaultToKey**(`key`: string): string

*Defined in [helpers.ts:43](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string

___

### divideBy

▸ `Const`**divideBy**(`divisor`: number): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

*Defined in [helpers.ts:40](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`divisor` | number |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

___

### expandEdges

▸ `Const`**expandEdges**(`key`: string): string[] \| undefined

*Defined in [helpers.ts:88](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L88)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** string[] \| undefined

___

### optional

▸ `Const`**optional**(): string

*Defined in [helpers.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L45)*

**Returns:** string
