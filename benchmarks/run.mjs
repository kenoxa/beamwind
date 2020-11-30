import benchmark from 'benchmark'

import { themed } from 'oceanwind/index.min.js'

// Build beamwind.mjs
// esbuild --platform=node --target=node10.4 --format=esm --outfile=benchmarks/beamwind.mjs --bundle packages/beamwind/src/index.ts
// esbuild --platform=node --target=node10.4 --format=esm --outfile=benchmarks/beamwind.min.mjs --minify --bundle packages/beamwind/src/index.ts
import { bw, setup, strict, createInstance } from './beamwind.mjs'

const ow = themed({ strict: true })
setup({ mode: strict })

const { Suite } = benchmark

benchInitial()

bench('Strings', (impl) => [
  impl('min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'),
  impl('absolute inset-0 shadow-lg'),
  impl('py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'),
])
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
    .add('beamwind', () => run(bw))
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
      const { bw } = createInstance({ mode: strict })
      return bw(tokens)
    })
    .on('cycle', (event) => console.log(`  ${event.target}`))
    .run()
}
