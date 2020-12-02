/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-svelte'],
  install: [
    /* ... */
  ],
  installOptions: {
    packageLookupFields: ['esnext'],
    installTypes: true,
    rollup: {
      context: 'self',
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '/',
  },
  proxy: {
    /* ... */
  },
  alias: {
    beamwind: 'beamwind/dist/esnext/beamwind.js',
    '@beamwind/colors': '@beamwind/colors/dist/esnext/colors.js',
    '@beamwind/core': '@beamwind/core/dist/esnext/core.js',
    '@beamwind/play': '@beamwind/play/dist/esnext/play.js',
    '@beamwind/preflight': '@beamwind/preflight/dist/esnext/preflight.js',
    '@beamwind/preset-play': '@beamwind/preset-play/dist/esnext/preset-play.js',
    '@beamwind/preset-system': '@beamwind/preset-system/dist/esnext/preset-system.js',
    '@beamwind/preset-tailwind': '@beamwind/preset-tailwind/dist/esnext/preset-tailwind.js',
    '@beamwind/reset': '@beamwind/reset/dist/esnext/reset.js',
    '@beamwind/system': '@beamwind/system/dist/esnext/system.js',
    '@beamwind/types': '@beamwind/types/dist/esnext/types.js',
  },
}
