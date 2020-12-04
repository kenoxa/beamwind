import { calculatePrecedence } from '../precedence'

test('responsive (ascending -> none, sm, md, lg, xl, 2xl, unknown)', () => {
  const none = calculatePrecedence(false, [], { 'font-size': '1rem' })

  const sm = calculatePrecedence(false, ['@media (min-width: 640px)'], { 'font-size': '1rem' })

  const md = calculatePrecedence(false, ['@media (min-width: 768px)'], { 'font-size': '1rem' })

  const lg = calculatePrecedence(false, ['@media (min-width: 1000px)'], { 'font-size': '1rem' })

  const xl = calculatePrecedence(false, ['@media (min-width: 1200px)'], { 'font-size': '1rem' })

  const xxl = calculatePrecedence(false, ['@media (min-width: 1400px)'], { 'font-size': '1rem' })

  const desktop = calculatePrecedence(false, ['@media (min-width: 1800px)'], {
    'font-size': '1rem',
  })

  expect(none).toBeLessThan(sm)
  expect(sm).toBeLessThan(md)
  expect(md).toBeLessThan(lg)
  expect(lg).toBeLessThan(xl)
  expect(xl).toBeLessThan(xxl)
  expect(xxl).toBeLessThan(desktop)

  // Using rem
  expect(none).toBeLessThan(
    calculatePrecedence(false, ['@media (min-width: 100rem)'], { 'font-size': '1rem' }),
  )

  expect(
    calculatePrecedence(false, ['@media (min-width: 80rem)'], { 'font-size': '1rem' }),
  ).toBeLessThan(
    calculatePrecedence(false, ['@media (min-width: 100rem)'], { 'font-size': '1rem' }),
  )

  expect(
    calculatePrecedence(false, ['@media (min-width: 50rem)'], { 'font-size': '1rem' }),
  ).toBeLessThan(calculatePrecedence(false, ['@media (min-width: 80rem)'], { 'font-size': '1rem' }))
})

test('precedence of other at-rules (ascending -> counting occurences of ";", "-" and "-")', () => {
  const xxl = calculatePrecedence(false, ['@media (min-width: 1400px)'], { 'font-size': '1rem' })

  const motionReduce = calculatePrecedence(false, ['@media (prefers-reduced-motion:reduce)'], {
    a: '1',
  })

  const motionSafe = calculatePrecedence(false, ['@media (prefers-reduced-motion:no-preference)'], {
    a: '1',
  })

  const keyframes = calculatePrecedence(
    false,
    ['@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}'],
    {},
  )

  const sticky = calculatePrecedence(
    false,
    ['@supports ((position: -webkit-sticky) or (position:sticky))'],
    { a: '1' },
  )

  const stickyLandscape = calculatePrecedence(
    false,
    [
      '@media (orientation: landscape)',
      '@supports ((position: -webkit-sticky) or (position:sticky))',
    ],
    { a: '1' },
  )

  const dark = calculatePrecedence(false, ['@media (prefers-color-scheme: dark)'], { a: '1' })

  const light = calculatePrecedence(false, ['@media (prefers-color-scheme: light)'], { a: '1' })

  expect(keyframes).toBeLessThan(motionReduce)
  expect(motionReduce).toBeLessThan(motionSafe)
  expect(motionSafe).toBe(sticky)

  expect(motionReduce).toBe(dark)
  expect(motionReduce).toBe(light)

  expect(sticky).toBeLessThan(stickyLandscape)

  expect(stickyLandscape).toBeLessThan(xxl)
})

test('pseudo classes (ascending -> link, visited, empty, focus-within, hover, focus, focus-visible, active, disabled, other)', () => {
  const link = calculatePrecedence(false, [':link'], { a: '1' })

  const visited = calculatePrecedence(false, [':visited'], { a: '1' })

  const empty = calculatePrecedence(false, [':empty'], { a: '1' })

  const focusWithin = calculatePrecedence(false, [':focus-within'], { a: '1' })

  const groupHover = calculatePrecedence(false, [':group-hover'], { a: '1' })
  const hover = calculatePrecedence(false, [':hover'], { a: '1' })

  const groupFocus = calculatePrecedence(false, [':group-focus'], { a: '1' })
  const focus = calculatePrecedence(false, [':focus'], { a: '1' })

  const focusVisible = calculatePrecedence(false, [':focus-visible'], { a: '1' })
  const active = calculatePrecedence(false, [':active'], { a: '1' })
  const disabled = calculatePrecedence(false, [':disabled'], { a: '1' })

  expect(link).toBeLessThan(visited)
  expect(visited).toBeLessThan(empty)
  expect(empty).toBeLessThan(groupHover)
  expect(groupHover).toBeLessThan(groupFocus)
  expect(groupFocus).toBeLessThan(focusWithin)
  expect(focusWithin).toBeLessThan(hover)
  expect(hover).toBeLessThan(focus)
  expect(focus).toBeLessThan(focusVisible)
  expect(focusVisible).toBeLessThan(active)
  expect(active).toBeLessThan(disabled)

  const enabled = calculatePrecedence(false, [':enabled'], { a: '1' })

  expect(disabled).toBeLessThan(enabled)

  expect(enabled).toBe(calculatePrecedence(false, [':required'], { a: '1' }))

  expect(enabled).toBe(calculatePrecedence(false, [':last-child'], { a: '1' }))
})

test('properties (ascending - using the largest precedence of all properties by counting occurences of ";", "-" and "-")', () => {
  const a = calculatePrecedence(false, [], { a: '1' })

  const b = calculatePrecedence(false, [], { b: '1' })

  expect(a).toBe(b)

  const c = calculatePrecedence(false, [], { 'ab-c': '1' })

  const d = calculatePrecedence(false, [], { 'abc-d': '1' })

  expect(c).toBe(d)
  expect(b).toBeLessThan(c)

  const prefix = calculatePrecedence(false, [], { '--prefix': '1' })

  expect(prefix).toBeLessThan(a)

  const prefix2 = calculatePrecedence(false, [], { '--prefix-2': '1' })

  expect(prefix2).toBeLessThan(c)
  expect(prefix).toBe(prefix2)

  // Custom properties are skipped
  const prefix3 = calculatePrecedence(false, [], { '--prefix-a': '1', d: '1' })
  expect(prefix3).toBeLessThan(prefix2)

  // Special short hand properties handling
  expect(calculatePrecedence(false, [], { border: '1' })).toBeLessThan(
    calculatePrecedence(false, [], { 'border-top': '1' }),
  )

  expect(calculatePrecedence(false, [], { 'border-top': '1' })).toBeLessThan(
    calculatePrecedence(false, [], { 'border-color': '1' }),
  )

  expect(calculatePrecedence(false, [], { 'border-color': '1' })).toBeLessThan(
    calculatePrecedence(false, [], { 'border-top-color': '1' }),
  )

  expect(calculatePrecedence(false, [], { 'place-content': '1' })).toBe(
    calculatePrecedence(false, [], { display: '1' }),
  )
})

test('number of declarations (descending -> higher precedence for fewer declarations)', () => {
  const a = calculatePrecedence(false, [], { a: '1', b: '1' })

  const b = calculatePrecedence(false, [], { a: '1' })

  expect(a).toBeLessThan(b)
})

test('values (ascending - using the largest precedence of all values by counting occurences of ";", "-" and "-")', () => {
  const a = calculatePrecedence(false, [], { a: 'a-a' })

  const b = calculatePrecedence(false, [], { a: 'a' })

  expect(a).toBeLessThan(b)
})

test('gradient (reference)', () => {
  const fromPurple400 = calculatePrecedence(false, [], {
    '--tw-gradient-from': '#c084fc',
    '--tw-gradient-stops': 'var(--tw-gradient-from),var(--tw-gradient-to,rgba(192,132,252,0))',
  })
  const viaPink500 = calculatePrecedence(false, [], {
    '--tw-gradient-stops':
      'var(--tw-gradient-from),#ec4899,var(--tw-gradient-to,rgba(236,72,153,0))',
  })
  const toRed500 = calculatePrecedence(false, [], { '--tw-gradient-to': '#ef4444' })
  const bgGradientToR = calculatePrecedence(false, [], {
    'background-image': 'linear-gradient(to right,var(--tw-gradient-stops))',
  })

  expect(fromPurple400).toBeLessThan(viaPink500)
  expect(viaPink500).toBeLessThan(toRed500)
  expect(toRed500).toBeLessThan(bgGradientToR)
})

test('border (reference)', () => {
  const border = calculatePrecedence(false, [], {
    border: '1px solid currentColor',
  })

  const borderXs = calculatePrecedence(false, [], {
    border: '.25rem solid currentColor',
  })

  const borderXsPrimary = calculatePrecedence(false, [], {
    border: '.25rem solid #0d3880',
  })

  const borderTop = calculatePrecedence(false, [], {
    'border-top': '.25rem solid currentColor',
  })

  const borderNeutral = calculatePrecedence(false, [], {
    'border-color': '#596581',
  })

  expect(border).toBe(borderXs)
  expect(borderXs).toBe(borderXsPrimary)
  expect(borderXsPrimary).toBeLessThan(borderTop)
  expect(borderTop).toBeLessThan(borderNeutral)
})

test('divide (reference)', () => {
  const divide = calculatePrecedence(false, [], {
    'border-top': '1px solid currentColor',
  })

  const divideXs = calculatePrecedence(false, [], {
    'border-top': '.25rem solid currentColor',
  })

  const divideXsPrimary = calculatePrecedence(false, [], {
    'border-top': '.25rem solid #0d3880',
  })

  const divideNeutral = calculatePrecedence(false, [], {
    'border-top-color': '#596581',
  })

  expect(divide).toBe(divideXs)
  expect(divideXs).toBe(divideXsPrimary)
  expect(divideXsPrimary).toBeLessThan(divideNeutral)
})

test('transition (reference)', () => {
  const transition = calculatePrecedence(false, [], {
    transition:
      'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform 150ms cubic-bezier(0.4,0,0.2,1)',
  })

  const transitionNone = calculatePrecedence(false, [], {
    'transition-property': 'none',
  })

  const duration = calculatePrecedence(false, [], {
    'transition-duration': '100ms',
  })

  const delay = calculatePrecedence(false, [], {
    'transition-delay': '250ms',
  })

  const transitionTimingFunction = calculatePrecedence(false, [], {
    'transition-timing-function': 'ease-linear',
  })

  expect(transition).toBeLessThan(transitionNone)
  expect(transitionNone).toBe(duration)
  expect(duration).toBe(delay)
  expect(delay).toBeLessThan(transitionTimingFunction)
})

test('transform (reference)', () => {
  const scale = calculatePrecedence(false, [], {
    '--transform-scale-x': '.75',
    '--transform-scale-y': '.75',
    transform: 'scale(.75)',
  })

  const scaleX = calculatePrecedence(false, [], {
    '--transform-scale-x': '.75',
    transform: 'scaleX(.75)',
  })

  const scaleY = calculatePrecedence(false, [], {
    '--transform-scale-y': '.75',
    transform: 'scaleY(.75)',
  })

  const transform = calculatePrecedence(false, [], {
    transform:
      'transform:translateX(var(--transform-translate-x,0)) translateY(var(--transform-translate-y,0)) rotate(var(--transform-rotate,0)) skewX(var(--transform-skew-x,0)) skewY(var(--transform-skew-y,0)) scaleX(var(--transform-scale-x,1)) scaleY(var(--transform-scale-y,1))',
  })

  expect(scale).toBeLessThan(scaleX)
  expect(scaleX).toBe(scaleY)
  expect(scaleY).toBeLessThan(transform)
})
