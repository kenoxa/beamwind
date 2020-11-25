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
- [optional](_helpers_.md#optional)

## Variables

### corners

• `Const` **corners**: (Anonymous function) = positions((key) => CORNERS[key])

_Defined in [helpers.ts:77](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L77)_

---

### edges

• `Const` **edges**: (Anonymous function) = positions((key) => (X_Y_TO_EDGES[key] \|\| key) .split('') .sort() // eslint-disable-next-line unicorn/no-reduce, array-callback-return .reduce((result, edge) => { if (result && EDGES[edge]) { result.push(EDGES[edge] as string) return result } }, [] as string[] \| undefined \| void),)

_Defined in [helpers.ts:92](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L92)_

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

_Defined in [helpers.ts:105](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L105)_

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

### optional

▸ `Const`**optional**(): string

_Defined in [helpers.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/helpers.ts#L45)_

**Returns:** string
