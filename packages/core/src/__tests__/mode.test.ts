import { createInstance, virtualInjector, bw, mode, strict } from '..'

test('mode warn (default)', () => {
  const consoleWarn = console.warn

  try {
    console.warn = jest.fn()

    expect(bw('unknown-directive')).toBe('')
    expect(console.warn).toHaveBeenCalledWith(
      `[unknown-directive] No plugin for "unknown-directive" found`,
    )
  } finally {
    console.warn = consoleWarn
  }
})

test('mode strict', () => {
  const instance = createInstance({
    injector: virtualInjector(),
    hash: false,
    mode: strict,
  })

  expect(() => instance.bw('unknown-directive')).toThrow(
    `[unknown-directive] No plugin for "unknown-directive" found`,
  )
})

test('ignore vendor specific pseudo classes errors', () => {
  const injector = virtualInjector()
  const warn = jest.fn()

  injector.insert = jest.fn((rule) => {
    if (rule.includes(':-moz')) {
      throw new Error(
        `Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule '${rule}'.`,
      )
    }
  })

  const instance = createInstance({
    injector,
    hash: false,
    mode: mode(warn),
    init(insert) {
      insert('::-moz-focus-inner{border-style:none;padding:0}')
      insert(':-moz-focusring{outline:1px dotted ButtonText}')
    },
  })

  expect(instance.bw('underline text-center')).toBe('underline text-center')

  expect(injector.insert).toHaveBeenCalledTimes(4)
  expect(injector.insert).toHaveBeenNthCalledWith(
    1,
    '::-moz-focus-inner{border-style:none;padding:0}',
    0,
  )
  expect(injector.insert).toHaveBeenNthCalledWith(
    2,
    ':-moz-focusring{outline:1px dotted ButtonText}',
    0,
  )
  expect(injector.insert).toHaveBeenNthCalledWith(3, '.underline{text-decoration:underline}', 0)
  expect(injector.insert).toHaveBeenNthCalledWith(4, '.text-center{text-align:center}', 1)

  expect(warn).toHaveBeenCalledTimes(0)
})

test('propagate other errors to warn', () => {
  const injector = virtualInjector()
  const warn = jest.fn()

  injector.insert = jest.fn((rule) => {
    if (rule.includes('-web')) {
      throw new Error(
        `Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule '${rule}'.`,
      )
    }
  })

  const instance = createInstance({
    injector,
    hash: false,
    mode: mode(warn),
    init(insert) {
      insert('.invalid-web{}')
    },
  })

  expect(instance.bw('underline')).toBe('underline')

  expect(injector.insert).toHaveBeenCalledTimes(2)
  expect(injector.insert).toHaveBeenNthCalledWith(1, '.invalid-web{}', 0)
  expect(injector.insert).toHaveBeenNthCalledWith(2, '.underline{text-decoration:underline}', 0)

  expect(warn).toHaveBeenCalledTimes(1)
  expect(warn).toHaveBeenNthCalledWith(
    1,
    `Failed to execute 'insertRule' on 'CSSStyleSheet': Failed to parse the rule '.invalid-web{}'.`,
  )
})
