import type { Declarations, Plugin, PluginContext, Theme, ThemeValueResolver } from './types'

import * as is from './is'
import { corners, edges, expandEdges } from './helpers'
import { join, joinTruthy, merge, tail, capitalize, hyphenate } from './util'

// Shared variables
let _: undefined | string | Declarations | string[] | boolean
let __: undefined | string
let $: undefined | string

/* eslint-disable no-return-assign, no-cond-assign, @typescript-eslint/consistent-type-assertions */

const parseColorComponent = (chars: string, factor: number): number =>
  // eslint-disable-next-line unicorn/prefer-number-properties
  Math.round(parseInt(chars, 16) * factor)

const asRGBA = <T extends string | undefined>(
  color: T,
  opacityProperty: string,
  opacityDefault?: string,
): T | string => {
  if (color && color[0] === '#') {
    const length = (color.length - 1) / 3
    const factor = [17, 1, 0.062272][length - 1]

    /* eslint-disable unicorn/prefer-string-slice */
    return `rgba(${parseColorComponent(color.substr(1, length), factor)},${parseColorComponent(
      color.substr(1 + length, length),
      factor,
    )},${parseColorComponent(
      color.substr(1 + 2 * length, length),
      factor,
    )},var(--${opacityProperty}${opacityDefault ? ',' + opacityDefault : ''}))`
    /* eslint-enable unicorn/prefer-string-slice */
  }

  return color
}

const withOpacityFallback = (
  property: string,
  kind: string,
  color: string | undefined,
  tag: PluginContext['tag'],
): Declarations | undefined =>
  color
    ? {
        [`--${tag(kind + '-opacity')}`]: '1',
        [property]: (_ = asRGBA(color, tag(kind + '-opacity'))) && _ !== color ? [color, _] : color,
      }
    : undefined

const reversableEdge = (
  parts: string[],
  theme: ThemeValueResolver,
  section: 'divideWidth' | 'space',
  tag: PluginContext['tag'],
  prefix: string,
  suffix?: string,
): Declarations | undefined =>
  (_ = ({ x: ['right', 'left'], y: ['bottom', 'top'] } as Record<string, undefined | string[]>)[
    parts[1]
  ]) && ($ = `--${tag(`${parts[0]}-${parts[1]}-reverse`)}`)
    ? parts[2] === 'reverse'
      ? {
          [$]: '1',
        }
      : {
          [$]: '0',
          [joinTruthy([prefix, _[0], suffix])]:
            (__ = theme(section, tail(parts, 2))) && `calc(${__} * var(${$}))`,
          // IE 11 fallback
          [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`],
        }
    : undefined

const propertyValue = (property: string, separator?: string) => (
  parts: string[],
): Declarations => ({ [property]: join(tail(parts), separator) })

// .duration-75	transition-duration: 75ms;
// .duration-75	transition-duration: 75ms;
const themeProperty = (section: keyof Theme) => (parts: string[], theme: ThemeValueResolver) => ({
  [hyphenate(section)]: theme(section, tail(parts)) as string,
})

const propertyAndValue = (parts: string[]): Declarations => propertyValue(parts[0])(parts)

const display = (parts: string[]): Declarations => ({ display: join(parts) })
const position = (parts: string[]): Declarations => ({ position: parts[0] })
const textTransform = (parts: string[]): Declarations => ({ 'text-transform': parts[0] })
const textDecoration = (parts: string[]): Declarations => ({ 'text-decoration': join(parts) })
const inset: Plugin = (parts, theme) => ({ [parts[0]]: theme('inset', tail(parts)) })

const opacityProperty = (
  parts: string[],
  theme: ThemeValueResolver,
  tag: PluginContext['tag'],
  sectionPrefix = parts[0],
): Declarations => ({
  [`--${tag(parts[0] + '-opacity')}`]: theme(
    (sectionPrefix + 'Opacity') as 'textOpacity',
    tail(parts, 2),
  ),
})

const border = (
  parts: string[],
  theme: ThemeValueResolver,
  tag: PluginContext['tag'],
): Declarations | undefined => {
  switch (parts[1]) {
    case 'solid':
    case 'dashed':
    case 'dotted':
    case 'double':
    case 'none':
      return propertyValue('border-style')(parts)
    case 'collapse':
    case 'separate':
      return propertyValue('border-collapse')(parts)
    case 'opacity':
      return opacityProperty(parts, theme, tag)
  }

  return (_ = theme(
    `${parts[0]}Width` as 'borderWidth' | 'divideWidth',
    tail(parts),
    '' /* Optional */,
  ))
    ? { 'border-width': _ }
    : withOpacityFallback(
        'border-color',
        parts[0],
        theme(`${parts[0]}Color` as 'borderColor' | 'divideColor', tail(parts)),
        tag,
      )
}

// 'min-w-full' -> minWidth
// 'max-h-0.5' -> maxHeight
const minMax: Plugin = (parts, theme) =>
  (_ = ({ w: 'width', h: 'height' } as Record<string, undefined | string>)[parts[1]]) && {
    [`${parts[0]}-${_}`]: theme(
      `${parts[0]}${capitalize(_)}` as 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight',
      tail(parts, 2),
    ),
  }

const edgesPluginFor = (key: 'margin' | 'padding'): Plugin => (parts, theme) =>
  parts[0][1]
    ? edges(theme(key, tail(parts)), parts[0][1], key)
    : { [key]: theme(key, tail(parts)) }

// For p-*, px-*, pt-*
const padding = edgesPluginFor('padding')

// For m-*, mx-*, mt-*
const margin = edgesPluginFor('margin')

const gridPlugin = (kind: string): Plugin => (parts) => {
  switch (parts[1]) {
    case 'auto':
      return { [`grid-${kind}`]: 'auto' }
    case 'span':
      return (
        parts[2] && {
          [`grid-${kind}`]: parts[2] === 'full' ? '1 / -1' : `span ${parts[2]} / span ${parts[2]}`,
        }
      )
    case 'start':
    case 'end':
      return (
        parts.length === 3 && {
          [`grid-${kind}-${parts[1]}`]: parts[2],
        }
      )
  }
}

const placeHelper = (property: string, parts: string[]): Declarations => ({
  // 'auto'
  // 'start'
  // 'end'
  // 'center'
  // 'stretch'
  // 'between'
  // 'around'
  // 'evenly'
  // 'between', 'around', 'evenly' => space-$0
  // 4th char is unique
  // eslint-disable-next-line no-implicit-coercion
  [property]: (~'wun'.indexOf(parts[1][3]) ? 'space-' : '') + parts[1],
})

const contentPluginFor = (property: string) => (parts: string[]): Declarations => {
  switch (parts[1]) {
    case 'start':
    case 'end':
      return { [property]: `flex-${parts[1]}` }
  }

  return placeHelper(property, parts)
}

const transform = (tag: PluginContext['tag'], gpu?: boolean): string =>
  `${
    gpu
      ? `translate3d(var(--${tag('translate-x')},0),var(--${tag('translate-y')},0),0)`
      : `translateX(var(--${tag('translate-x')},0)) translateY(var(--${tag('translate-y')},0))`
  } rotate(var(--${tag('rotate')},0)) skewX(var(--${tag('skew-x')},0)) skewY(var(--${tag(
    'skew-y',
  )},0)) scaleX(var(--${tag('scale-x')},1)) scaleY(var(--${tag('scale-y')},1))`

// .scale-0	--scale-x: 0;
// .scale-x-150
// .scale-y-0
// .translate-x-0	--translate-x: 0;
// .translate-x-1	--translate-x: 0.25rem;
// .translate-y-px	--translate-y: 1px;
// .translate-y-full	--translate-y: 100%;
// .translate-y-1/2	--translate-y: 50%;
// .skew-y-0	--skew-y: 0;
// .skew-y-1	--skew-y: 1deg;
const transformFunction: Plugin = (parts, theme, { tag }) =>
  (_ = theme(parts[0] as 'scale' | 'skew' | 'translate', parts[2] || parts[1])) && {
    [`--${tag(parts[0] + '-x')}`]: parts[1] !== 'y' && _,
    [`--${tag(parts[0] + '-y')}`]: parts[1] !== 'x' && _,
    transform: [`${parts[0]}${parts[2] ? parts[1].toUpperCase() : ''}(${_})`, transform(tag)],
  }

const boxShadow = (tag: PluginContext['tag']): string =>
  `var(--${tag('ring-offset-shadow')},0 0 transparent),var(--${tag(
    'ring-shadow',
  )},0 0 transparent),var(--${tag('shadow')},0 0 transparent)`

// .from-purple-400
// .to-red-500
const gradientColorStop: Plugin = (parts, theme, { tag }) =>
  (_ = theme('gradientColorStops', tail(parts))) && {
    [`--${tag('gradient-' + parts[0])}`]: _,
  }

export const utilities: Record<string, Plugin> = {
  // .shadow	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  // .shadow-md	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  // .shadow-none	box-shadow: none;
  shadow: (parts, theme, { tag }) =>
    (_ = theme('boxShadow', tail(parts))) && {
      [`--${tag('shadow')}`]: _,
      // IE11 fallback first, then modern with ring-* support
      'box-shadow': [_, boxShadow(tag)],
    },

  // From theme.ringWidth
  // .ring
  // .ring-0
  // .ring-inset
  //
  // From theme.colors
  // .ring-current
  // .ring-transparent
  // .ring-gray-100
  //
  // From theme.opacity
  // .ring-opacity-50
  //
  // From theme.ringOffsetWidth
  // .ring-offset -> 2px
  // .ring-offset-8 -> 8px
  ring(parts, theme, { tag }) {
    switch (parts[1]) {
      case 'inset':
        return { [`--${tag('ring-inset')}`]: 'inset' }

      case 'opacity':
        return opacityProperty(parts, theme, tag)

      case 'offset':
        // Either width or color
        return (_ = theme('ringOffsetWidth', tail(parts, 2), '' /* Optional */))
          ? {
              [`--${tag('ring-offset-width')}`]: _,
            }
          : {
              [`--${tag('ring-offset-color')}`]: theme('ringOffsetColor', tail(parts, 2)),
            }
    }

    // Either width or color
    return (_ = theme('ringWidth', tail(parts), '' /* Optional */))
      ? {
          // A width
          [`--${tag('ring-offset-shadow')}`]: `var(--${tag(
            'ring-inset',
          )},/*!*/ /*!*/) 0 0 0 var(--${tag('ring-offset-width')},${theme(
            'ringOffsetWidth',
            '',
            '0px',
          )}) var(--${tag('ring-offset-color')},${theme('ringOffsetColor', '', '#fff')})`,

          [`--${tag('ring-shadow')}`]: `var(--${tag(
            'ring-inset',
          )},/*!*/ /*!*/) 0 0 0 calc(${_} + var(--${tag('ring-offset-width')},${theme(
            'ringOffsetWidth',
            '',
            '0px',
          )})) var(--${tag('ring-color')},${theme(
            'ringColor',
            '',
            asRGBA(
              theme('ringColor', '', '#93c5fd'),
              tag('ring-opacity'),
              theme('ringOpacity', '', '0.5'),
            ),
          )})`,

          'box-shadow': boxShadow(tag),
        }
      : {
          // A color
          [`--${tag('ring-opacity')}`]: '1',
          [`--${tag('ring-color')}`]: asRGBA(theme('ringColor', tail(parts)), tag('ring-opacity')),
        }
  },

  // .duration-75	transition-duration: 75ms;
  // .duration-75	transition-duration: 75ms;
  duration: themeProperty('transitionDuration'),

  // .delay-75	transition-delay: 75ms;
  // .delay-100	transition-delay: 100ms;
  delay: themeProperty('transitionDelay'),

  tracking: themeProperty('letterSpacing'),

  // .leading-10	line-height: 2.5rem;
  // .leading-none	line-height: 1;
  // .leading-tight	line-height: 1.25;
  leading: themeProperty('lineHeight'),

  // .z-50	z-index: 50;
  // .z-auto	z-index: auto;
  z: themeProperty('zIndex'),

  opacity: themeProperty('opacity'),

  ease: themeProperty('transitionTimingFunction'),

  // .w-64	width: 16rem;
  // .w-auto	width: auto;
  // .w-px	width: 1px;
  // .w-1/2	width: 50%;
  // .w-full	width: 100%;
  // .w-screen	width: 100vw;
  w: themeProperty('width'),

  h: themeProperty('height'),

  fill: themeProperty('fill'),

  order: themeProperty('order'),

  origin: propertyValue('transform-origin', ' '),

  select: propertyValue('user-select'),

  'pointer-events': propertyValue('pointer-events'),

  align: propertyValue('vertical-align'),

  whitespace: propertyValue('white-space'),

  transform: (parts, theme, { tag }) =>
    parts[1] === 'none'
      ? { transform: 'none' }
      : {
          [`--${tag('translate-x')}`]: '0',
          [`--${tag('translate-y')}`]: '0',
          [`--${tag('rotate')}`]: '0',
          [`--${tag('skew-x')}`]: '0',
          [`--${tag('skew-y')}`]: '0',
          [`--${tag('scale-x')}`]: '1',
          [`--${tag('scale-y')}`]: '1',
          transform: transform(tag, parts[1] === 'gpu'),
        },

  // .rotate-0	--transform-rotate: 0;
  // .rotate-1	--transform-rotate: 1deg;
  rotate: (parts, theme, { tag }) =>
    (_ = theme('rotate', tail(parts))) && {
      [`--${tag('rotate')}`]: _,
      transform: [`rotate(${_})`, transform(tag)],
    },

  scale: transformFunction,
  translate: transformFunction,
  skew: transformFunction,

  // .gap-0	gap: 0;
  // .gap-1	gap: 0.25rem;
  // .gap-px	gap: 1px;
  // .gap-x-0	column-gap: 0;
  // .gap-x-1	column-gap: 0.25rem;
  gap: (parts, theme) =>
    (_ = ({ x: 'column', y: 'row' } as Record<string, string | undefined>)[parts[1]])
      ? { [_ + '-gap']: theme('gap', tail(parts, 2)) }
      : themeProperty('gap')(parts, theme),

  // .stroke-current	stroke: currentColor;
  // stroke-0	stroke-width: 0;
  // .stroke-1	stroke-width: 1;
  stroke: (parts, theme) =>
    (_ = theme('stroke', tail(parts), '' /* Optional */))
      ? { stroke: _ }
      : themeProperty('strokeWidth')(parts, theme),

  // .outline-none	outline: 2px solid transparent; outline-offset: 2px;
  // .outline-white	outline: 2px dotted white; outline-offset: 2px;
  outline: (parts, theme) =>
    (_ = theme('outline', tail(parts))) && {
      outline: _[0],
      'outline-offset': _[1],
    },

  break(parts) {
    switch (parts[1]) {
      case 'normal':
        return {
          'word-break': 'normal',
          'overflow-wrap': 'normal',
        }
      case 'words':
        return { 'overflow-wrap': 'break-word' }
      case 'all':
        return { 'word-break': 'break-all' }
    }
  },

  underline: textDecoration,
  'no-underline': textDecoration(['none']),
  'line-through': textDecoration,

  'text-underline': textDecoration(['underline']),
  'text-no-underline': textDecoration(['none']),
  'text-line-through': textDecoration(['line', 'through']),

  uppercase: textTransform,
  lowercase: textTransform,
  capitalize: textTransform,

  'normal-case': textTransform(['none']),
  'text-normal-case': textTransform(['none']),

  text(parts, theme, { tag }) {
    switch (parts[1]) {
      case 'left':
      case 'center':
      case 'right':
      case 'justify':
        return propertyValue('text-align')(parts)
      case 'uppercase':
      case 'lowercase':
      case 'capitalize':
        return textTransform(tail(parts))
      case 'opacity':
        return opacityProperty(parts, theme, tag)
    }

    const fontSize = theme('fontSize', tail(parts), '' /* Optional */)

    if (fontSize) {
      return is.string(fontSize)
        ? { 'font-size': fontSize }
        : {
            'font-size': fontSize[0],
            'line-height': is.string(fontSize[1]) ? fontSize[1] : fontSize[1].lineHeight,
            'letter-spacing': (fontSize[1] as { letterSpacing?: string }).letterSpacing,
          }
    }

    return withOpacityFallback('color', 'text', theme('textColor', tail(parts)), tag)
  },

  // eslint-disable-next-line complexity
  bg(parts, theme, { tag }) {
    switch (parts[1]) {
      case 'fixed':
      case 'local':
      case 'scroll':
        return propertyValue('background-attachment', ',')(parts)

      case 'bottom':
      case 'center':
      case 'left':
      case 'right':
      case 'top':
        return propertyValue('background-position', ' ')(parts)

      case 'no':
        return parts[2] === 'repeat' && propertyValue('background-repeat')(parts)

      case 'auto':
      case 'cover':
      case 'contain':
        return propertyValue('background-size')(parts)

      case 'repeat':
        switch (parts[2]) {
          case 'x':
          case 'y':
            return propertyValue('background-repeat')(parts)
        }

        return { 'background-repeat': parts[2] || parts[1] }

      case 'opacity':
        return opacityProperty(parts, theme, tag, 'background')

      case 'clip':
        return { 'background-clip': parts[2] + (parts[2] === 'text' ? '' : '-box') }

      // .bg-gradient-to-r => linear-gradient(to right, ...)
      // .bg-gradient-to-r => linear-gradient(to right, ...)
      case 'gradient':
        if (parts[2] === 'to' && (_ = expandEdges(parts[3]))) {
          return {
            'background-image': `linear-gradient(to ${join(_, ' ')},var(--${tag(
              'gradient-stops',
            )},var(--${tag('gradient-from')},transparent),var(--${tag(
              'gradient-to',
            )},transparent)))`,
          }
        }
    }

    return (_ = theme('backgroundImage', tail(parts), '' /* Optional */))
      ? { 'background-image': _ }
      : merge(
          withOpacityFallback('background-color', 'bg', theme('backgroundColor', tail(parts)), tag),
          // Look for a corresponding text color:
          // 'primary' -> 'on-primary'
          // 'on-primary' -> 'primary'
          withOpacityFallback(
            'color',
            'text',
            theme(
              'textColor',
              parts[1] === 'on' ? tail(parts, 2) : ['on'].concat(tail(parts)),
              '' /* Optional */,
            ),
            tag,
          ),
        )
  },

  // .from-purple-400
  from: gradientColorStop,

  // .to-red-500
  to: gradientColorStop,

  // .via-pink-500
  via: (parts, theme, { tag }) =>
    (_ = theme('gradientColorStops', tail(parts))) && {
      [`--${tag('gradient-stops')}`]: `var(--${tag('gradient-from')},transparent),${_},var(--${tag(
        'gradient-to',
      )},transparent)`,
    },

  // .rounded	border-radius: 0.25rem;
  // .rounded-5	border-radius: 5px;
  // .rounded-md	border-radius: 0.375rem;
  // .rounded-lg	border-radius: 0.5rem;
  // .rounded-xl	border-radius: 0.75rem;
  // .rounded-2xl	border-radius: 1rem;
  // .rounded-3xl	border-radius: 1.5rem;
  // .rounded-full	border-radius: 9999px;
  // .rounded-t-none	border-top-left-radius: 0px; border-top-right-radius: 0px;
  // .rounded-t-4	border-radius: 4px;
  rounded: (parts, theme) =>
    corners(
      theme('borderRadius', tail(parts, 2), '' /* Optional */),
      parts[1],
      'border',
      'radius',
    ) || themeProperty('borderRadius')(parts, theme),

  'transition-none': { 'transition-property': 'none' },

  transition: (parts, theme) => ({
    transition: joinTruthy(
      [
        theme('transitionProperty', tail(parts)),
        theme('transitionDuration', ''),
        theme('transitionTimingFunction', ''),
      ],
      ' ',
    ),
  }),

  flex(parts, theme) {
    switch (parts[1]) {
      case 'row':
      case 'col':
        return {
          'flex-direction': join(
            parts[1] === 'col' ? ['column'].concat(tail(parts, 2)) : tail(parts, 1),
          ),
        }
      case 'nowrap':
      case 'wrap':
        return propertyValue('flex-wrap')(parts)
      case 'grow':
      case 'shrink':
        return { [`flex-${parts[1]}`]: parts[2] || '1' }
    }

    return (_ = theme('flex', tail(parts), '' /* Optional */)) ? { flex: _ } : display(parts)
  },

  grid(parts) {
    switch (parts[1]) {
      case 'cols':
      case 'rows':
        return (
          parts.length > 2 && {
            [`grid-template-${parts[1] === 'cols' ? 'columns' : parts[1]}`]:
              parts.length === 3 && Number(parts[2])
                ? `repeat(${parts[2]},minmax(0,1fr))`
                : join(tail(parts, 2), ' '),
          }
        )

      case 'flow':
        return (
          parts.length > 2 && {
            'grid-auto-flow': join(
              parts[2] === 'col' ? ['column'].concat(tail(parts, 3)) : tail(parts, 2),
              ' ',
            ),
          }
        )
    }

    return display(parts)
  },

  auto(parts) {
    switch (parts[1]) {
      case 'cols':
      case 'rows':
        return (
          (_ =
            parts.length === 3
              ? ({
                  auto: 'auto',
                  min: 'min-content',
                  max: 'max-content',
                  fr: 'minmax(0,1fr)',
                } as Record<string, undefined | string>)[parts[2]] || `minmax(0,${parts[2]})`
              : parts.length > 3 && `minmax(${join(tail(parts, 2), ',')})`) && {
            [`grid-auto-${parts[1] === 'cols' ? 'columns' : 'rows'}`]: _,
          }
        )
    }
  },

  'not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    'white-space': 'normal',
  },

  hidden: display(['none']),

  inline: display,
  block: display,
  contents: display,

  table(parts) {
    switch (parts[1]) {
      case 'auto':
      case 'fixed':
        return propertyValue('table-layout')(parts)
    }

    return display(parts)
  },

  flow: display,

  d: (parts) => display(tail(parts)),

  static: position,
  fixed: position,
  absolute: position,
  relative: position,
  sticky: position,

  visible: { visibility: 'visible' },
  invisible: { visibility: 'hidden' },

  antialiased: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'subpixel-antialiased': {
    '-webkit-font-smoothing': 'auto',
    '-moz-osx-font-smoothing': 'auto',
  },

  truncate: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },

  resize: (parts) =>
    parts.length <= 2 && {
      resize:
        ({ x: 'vertical', y: 'horizontal' } as Record<string, string | undefined>)[parts[1]] ||
        parts[1] ||
        'both',
    },

  // TODO remove once IE11 support is dropped: https://www.digitalocean.com/community/tutorials/css-no-more-clearfix-flow-root
  clearfix: [
    '::after',
    {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  ],

  object(parts) {
    switch (parts[1]) {
      case 'contain':
      case 'cover':
      case 'fill':
      case 'none':
      case 'scale':
        return propertyValue('object-fit')(parts)
    }

    return propertyValue('object-position', ' ')(parts)
  },

  // TODO: move into helper
  top: inset,
  right: inset,
  bottom: inset,
  left: inset,

  // 'inset-0'
  // 'inset-1.5'
  // 'inset-x-1.5'
  inset: (parts, theme) =>
    (_ = expandEdges(parts[1]))
      ? edges(theme('inset', tail(parts, 2)), parts[1])
      : (_ = theme('inset', tail(parts))) && {
          top: _,
          right: _,
          bottom: _,
          left: _,
        },

  items(parts) {
    switch (parts[1]) {
      case 'start':
      case 'end':
        return { 'align-items': `flex-${parts[1]}` }
    }

    return propertyValue('align-items')(parts)
  },

  content: contentPluginFor('align-content'),
  justify: contentPluginFor('justify-content'),
  self: contentPluginFor('align-self'),

  place: (parts) => placeHelper('place-' + parts[1], tail(parts)),

  col: gridPlugin('column'),
  row: gridPlugin('row'),

  list(parts) {
    switch (parts[1]) {
      case 'inside':
      case 'outside':
        return propertyValue('list-style-position')(parts)
    }

    return propertyValue('list-style-type')(parts)
  },

  'sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    'white-space': 'nowrap',
    'border-width': '0',
  },

  box: (parts) => ({ 'box-sizing': `${parts[1]}-box` }),

  // .appearance-none -> appearance: none;
  // .appearance-auto -> appearance: auto;
  // .appearance-menulist-button; -> appearance: menulist-button;
  // .appearance-textfield -> appearance: textfield;
  appearance: propertyAndValue,
  cursor: propertyAndValue,

  float: propertyAndValue,
  clear: propertyAndValue,

  // 'overflow-visible'
  // 'overflow-x-hidden'
  overflow(parts) {
    switch (parts[1]) {
      case 'ellipsis':
      case 'clip':
        return propertyValue('text-overflow')(parts)
    }

    return parts[2] ? { [`overflow-${parts[1]}`]: parts[2] } : propertyAndValue(parts)
  },

  p: padding,
  py: padding,
  px: padding,
  pt: padding,
  pr: padding,
  pb: padding,
  pl: padding,

  m: margin,
  my: margin,
  mx: margin,
  mt: margin,
  mr: margin,
  mb: margin,
  ml: margin,

  italic: { 'font-style': 'italic' },
  'not-italic': { 'font-style': 'normal' },

  'font-italic': { 'font-style': 'italic' },
  'font-not-italic': { 'font-style': 'normal' },

  font: (parts, theme) =>
    (_ = theme('fontFamily', tail(parts), '' /* Optional */))
      ? { 'font-family': _ }
      : themeProperty('fontWeight')(parts, theme),

  space: (parts, theme, { tag }) =>
    (_ = reversableEdge(parts, theme, 'space', tag, 'margin')) && [
      '>:not([hidden])~:not([hidden])',
      _,
    ],

  // .border	border-width: 1px;
  // .border-0	border-width: 0;
  // .border-2	border-width: 2px;
  // .border	border-width: 1px;
  // .border-t	border-top-width: 1px;
  // .border-t-0	border-top-width: 0px;
  // .border-t-xs
  border: (parts, theme, { tag }) =>
    expandEdges(parts[1])
      ? edges(theme('borderWidth', tail(parts, 2)), parts[1], 'border', 'width')
      : border(parts, theme, tag),

  // .divide-x
  // .divide-x-8
  divide: (parts, theme, { tag }) =>
    (_ =
      reversableEdge(parts, theme, 'divideWidth', tag, 'border', 'width') ||
      border(parts, theme, tag)) && ['>:not([hidden])~:not([hidden])', _],

  placeholder: (parts, theme, { tag }) =>
    (_ =
      parts[1] === 'opacity'
        ? opacityProperty(parts, theme, tag)
        : withOpacityFallback(
            'color',
            'placeholder',
            theme('placeholderColor', tail(parts)),
            tag,
          )) && ['::placeholder', _],

  min: minMax,
  max: minMax,

  animate: (parts, theme, { keyframes }) => {
    const animation = theme('animation', (_ = tail(parts)))

    return (
      animation && {
        animation: is.string(animation)
          ? animation
          : `${keyframes(animation[1] || join(_))} ${animation[0]}`,
      }
    )
  },

  overscroll: (parts) => ({
    ['overscroll-behavior' + (parts[2] ? '-' + parts[1] : '')]: parts[2] || parts[1],
  }),
}

/* eslint-enable no-return-assign, no-cond-assign, @typescript-eslint/consistent-type-assertions */
