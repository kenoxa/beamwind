> [Globals](../README.md) / ["context"](../modules/_context_.md) / Context

# Interface: Context

## Hierarchy

- **Context**

## Index

### Properties

- [a](_context_.context.md#a)
- [c](_context_.context.md#c)
- [g](_context_.context.md#g)
- [i](_context_.context.md#i)
- [k](_context_.context.md#k)
- [p](_context_.context.md#p)
- [s](_context_.context.md#s)
- [t](_context_.context.md#t)
- [w](_context_.context.md#w)

## Properties

### a

• **a**: (token: string) => string

_Defined in [context.ts:40](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L40)_

Creates marker class name. This is used by group-hover and group-focus

---

### c

• **c**: (options?: [ConfigurationOptions](_index_.configurationoptions.md) \| [ConfigurationOptions](_index_.configurationoptions.md)[]) => void

_Defined in [context.ts:67](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L67)_

Configure

---

### g

• **g**: (token: string, variants: keyof string[]) => string \| undefined

_Defined in [context.ts:45](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L45)_

Get cached className

---

### i

• **i**: (token: string, variants: keyof string[], declarations: [Declarations](../modules/_index_.md#declarations), suffix?: undefined \| string) => string

_Defined in [context.ts:55](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L55)_

Injects css

---

### k

• **k**: (name: string, waypoints: Record\<string, [Declarations](../modules/_index_.md#declarations)>) => string

_Defined in [context.ts:62](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L62)_

---

### p

• **p**: (id: string) => [Plugin](../modules/_index_.md#plugin) \| undefined

_Defined in [context.ts:37](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L37)_

Plugin accessor

---

### s

• **s**: (token: string, variants: keyof string[], className: string) => void

_Defined in [context.ts:50](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L50)_

Set cached className

---

### t

• **t**: \<P>(section: P) => Theme[P] \| undefined

_Defined in [context.ts:32](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L32)_

Theme section accessor

---

### w

• **w**: (token: string, message: string) => void

_Defined in [context.ts:72](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/context.ts#L72)_

Warn
