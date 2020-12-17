import dlv from 'dlv'

import corePlugins from 'tailwindcss/lib/corePlugins.js'
import resolveConfig from 'tailwindcss/lib/util/resolveConfig.js'
import defaultConfig from 'tailwindcss/stubs/defaultConfig.stub.js'
import transformThemeValue from 'tailwindcss/lib/util/transformThemeValue.js'

const identity = (value) => value

export function processPlugins() {
  const config = resolveConfig([defaultConfig])

  const plugins = [...corePlugins(config), ...dlv(config, 'plugins', [])]

  const {
    theme: { screens },
    variantOrder: variants,
    darkMode,
    prefix,
    separator,
  } = config

  const applyConfiguredPrefix = identity

  const getConfigValue = (path, defaultValue) => (path ? dlv(config, path, defaultValue) : config)

  const utilities = {}

  plugins.forEach((plugin) => {
    if (plugin.__isOptionsFunction) {
      plugin = plugin()
    }

    const handler = typeof plugin === 'function' ? plugin : dlv(plugin, 'handler', () => {})

    handler({
      config: getConfigValue,

      theme: (path, defaultValue) => {
        const [pathRoot, ...subPaths] = path.split('.')

        const value = getConfigValue(['theme', pathRoot, ...subPaths], defaultValue)

        return transformThemeValue(pathRoot)(value)
      },

      corePlugins: (path) => {
        if (Array.isArray(config.corePlugins)) {
          return config.corePlugins.includes(path)
        }

        return getConfigValue(`corePlugins.${path}`, true)
      },

      variants: (path, defaultValue) => {
        if (Array.isArray(config.variants)) {
          return config.variants
        }

        return getConfigValue(`variants.${path}`, defaultValue)
      },

      // No escaping of class names as we use theme as directives
      e: identity,

      prefix: applyConfiguredPrefix,

      addUtilities: (newUtilities) => {
        // :const defaultOptions = { variants: [], respectPrefix: true, respectImportant: true }

        // options = Array.isArray(options)
        //   ? { ...defaultOptions, variants: options }
        //   : { ...defaultOptions, ...options }

        // .directive => CSS rule
        Object.assign(utilities, ...(Array.isArray(newUtilities) ? newUtilities : [newUtilities]))

        // :pluginUtilities.push(
        //   wrapWithLayer(wrapWithVariants(styles.nodes, options.variants), 'utilities'),
        // )
      },

      addComponents: (_components, _options) => {
        // :const defaultOptions = { variants: [], respectPrefix: true }
        // options = Array.isArray(options)
        //   ? { ...defaultOptions, variants: options }
        //   : { ...defaultOptions, ...options }
        // pluginComponents.push(
        //   wrapWithLayer(wrapWithVariants(styles.nodes, options.variants), 'components'),
        // )
      },

      addBase: (_baseStyles) => {
        // :pluginBaseStyles.push(wrapWithLayer(parseStyles(baseStyles), 'base'))
      },

      addVariant: (_name, _generator, _options) => {
        // :pluginVariantGenerators[name] = generateVariantFunction(generator, options)
      },
    })
  })

  const directives = {
    // Marker directive used with group-* variants
    group: {
      selector: '.group',
      properties: {},
    },
  }

  for (const selector of Object.keys(utilities)) {
    // '@keyframes spin'
    if (selector[0] === '@') {
      continue
    }

    // '.ordinal, .slashed-zero, .lining-nums, .oldstyle-nums'
    if (selector.includes(',')) {
      continue
    }

    // '.placeholder-black::placeholder'
    // '.divide-pink-50 > :not([hidden]) ~ :not([hidden])'
    const [_, directive] = /^\.([^\s:]+)/.exec(selector) || []

    if (directive) {
      // Unescape
      // '.w-4\\/5'
      // '.space-x-2\\.5'
      directives[directive.replace(/\\/g, '')] = {
        selector,
        properties: utilities[selector],
      }
    }
  }

  return {
    screens,
    variants: ['dark', ...variants],
    directives,
    darkMode,
    prefix,
    separator,
  }
}
