import type { OnInit, Instance, Injector } from '..'

import { createInstance, virtualInjector, noprefix } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, hash: false, prefix: noprefix })
})

test('call init before first insert', () => {
  const init: OnInit = jest.fn((insert) => {
    insert('html{margin:0}')
    insert('body{padding:0}')
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  instance.setup({ init })

  expect(init).not.toHaveBeenCalled()

  expect(instance.bw('text-center underline')).toBe('text-center underline')
  expect(instance.bw('hidden')).toBe('hidden')

  expect(init).toHaveBeenCalledTimes(1)

  expect(injector.target).toMatchObject([
    'html{margin:0}',
    'body{padding:0}',
    '.hidden{display:none}',
    '.text-center{text-align:center}',
    '.underline{text-decoration:underline}',
  ])
})

test('several init function can be used', () => {
  const init1: OnInit = jest.fn((insert) => {
    insert('html{margin:0}')
  })

  const init2: OnInit = jest.fn((insert) => {
    insert('body{padding:0}')
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  instance.setup([{ init: init1 }, { init: init2 }])

  expect(init1).not.toHaveBeenCalled()
  expect(init2).not.toHaveBeenCalled()

  expect(instance.bw('text-center underline')).toBe('text-center underline')
  expect(instance.bw('hidden')).toBe('hidden')

  expect(init1).toHaveBeenCalledTimes(1)
  expect(init2).toHaveBeenCalledTimes(1)

  expect(injector.target).toMatchObject([
    'html{margin:0}',
    'body{padding:0}',
    '.hidden{display:none}',
    '.text-center{text-align:center}',
    '.underline{text-decoration:underline}',
  ])
})
