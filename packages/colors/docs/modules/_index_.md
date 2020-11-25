> [Globals](../README.md) / "index"

# Module: "index"

## Index

### Type aliases

* [ThemeColors](_index_.md#themecolors)

### Functions

* [createColorVariants](_index_.md#createcolorvariants)
* [getContrastVariant](_index_.md#getcontrastvariant)
* [getLightVariant](_index_.md#getlightvariant)
* [getShadeVariant](_index_.md#getshadevariant)
* [isLight](_index_.md#islight)

## Type aliases

### ThemeColors

Ƭ  **ThemeColors**: Record\<string, undefined \| string>

*Defined in [index.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/index.ts#L5)*

## Functions

### createColorVariants

▸ `Const`**createColorVariants**(`colors`: [ThemeColors](_index_.md#themecolors), `key`: string, `color?`: undefined \| string): [ThemeColors](_index_.md#themecolors)

*Defined in [index.ts:7](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/index.ts#L7)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`colors` | [ThemeColors](_index_.md#themecolors) | - |
`key` | string | - |
`color` | undefined \| string | colors[key] |

**Returns:** [ThemeColors](_index_.md#themecolors)

___

### getContrastVariant

▸ `Const`**getContrastVariant**(`color`: string): string

*Defined in [colors.ts:277](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/colors.ts#L277)*

#### Parameters:

Name | Type |
------ | ------ |
`color` | string |

**Returns:** string

___

### getLightVariant

▸ `Const`**getLightVariant**(`color`: string): string

*Defined in [colors.ts:172](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/colors.ts#L172)*

#### Parameters:

Name | Type |
------ | ------ |
`color` | string |

**Returns:** string

___

### getShadeVariant

▸ `Const`**getShadeVariant**(`color`: string, `darker`: number, `lighter?`: undefined \| number): string

*Defined in [colors.ts:300](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/colors.ts#L300)*

#### Parameters:

Name | Type |
------ | ------ |
`color` | string |
`darker` | number |
`lighter?` | undefined \| number |

**Returns:** string

___

### isLight

▸ `Const`**isLight**(`color`: string): boolean

*Defined in [colors.ts:146](https://github.com/kenoxa/beamwind/blob/main/packages/colors/src/colors.ts#L146)*

#### Parameters:

Name | Type |
------ | ------ |
`color` | string |

**Returns:** boolean
