import type { Declarations, Plugin, ThemeValueResolver, UnknownKeyHandler } from './types'

import * as is from './is'
import { compose, convertTo, corners, defaultToKey, divideBy, edges, optional } from './helpers'
import { join, joinTruthy, tail } from './util'

// Shared variables
let _: undefined | string | Declarations

// eslint-disable-next-line no-implicit-coercion
const keyColor: UnknownKeyHandler<string> = (key) => (~key.indexOf('-') ? undefined : key)

const TOP_LEFT: Record<string, undefined | string> = { x: 'left', y: 'top' }
const WIDTH_HEIGHT: Record<string, undefined | string> = { w: 'width', h: 'height' }

const propertyAndValue = (parts: string[]): Declarations => ({ [parts[0]]: parts[1] })
const display = (parts: string[]): Declarations => ({ display: join(parts) })
const position = (parts: string[]): Declarations => ({ position: parts[0] })
const textTransform = (parts: string[]): Declarations => ({ 'text-transform': parts[0] })

const border = (parts: string[], theme: ThemeValueResolver): Declarations => {
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
  }

  // eslint-disable-next-line no-return-assign, no-cond-assign
  return (_ = theme(
    `${parts[0]}Width` as 'borderWidth',
    parts[1],
    compose(convertTo('px'), optional),
  ))
    ? {
        border: join(
          [_, 'solid', theme(`${parts[0]}Color` as 'borderColor', join(parts.slice(2)), keyColor)],
          ' ',
        ),
      }
    : { 'border-color': theme(`${parts[0]}Color` as 'borderColor', join(tail(parts)), keyColor) }
}

// eslint-disable-next-line no-return-assign
const minMax: Plugin = (parts, theme) =>
  (_ = WIDTH_HEIGHT[parts[1]]) && {
    [`${parts[0]}-${_}`]: theme(
      'sizes',
      join(parts.slice(2)),
      convertTo('rem', parts[1] as 'w' | 'h'),
    ),
  }

const edgesPluginFor = (key: 'margin' | 'padding'): Plugin => (parts, theme) =>
  parts[0][1]
    ? edges(theme('spacing', parts[1], convertTo('rem')), parts[0][1], key)
    : { [key]: theme('spacing', parts[1], convertTo('rem')) }

// For p-*, px-*, pt-*
const padding = edgesPluginFor('padding')

// For m-*, mx-*, mt-*
const margin = edgesPluginFor('margin')

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
  shadow: (parts, theme) => ({ 'box-shadow': theme('boxShadow', parts[1]) }),

  // .rotate-0	--transform-rotate: 0;
  // .rotate-1	--transform-rotate: 1deg;
  rotate: (parts, theme) => ({
    transform: `rotate(${theme('angle', parts[1], convertTo('deg'))})`,
  }),

  // .duration-75	transition-duration: 75ms;
  // .duration-75	transition-duration: 75ms;
  duration: (parts, theme) => ({
    'transition-duration': theme('durations', parts[1], convertTo('ms')),
  }),

  // .delay-75	transition-delay: 75ms;
  // .delay-100	transition-delay: 100ms;
  delay: (parts, theme) => ({ 'transition-delay': theme('durations', parts[1], convertTo('ms')) }),

  // .scale-0	--transform-scale-x: 0;
  // .scale-x-150
  // .scale-y-0
  scale: (parts, theme) => ({
    transform: `scale${parts[2] ? parts[1].toUpperCase() : ''}(${theme(
      'scale',
      parts[2] || parts[1],
      divideBy(100),
    )})`,
  }),

  origin: (parts) => ({ 'transform-origin': join(tail(parts), ' ') }),

  cursor: (parts) => ({ cursor: join(tail(parts)) }),

  select: (parts) => ({ 'user-select': parts[1] }),

  // .translate-x-0	--transform-translate-x: 0;
  // .translate-x-1	--transform-translate-x: 0.25rem;
  // .translate-y-px	--transform-translate-y: 1px;
  // .translate-y-full	--transform-translate-y: 100%;
  // .translate-y-1/2	--transform-translate-y: 50%;
  translate: (parts, theme) => ({
    transform: `translate${parts[1].toUpperCase()}(${theme(
      'spacing',
      parts[2],
      convertTo('rem'),
    )})`,
  }),

  // .skew-y-0	--transform-skew-y: 0;
  // .skew-y-1	--transform-skew-y: 1deg;
  skew: (parts, theme) => ({
    transform: `skew${parts[1].toUpperCase()}(${theme('angle', parts[2], convertTo('deg'))})`,
  }),

  'pointer-events': (parts) => ({ 'pointer-events': parts[1] }),

  tracking: (parts, theme) => ({ 'letter-spacing': theme('letterSpacing', parts[1]) }),

  // .leading-10	line-height: 2.5rem;
  // .leading-none	line-height: 1;
  // .leading-tight	line-height: 1.25;
  leading: (parts, theme) => ({ 'line-height': theme('lineHeight', parts[1], convertTo('rem')) }),

  align: (parts) => ({ 'vertical-align': join(tail(parts)) }),

  whitespace: (parts) => ({ 'white-space': join(tail(parts)) }),

  // .z-50	z-index: 50;
  // .z-auto	z-index: auto;
  z: (parts, theme) => ({ 'z-index': theme('zIndex', parts[1], defaultToKey) }),

  // .gap-0	gap: 0;
  // .gap-1	gap: 0.25rem;
  // .gap-px	gap: 1px;
  // .gap-x-0	column-gap: 0;
  // .gap-x-1	column-gap: 0.25rem;
  gap: (parts, theme) => ({ gap: theme('spacing', parts[1], convertTo('rem')) }),

  // .stroke-current	stroke: currentColor;
  // stroke-0	stroke-width: 0;
  // .stroke-1	stroke-width: 1;
  'stroke-current': { stroke: 'currentColor' },
  stroke: (parts, theme) => ({ 'stroke-width': theme('strokeWidth', parts[1], defaultToKey) }),

  fill: (parts, theme) => ({ fill: theme('colors', join(tail(parts)), keyColor) }),

  // .outline-none	outline: 2px solid transparent; outline-offset: 2px;
  // .outline-white	outline: 2px dotted white; outline-offset: 2px;
  outline: (parts, theme) => ({
    outline: `2px ${parts[1] === 'none' ? 'solid' : 'dotted'} ${theme(
      'colors',
      join(tail(parts)),
      keyColor,
    )}`,
    'outline-offset': '2px',
  }),

  // .appearance-none -> appearance: none;
  // .appearance-auto -> appearance: auto;
  // .appearance-menulist-button; -> appearance: menulist-button;
  // .appearance-textfield -> appearance: textfield;
  appearance: (parts) => ({ appearance: join(tail(parts)) }),

  opacity: (parts, theme) => ({ opacity: theme('opacity', parts[1], divideBy(100)) }),

  ease: (parts, theme) => ({
    'transition-timing-function': theme(
      'transitionTimingFunction',
      join(tail(parts)),
      defaultToKey,
    ),
  }),

  break(parts) {
    switch (parts[1]) {
      case 'normal':
        return {
          'word-break': parts[1],
          'overflow-wrap': parts[1],
        }
      case 'words':
        return { 'overflow-wrap': 'break-word' }
      case 'all':
        return { 'word-break': 'break-all' }
    }
  },

  'no-underline': { 'text-decoration': 'none' },
  'line-through': { 'text-decoration': 'line-through' },

  // .w-64	width: 16rem;
  // .w-auto	width: auto;
  // .w-px	width: 1px;
  // .w-1/2	width: 50%;
  // .w-full	width: 100%;
  // .w-screen	width: 100vw;
  w: (parts, theme) => ({ width: theme('sizes', parts[1], convertTo('rem', 'w')) }),
  h: (parts, theme) => ({ height: theme('sizes', parts[1], convertTo('rem', 'h')) }),

  text(parts, theme) {
    switch (parts[1]) {
      case 'left':
      case 'center':
      case 'right':
      case 'justify':
        return { 'text-align': parts[1] }
      default: {
        const fontSize = theme('fontSize', parts[1], optional)

        if (fontSize) {
          return is.string(fontSize)
            ? { 'font-size': fontSize }
            : {
                'font-size': fontSize[0],
                'line-height': is.string(fontSize[1]) ? fontSize[1] : fontSize[1].lineHeight,
                'letter-spacing': (fontSize[1] as { letterSpacing?: string }).letterSpacing,
              }
        }

        return { color: theme('colors', join(tail(parts)), keyColor) }
      }
    }
  },

  bg(parts, theme) {
    switch (parts[1]) {
      case 'fixed':
      case 'local':
      case 'scroll':
        return { 'background-attachment': parts[1] }
      case 'bottom':
      case 'center':
      case 'left':
      case 'right':
      case 'top':
        return { 'background-position': join(tail(parts), ' ') }
      case 'no':
        return parts[2] === 'repeat' && { 'background-repeat': join(tail(parts)) }
      case 'repeat':
        switch (parts[2]) {
          case 'x':
          case 'y':
            return { 'background-repeat': join(tail(parts)) }
        }

        return { 'background-repeat': parts[2] || parts[1] }
      case 'auto':
      case 'cover':
      case 'contain':
        return { 'background-size': parts[1] }
    }

    return {
      'background-color': theme('colors', join(tail(parts)), keyColor),
      // Look for a corresponding text color:
      // 'primary' -> 'on-primary'
      // 'on-primary' -> 'primary'
      color: theme(
        'colors',
        join(parts[1] === 'on' ? parts.slice(2) : ['on'].concat(tail(parts))),
        compose(keyColor, optional),
      ),
    }
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
    corners(theme('borderRadius', parts[2], convertTo('px')), parts[1], 'border', 'radius') || {
      'border-radius': theme('borderRadius', parts[1], convertTo('px')),
    },

  'transition-none': { 'transition-property': 'none' },

  transition: (parts, theme) => ({
    transition: join(
      [
        parts[1]
          ? theme('transitionProperty', parts[1], defaultToKey)
          : 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
        theme('durations', undefined, convertTo('ms')),
        theme('transitionTimingFunction'),
      ],
      ' ',
    ),
  }),

  flex(parts, theme) {
    switch (parts[1]) {
      case 'row':
      case 'col':
        return {
          'flex-direction':
            parts[1] === 'col' ? joinTruthy(['column', parts[2]]) : join(tail(parts)),
        }
      case 'nowrap':
      case 'wrap':
        return { 'flex-wrap': join(tail(parts)) }
      case 'grow':
      case 'shrink':
        return { [`flex-${parts[1]}`]: parts[2] || '1' }
    }

    if ((_ = theme('flex', parts[1], optional))) {
      return { flex: _ }
    }

    return display(parts)
  },

  grid(parts) {
    switch (parts[1]) {
      case 'cols':
      case 'rows':
        return {
          [`grid-template-${parts[1] === 'cols' ? 'columns' : parts[1]}`]:
            parts[2] === 'none' ? parts[2] : `repeat(${parts[2]}, minmax(0, 1fr))`,
        }
      case 'flow':
        return {
          [`grid-auto-${parts[1]}`]:
            parts[2] === 'col' ? joinTruthy(['column', parts[3]], ' ') : join(parts.slice(2), ' '),
        }
    }

    return display(parts)
  },

  'not-italic': { 'font-style': 'normal' },
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

  italic: { 'font-style': 'italic' },
  underline: { 'text-decoration': 'underline' },

  uppercase: textTransform,
  lowercase: textTransform,
  capitalize: textTransform,

  'normal-case': textTransform(['none']),

  truncate: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },

  resize(parts) {
    switch (parts[1]) {
      case 'x':
        return { resize: 'vertical' }
      case 'y':
        return { resize: 'horizontal' }
    }

    return { resize: parts[1] || 'both' }
  },

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

  inset(parts) {
    switch (parts[1]) {
      case '0':
      case 'auto':
        return {
          top: parts[1],
          right: parts[1],
          bottom: parts[1],
          left: parts[1],
        }
      case 'y':
        return { top: parts[2], bottom: parts[2] }
      case 'x':
        return { left: parts[2], right: parts[2] }
    }
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

  order: (parts, theme) => ({ order: theme('order', parts[1], defaultToKey) }),

  col(parts) {
    switch (parts[1]) {
      case 'auto':
        return { 'grid-column': parts[1] }
      case 'span':
        return {
          'grid-column': parts[2] === 'full' ? '1 / -1' : `span ${parts[2]} / span ${parts[2]}`,
        }
      case 'start':
      case 'end':
        return { [`grid-column-${parts[1]}`]: parts[2] }
    }
  },

  row(parts) {
    switch (parts[1]) {
      case 'auto':
        return { 'grid-row': parts[1] }
      case 'span':
        return {
          'grid-row': parts[2] === 'full' ? '1 / -1' : `span ${parts[2]} / span ${parts[2]}`,
        }
      case 'start':
      case 'end':
        return { [`grid-row-${parts[1]}`]: parts[2] }
    }
  },

  subpixel: (parts) =>
    parts[1] === 'antialiased' && {
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    },

  list(parts) {
    switch (parts[1]) {
      case 'inside':
      case 'outside':
        return { 'list-style-position': parts[1] }
    }

    return { 'list-style-type': parts[1] }
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

  top: propertyAndValue,
  right: propertyAndValue,
  bottom: propertyAndValue,
  left: propertyAndValue,

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

  /* eslint-disable no-return-assign, no-cond-assign */

  font: (parts, theme) =>
    (_ = theme('fontFamily', parts[1], optional))
      ? { 'font-family': _ }
      : (_ = theme('fontWeight', parts[1], defaultToKey)) && { 'font-weight': _ },

  space: (parts, theme) => [
    '>:not([hidden])~:not([hidden])',
    (_ = TOP_LEFT[parts[1]])
      ? { [`margin-${_}`]: theme('spacing', parts[2] || 'base', convertTo('rem')) }
      : (_ = theme('spacing', parts[1] || 'base', convertTo('rem'))) && {
          'margin-left': _,
          'margin-top': _,
        },
  ],

  // .border	border-width: 1px;
  // .border-0	border-width: 0;
  // .border-2	border-width: 2px;
  // .border	border-width: 1px;
  // .border-t	border-top-width: 1px;
  // .border-t-0	border-top-width: 0px;
  // .border-t-xs
  border: (parts, theme) => {
    _ = theme('borderWidth', parts[2], compose(convertTo('px'), optional))

    return (
      edges(
        join(
          [
            _ || theme('borderWidth', 'DEFAULT', optional),
            'solid',
            theme('borderColor', join(parts.slice(_ ? 3 : 2)), keyColor),
          ],
          ' ',
        ),
        parts[1],
        'border',
      ) || border(parts, theme)
    )
  },

  // .divide-x
  // .divide-x-8
  // .divide-x-8-promote
  divide: (parts, theme) => {
    const topLeft = TOP_LEFT[parts[1]]

    // '\0' to prevent DEFAULT value resolution
    _ = topLeft && theme('divideWidth', parts[2] || '\0', compose(convertTo('px'), optional))

    return [
      '>:not([hidden])~:not([hidden])',

      topLeft
        ? {
            [`border-${topLeft}`]: join(
              [
                _ || theme('divideWidth', 'DEFAULT'),
                'solid',
                theme('divideColor', join(parts.slice(_ ? 3 : 2)), keyColor),
              ],
              ' ',
            ),
          }
        : border(parts, theme),
    ]
  },

  /* eslint-enable no-return-assign, no-cond-assign */

  placeholder: (parts, theme) => [
    '::placeholder',
    { color: theme('placeholderColor', join(tail(parts)), keyColor) },
  ],

  min: minMax,
  max: minMax,

  animate: (parts, theme, { keyframes }) => {
    const animation = theme('animation', parts[1])

    return {
      animation: is.string(animation)
        ? animation
        : `${keyframes(animation[1] || parts[1], theme('keyframes', animation[1] || parts[1]))} ${
            animation[0]
          }`,
    }
  },
}
