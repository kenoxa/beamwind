> [Globals](../README.md) / "helpers"

# Module: "helpers"

## Index

### Variables

- [corners](_helpers_.md#corners)
- [edges](_helpers_.md#edges)

### Functions

- [apply](_helpers_.md#apply)
- [compose](_helpers_.md#compose)
- [convertTo](_helpers_.md#convertto)
- [defaultToKey](_helpers_.md#defaulttokey)
- [divideBy](_helpers_.md#divideby)
- [expandEdges](_helpers_.md#expandedges)
- [optional](_helpers_.md#optional)

## Variables

### corners

• `Const` **corners**: (Anonymous function) = positions((key) => CORNERS[key])

_Defined in [helpers.ts:77](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L77)_

---

### edges

• `Const` **edges**: (Anonymous function) = positions(expandEdges)

_Defined in [helpers.ts:107](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L107)_

## Functions

### apply

▸ `Const`**apply**(...`tokens`: unknown[]): [PluginTokenResult](_index_.md#plugintokenresult)

_Defined in [helpers.ts:9](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L9)_

#### Parameters:

| Name        | Type      |
| ----------- | --------- |
| `...tokens` | unknown[] |

**Returns:** [PluginTokenResult](_index_.md#plugintokenresult)

---

### compose

▸ `Const`**compose**\<T>(`first`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>, ...`handlers`: [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[]): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

_Defined in [helpers.ts:109](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L109)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name          | Type                                                    |
| ------------- | ------------------------------------------------------- |
| `first`       | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>   |
| `...handlers` | [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>[] |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<T>

---

### convertTo

▸ `Const`**convertTo**(`unit`: string, `screenUnit?`: \"h\" \| \"w\"): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

_Defined in [helpers.ts:22](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L22)_

#### Parameters:

| Name          | Type           |
| ------------- | -------------- |
| `unit`        | string         |
| `screenUnit?` | \"h\" \| \"w\" |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

---

### defaultToKey

▸ `Const`**defaultToKey**(`key`: string): string

_Defined in [helpers.ts:43](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L43)_

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** string

---

### divideBy

▸ `Const`**divideBy**(`divisor`: number): [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

_Defined in [helpers.ts:40](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L40)_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `divisor` | number |

**Returns:** [UnknownKeyHandler](_index_.md#unknownkeyhandler)\<string>

---

### expandEdges

▸ `Const`**expandEdges**(`key`: string): string[] \| undefined

_Defined in [helpers.ts:88](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L88)_

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| `key` | string |

**Returns:** string[] \| undefined

---

### optional

▸ `Const`**optional**(): string

_Defined in [helpers.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L45)_

**Returns:** string
