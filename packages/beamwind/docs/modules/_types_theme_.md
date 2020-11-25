> [Globals](../README.md) / "types/theme"

# Module: "types/theme"

## Index

### Interfaces

* [Theme](../interfaces/_types_theme_.theme.md)
* [ThemeAngle](../interfaces/_types_theme_.themeangle.md)
* [ThemeAnimation](../interfaces/_types_theme_.themeanimation.md)
* [ThemeBorderRadius](../interfaces/_types_theme_.themeborderradius.md)
* [ThemeBorderWidth](../interfaces/_types_theme_.themeborderwidth.md)
* [ThemeBoxShadow](../interfaces/_types_theme_.themeboxshadow.md)
* [ThemeColors](../interfaces/_types_theme_.themecolors.md)
* [ThemeColorsWithDefault](../interfaces/_types_theme_.themecolorswithdefault.md)
* [ThemeDurations](../interfaces/_types_theme_.themedurations.md)
* [ThemeFlex](../interfaces/_types_theme_.themeflex.md)
* [ThemeFontFamily](../interfaces/_types_theme_.themefontfamily.md)
* [ThemeFontSize](../interfaces/_types_theme_.themefontsize.md)
* [ThemeFontWeight](../interfaces/_types_theme_.themefontweight.md)
* [ThemeKeyframes](../interfaces/_types_theme_.themekeyframes.md)
* [ThemeLetterSpacing](../interfaces/_types_theme_.themeletterspacing.md)
* [ThemeLineHeight](../interfaces/_types_theme_.themelineheight.md)
* [ThemeOpacity](../interfaces/_types_theme_.themeopacity.md)
* [ThemeOrder](../interfaces/_types_theme_.themeorder.md)
* [ThemeScale](../interfaces/_types_theme_.themescale.md)
* [ThemeScreens](../interfaces/_types_theme_.themescreens.md)
* [ThemeSizes](../interfaces/_types_theme_.themesizes.md)
* [ThemeSpacing](../interfaces/_types_theme_.themespacing.md)
* [ThemeStrokeWidth](../interfaces/_types_theme_.themestrokewidth.md)
* [ThemeTransitionProperty](../interfaces/_types_theme_.themetransitionproperty.md)
* [ThemeTransitionTimingFunction](../interfaces/_types_theme_.themetransitiontimingfunction.md)
* [ThemeZIndex](../interfaces/_types_theme_.themezindex.md)

### Type aliases

* [ThemeAnimationDefintion](_types_theme_.md#themeanimationdefintion)
* [ThemeValueResolver](_types_theme_.md#themevalueresolver)
* [UnknownKeyHandler](_types_theme_.md#unknownkeyhandler)

## Type aliases

### ThemeAnimationDefintion

Ƭ  **ThemeAnimationDefintion**: string \| [] \| []

*Defined in [types/theme.ts:227](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L227)*

___

### ThemeValueResolver

Ƭ  **ThemeValueResolver**: \<P, K>(section: P, key?: string \| undefined, handleUnknownKey?: [UnknownKeyHandler](_types_theme_.md#unknownkeyhandler)\<NonNullable\<Theme[P]>[K]>) => NonNullable\<NonNullable\<Theme[P]>[K]>

*Defined in [types/theme.ts:5](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L5)*

___

### UnknownKeyHandler

Ƭ  **UnknownKeyHandler**\<T>: (key: string) => undefined \| T

*Defined in [types/theme.ts:3](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/types/theme.ts#L3)*

#### Type parameters:

Name |
------ |
`T` |
