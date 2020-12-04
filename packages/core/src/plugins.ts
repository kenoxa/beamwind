import type { Declarations, Plugin, PluginContext, ThemeValueResolver } from './types'

import * as is from './is'
import { corners, edges, expandEdges } from './helpers'
import { join, joinTruthy, merge, tail } from './util'

// Shared variables
let _: undefined | string | Declarations | string[] | boolean
let __: undefined | string
let $: undefined | string

/* eslint-disable no-return-assign, no-cond-assign, @typescript-eslint/consistent-type-assertions */

const capitalize = (value: string): string => value[0].toUpperCase() + tail(value)

const parseColorComponent = (chars: string, factor: number): number =>
  // eslint-disable-next-line unicorn/prefer-number-properties
  Math.round(parseInt(chars, 16) * factor)

const asRGBA = (color: string | undefined, opacityProperty: string): string | undefined => {
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
    )},var(--${opacityProperty}))`
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

const propertyAndValue = (parts: string[]): Declarations => ({ [parts[0]]: join(tail(parts)) })
const display = (parts: string[]): Declarations => ({ display: join(parts) })
const position = (parts: string[]): Declarations => ({ position: parts[0] })
const textTransform = (parts: string[]): Declarations => ({ 'text-transform': parts[0] })
const textDecoration = (parts: string[]): Declarations => ({ 'text-decoration': join(parts) })
const inset: Plugin = (parts, theme) => ({ [parts[0]]: theme('inset', tail(parts)) })

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
      return { 'border-style': parts[1] }
    case 'collapse':
    case 'separate':
      return { 'border-collapse': parts[1] }
    case 'opacity':
      return { [`--${tag(parts[0] + '-opacity')}`]: theme('borderOpacity', tail(parts, 2)) }
  }

  return (_ = theme(
    `${parts[0]}Width` as 'borderWidth' | 'divideWidth',
    tail(parts),
    true /* Optional */,
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

const contentPluginFor = (property: string): Plugin => (parts) => {
  switch (parts[1]) {
    case 'start':
    case 'end':
      return { [property]: `flex-${parts[1]}` }
    case 'between':
    case 'around':
      return { [property]: `space-${parts[1]}` }
  }

  return { [property]: parts[1] }
}

export const utilities: Record<string, Plugin> = {
  // .shadow	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  // .shadow-md	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  // .shadow-none	box-shadow: none;
  shadow: (parts, theme, { tag }) =>
    (_ = theme('boxShadow', tail(parts))) && {
      [`--${tag('shadow')}`]: _,
      // IE11 fallback first, then modern with rin-* support
      'box-shadow': [
        _,
        `var(--${tag('ring-offset-shadow')},0 0 transparent),var(--${tag(
          'ring-shadow',
        )},0 0 transparent),var(--${tag('shadow')})`,
      ],
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
        return { [`--${tag('ring-opacity')}`]: theme('ringOpacity', tail(parts, 2)) }

      case 'offset':
        // Either width or color
        return (_ = theme('ringOffsetWidth', tail(parts, 2), true /* Optional */))
          ? {
              [`--${tag('ring-offset-width')}`]: _,
            }
          : {
              [`--${tag('ring-offset-color')}`]: theme('ringOffsetColor', tail(parts, 2)),
            }
    }

    // Either width or color
    return (_ = theme('ringWidth', tail(parts), true /* Optional */))
      ? {
          // A width
          [`--${tag('ring-offset-shadow')}`]: `var(--${tag(
            'ring-inset',
          )},/*!*/ /*!*/) 0 0 0 var(--${tag('ring-offset-width')},0px) var(--${tag(
            'ring-offset-color',
          )},#fff)`,
          [`--${tag('ring-shadow')}`]: `var(--${tag(
            'ring-inset',
          )},/*!*/ /*!*/) 0 0 0 calc(${_} + var(--${tag('ring-offset-width')},0px)) var(--${tag(
            'ring-color',
          )},rgba(59,130,246,0.5))`,
          'box-shadow': `var(--${tag('ring-offset-shadow')}),var(--${tag(
            'ring-shadow',
          )}),var(--${tag('shadow')},0 0 transparent)`,
        }
      : {
          // A color
          [`--${tag('ring-opacity')}`]: '1',
          [`--${tag('ring-color')}`]: asRGBA(theme('ringColor', tail(parts)), tag('ring-opacity')),
        }
  },

  // .duration-75	transition-duration: 75ms;
  // .duration-75	transition-duration: 75ms;
  duration: (parts, theme) => ({
    'transition-duration': theme('transitionDuration', tail(parts)),
  }),

  // .delay-75	transition-delay: 75ms;
  // .delay-100	transition-delay: 100ms;
  delay: (parts, theme) => ({ 'transition-delay': theme('transitionDelay', tail(parts)) }),

  origin: (parts) => ({ 'transform-origin': join(tail(parts), ' ') }),

  cursor: propertyAndValue,

  select: (parts) => ({ 'user-select': parts[1] }),

  transform: (parts, theme, { tag }) => ({
    transform: `translateX(var(--${tag('transform-translate-x')},0)) translateY(var(--${tag(
      'transform-translate-y',
    )},0)) rotate(var(--${tag('transform-rotate')},0)) skewX(var(--${tag(
      'transform-skew-x',
    )},0)) skewY(var(--${tag('transform-skew-y')},0)) scaleX(var(--${tag(
      'transform-scale-x',
    )},1)) scaleY(var(--${tag('transform-scale-y')},1))`,
  }),

  // .rotate-0	--transform-rotate: 0;
  // .rotate-1	--transform-rotate: 1deg;
  rotate: (parts, theme, { tag }) =>
    (_ = theme('rotate', tail(parts))) && {
      [`--${tag('transform-rotate')}`]: _,
      transform: `rotate(${_})`,
    },

  // .scale-0	--transform-scale-x: 0;
  // .scale-x-150
  // .scale-y-0
  scale: (parts, theme, { tag }) =>
    (_ = theme('scale', [parts[2] || parts[1]])) && {
      [`--${tag('transform-scale-x')}`]: parts[1] !== 'y' && _,
      [`--${tag('transform-scale-y')}`]: parts[1] !== 'x' && _,
      transform: `scale${parts[2] ? parts[1].toUpperCase() : ''}(${_})`,
    },

  // .translate-x-0	--transform-translate-x: 0;
  // .translate-x-1	--transform-translate-x: 0.25rem;
  // .translate-y-px	--transform-translate-y: 1px;
  // .translate-y-full	--transform-translate-y: 100%;
  // .translate-y-1/2	--transform-translate-y: 50%;
  translate: (parts, theme, { tag }) =>
    (_ = theme('translate', tail(parts, 2))) && {
      [`--${tag('transform-translate-x')}`]: parts[1] !== 'y' && _,
      [`--${tag('transform-translate-y')}`]: parts[1] !== 'x' && _,
      transform: `translate${parts[1].toUpperCase()}(${_})`,
    },

  // .skew-y-0	--transform-skew-y: 0;
  // .skew-y-1	--transform-skew-y: 1deg;
  skew: (parts, theme, { tag }) =>
    (_ = theme('skew', tail(parts, 2))) && {
      [`--${tag('transform-skew-x')}`]: parts[1] !== 'y' && _,
      [`--${tag('transform-skew-y')}`]: parts[1] !== 'x' && _,
      transform: `skew${parts[1].toUpperCase()}(${_})`,
    },

  // .bg-gradient => linear-gradient(180deg, ...)
  // .bg-gradient-45 => linear-gradient(45deg, ...)
  // .bg-gradient-to-r => linear-gradient(to right, ...)
  // .bg-gradient-to-r => linear-gradient(to right, ...)
  // TODO: bg-gradient theme keys and values
  'bg-gradient': (parts, theme, { tag }) =>
    (_ =
      parts[1] === 'to' && (_ = expandEdges(parts[2]))
        ? 'to ' + join(_, ' ')
        : theme('rotate', tail(parts))) && {
      'background-image': `linear-gradient(${_},var(--${tag('gradient-stops')},var(--${tag(
        'gradient-from',
      )},transparent),var(--${tag('gradient-to')},transparent)))`,
    },

  // .from-purple-400
  from: (parts, theme, { tag }) =>
    (_ = theme('gradientColorStops', tail(parts))) && {
      [`--${tag('gradient-from')}`]: _,
    },

  // .via-pink-500
  via: (parts, theme, { tag }) =>
    (_ = theme('gradientColorStops', tail(parts))) && {
      [`--${tag('gradient-stops')}`]: `var(--${tag('gradient-from')},transparent),${_},var(--${tag(
        'gradient-to',
      )},transparent)`,
    },

  // .to-red-500
  to: (parts, theme, { tag }) =>
    (_ = theme('gradientColorStops', tail(parts))) && {
      [`--${tag('gradient-to')}`]: _,
    },

  'pointer-events-none': { 'pointer-events': 'none' },
  'pointer-events-auto': { 'pointer-events': 'auto' },

  tracking: (parts, theme) => ({ 'letter-spacing': theme('letterSpacing', tail(parts)) }),

  // .leading-10	line-height: 2.5rem;
  // .leading-none	line-height: 1;
  // .leading-tight	line-height: 1.25;
  leading: (parts, theme) => ({ 'line-height': theme('lineHeight', tail(parts)) }),

  align: (parts) => ({ 'vertical-align': join(tail(parts)) }),

  whitespace: (parts) => ({ 'white-space': join(tail(parts)) }),

  // .z-50	z-index: 50;
  // .z-auto	z-index: auto;
  z: (parts, theme) => ({ 'z-index': theme('zIndex', tail(parts)) }),

  // .gap-0	gap: 0;
  // .gap-1	gap: 0.25rem;
  // .gap-px	gap: 1px;
  // .gap-x-0	column-gap: 0;
  // .gap-x-1	column-gap: 0.25rem;
  gap: (parts, theme) => ({ gap: theme('gap', tail(parts)) }),

  // .stroke-current	stroke: currentColor;
  // stroke-0	stroke-width: 0;
  // .stroke-1	stroke-width: 1;
  stroke: (parts, theme) =>
    (_ = theme('stroke', tail(parts), true /* Optional */))
      ? { stroke: _ }
      : { 'stroke-width': theme('strokeWidth', tail(parts)) },

  fill: (parts, theme) => ({ fill: theme('fill', tail(parts)) }),

  // .outline-none	outline: 2px solid transparent; outline-offset: 2px;
  // .outline-white	outline: 2px dotted white; outline-offset: 2px;
  outline: (parts, theme) =>
    (_ = theme('outline', tail(parts))) && {
      outline: _[0],
      'outline-offset': _[1],
    },

  // .appearance-none -> appearance: none;
  // .appearance-auto -> appearance: auto;
  // .appearance-menulist-button; -> appearance: menulist-button;
  // .appearance-textfield -> appearance: textfield;
  appearance: propertyAndValue,

  opacity: (parts, theme) => ({ opacity: theme('opacity', tail(parts)) }),

  ease: (parts, theme) => ({
    'transition-timing-function': theme('transitionTimingFunction', tail(parts)),
  }),

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

  // .w-64	width: 16rem;
  // .w-auto	width: auto;
  // .w-px	width: 1px;
  // .w-1/2	width: 50%;
  // .w-full	width: 100%;
  // .w-screen	width: 100vw;
  w: (parts, theme) => ({ width: theme('width', tail(parts)) }),

  h: (parts, theme) => ({ height: theme('height', tail(parts)) }),

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
        return { 'text-align': parts[1] }
      case 'uppercase':
      case 'lowercase':
      case 'capitalize':
        return textTransform(tail(parts))
      case 'opacity':
        return { [`--${tag('text-opacity')}`]: theme('textOpacity', tail(parts, 2)) }
    }

    const fontSize = theme('fontSize', tail(parts), true /* Optional */)

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
        return { 'background-attachment': join(tail(parts), ',') }

      case 'bottom':
      case 'center':
      case 'left':
      case 'right':
      case 'top':
        return { 'background-position': join(tail(parts), ' ') }

      case 'no':
        return parts[2] === 'repeat' && { 'background-repeat': join(tail(parts)) }

      case 'auto':
      case 'cover':
      case 'contain':
        return { 'background-size': parts[1] }

      case 'repeat':
        switch (parts[2]) {
          case 'x':
          case 'y':
            return { 'background-repeat': join(tail(parts)) }
        }

        return { 'background-repeat': parts[2] || parts[1] }

      case 'opacity':
        return { [`--${tag('bg-opacity')}`]: theme('backgroundOpacity', tail(parts, 2)) }

      case 'clip':
        return { 'background-clip': parts[2] + (parts[2] === 'text' ? '' : '-box') }
    }

    return (_ = theme('backgroundImage', tail(parts), true /* Optional */))
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
              true /* Optional */,
            ),
            tag,
          ),
        )
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
      theme('borderRadius', tail(parts, 2), true /* Optional */),
      parts[1],
      'border',
      'radius',
    ) || {
      'border-radius': theme('borderRadius', tail(parts)),
    },

  'transition-none': { 'transition-property': 'none' },

  transition: (parts, theme) => ({
    transition: joinTruthy(
      [
        theme('transitionProperty', tail(parts)),
        theme('transitionDuration', []),
        theme('transitionTimingFunction', []),
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
        return { 'flex-wrap': join(tail(parts)) }
      case 'grow':
      case 'shrink':
        return { [`flex-${parts[1]}`]: parts[2] || '1' }
    }

    if ((_ = theme('flex', tail(parts), true /* Optional */))) {
      return { flex: _ }
    }

    return display(parts)
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
        return { 'table-layout': parts[1] }
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
        return { 'object-fit': parts[1] }
      case 'scale':
        return { 'object-fit': join(tail(parts)) }
    }

    return { 'object-position': join(tail(parts), ' ') }
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

    return { 'align-items': parts[1] }
  },

  content: contentPluginFor('align-content'),
  justify: contentPluginFor('justify-content'),
  self: contentPluginFor('align-self'),

  order: (parts, theme) => ({ order: theme('order', tail(parts)) }),

  col: gridPlugin('column'),
  row: gridPlugin('row'),

  list(parts) {
    switch (parts[1]) {
      case 'inside':
      case 'outside':
        return { 'list-style-position': parts[1] }
    }

    return { 'list-style-type': join(tail(parts)) }
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

  float: propertyAndValue,
  clear: propertyAndValue,

  // 'overflow-visible'
  // 'overflow-x-hidden'
  overflow(parts) {
    switch (parts[1]) {
      case 'ellipsis':
      case 'clip':
        return { 'text-overflow': parts[1] }
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
    (_ = theme('fontFamily', tail(parts), true /* Optional */))
      ? { 'font-family': _ }
      : { 'font-weight': theme('fontWeight', tail(parts)) },

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
        ? { [`--${tag('placeholder-opacity')}`]: theme('placeholderOpacity', tail(parts, 2)) }
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
}

/* eslint-enable no-return-assign, no-cond-assign, @typescript-eslint/consistent-type-assertions */
