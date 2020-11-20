import benchmark from 'benchmark'

import { themed } from 'oceanwind/index.min.js'
import { cx, setup, fail, createInstance } from 'beamwind/dist/node/esm/beamwind.js'

const ow = themed({ strict: true })
setup({ warn: fail })

const { Suite } = benchmark

benchInitial()

bench('Strings', (impl) => impl('bg-gray-500 rounded'))
// TODO bench('Tag Template Literal', (impl) => impl`bg-gray-500 ${false && 'rounded'}`)
bench('Arrays', (impl) => impl(['bg-gray-500', false && 'rounded']))
bench('Objects', (impl) => impl({ 'bg-gray-500': true, rounded: true }))
bench(
  'Grouping',
  (impl) => impl`
    sm:hover:(
      bg-black
      text-white
    )
    md:(bg-white hover:text-black)
  `,
)

function bench(name, run) {
  console.log(`\n# ${name}`)

  new Suite()
    .add('oceanwind', () => run(ow))
    .add('beamwind', () => run(cx))
    .on('cycle', (event) => console.log(`  ${event.target}`))
    .run()
}

function benchInitial() {
  console.log(`\n# Setup and first insert`)
  const tokens = 'bg-white text-black rounded underline uppercase'

  new Suite()
    .add('oceanwind', () => {
      const ow = themed({ strict: true })
      return ow(tokens)
    })
    .add('beamwind', () => {
      const { cx } = createInstance({ warn: fail })
      return cx(tokens)
    })
    .on('cycle', (event) => console.log(`  ${event.target}`))
    .run()
}
