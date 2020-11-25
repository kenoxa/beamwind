/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv'],
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
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    beamwind: 'beamwind/dist/esnext/beamwind.js',
  },
}
