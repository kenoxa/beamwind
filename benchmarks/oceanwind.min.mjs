const ee = {
    t: ['top-left', 'top-right'],
    r: ['top-right', 'bottom-right'],
    b: ['bottom-left', 'bottom-right'],
    l: ['bottom-left', 'top-left'],
    tl: ['top-left'],
    tr: ['top-right'],
    bl: ['bottom-left'],
    br: ['bottom-right'],
  };
  const ae = {
    t: ['top'],
    r: ['right'],
    b: ['bottom'],
    l: ['left'],
    y: ['top', 'bottom'],
    x: ['left', 'right'],
  };
  const index = (r) => ([t, o, s], e) =>
    r[o].reduce((a, l) => ({ ...a, [[t, l, s].filter(Boolean).join('-')]: e }), {});
  const B = index(ee);
  const E = index(ae);
  const m = (r, t, o, s) => {
    const e = r[t];
      const a = e && (typeof e == 'string' ? e : o ? e[o] : e.default)
    return `rgba(${re(a)},var(${s}))`
  };

  const re = (r) => {
    if (!/^#[\da-f]{8}$|#[\da-f]{6}$|#[\da-f]{4}$|#[\da-f]{3}$/i.test(r)) return
    let t; let o; let s
    return (
      r.length <= 4
        ? ((t = Number.parseInt(r[1] + r[1], 16)),
          (o = Number.parseInt(r[2] + r[2], 16)),
          (s = Number.parseInt(r[3] + r[3], 16)))
        : ((t = Number.parseInt(r.slice(1, 3), 16)),
          (o = Number.parseInt(r.slice(3, 5), 16)),
          (s = Number.parseInt(r.slice(5, 7), 16))),
      `${t},${o},${s}`
    )
  };

  const te = (r) => (t) => {
    let o;
      let s = ''
    t[0] === '-' && ((s = '-'), (t = t.slice(1)))
    const e = t.split('-');
      let a = {}
    switch (e.length) {
      case 1:
        switch (e[0]) {
          case 'hidden':
            a.display = 'none'
            break
          case 'inline':
          case 'block':
          case 'flex':
          case 'grid':
          case 'table':
            a.display = e[0]
            break
          case 'static':
          case 'fixed':
          case 'absolute':
          case 'relative':
          case 'sticky':
            a.position = e[0]
            break
          case 'visible':
            a.visibility = e[0]
            break
          case 'invisible':
            a.visibility = 'hidden'
            break
          case 'antialiased':
            a = { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale' }
            break
          case 'italic':
            a['font-style'] = e[0]
            break
          case 'underline':
            a['text-decoration'] = e[0]
            break
          case 'uppercase':
          case 'lowercase':
          case 'capitalize':
            a['text-transform'] = e[0]
            break
          case 'truncate':
            a = { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }
            break
          case 'transition':
            a['transition-property'] =
              'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform'
            break
          case 'resize':
            a.resize = 'both'
            break
          case 'rounded':
            a['border-radius'] = r.borderRadius.default
            break
          case 'clearfix':
            a['::after'] = { content: '""', display: 'table', clear: 'both' }
            break
          case 'border':
            a['border-width'] = r.borderWidth.default
            break
          case 'shadow':
            a['box-shadow'] = r.boxShadow.default
            break
        }

        break
      case 2:
        switch (e[0]) {
          case 'normal':
            e[1] === 'case' && (a['text-transform'] = 'none')
            break
          case 'flow':
            e[1] === 'root' && (a.display = 'flow-root')
            break
          case 'inline':
            switch (e[1]) {
              case 'block':
              case 'flex':
              case 'grid':
                a.display = `${e[0]}-${e[1]}`
                break
            }

            break
          case 'table':
            switch (e[1]) {
              case 'caption':
              case 'cell':
              case 'column':
              case 'row':
                a.display = `${e[0]}-${e[1]}`
                break
              case 'auto':
              case 'fixed':
                a[`${e[0]}-layout`] = e[1]
                break
            }

            break
          case 'object':
            switch (e[1]) {
              case 'contain':
              case 'cover':
              case 'fill':
              case 'none':
                a[`${e[0]}-fit`] = e[1]
                break
              default:
                a[`${e[0]}-position`] = e[1]
                break
            }

            break
          case 'inset':
            switch (e[1]) {
              case '0':
              case 'auto':
                a = { top: e[1], right: e[1], bottom: e[1], left: e[1] }
                break
            }

            break
          case 'flex':
            switch (e[1]) {
              case 'row':
                a['flex-direction'] = e[1]
                break
              case 'col':
                a['flex-direction'] = 'column'
                break
              case 'wrap':
                a['flex-wrap'] = e[1]
                break
              case '1':
              case 'auto':
              case 'initial':
              case 'none':
                a.flex = r.flex[e[1]]
                break
              case 'grow':
                a['flex-grow'] = r.flexGrow.default
                break
              case 'shrink':
                a['flex-shrink'] = r.flexShrink.default
                break
            }

            break
          case 'items':
            switch (e[1]) {
              case 'start':
              case 'end':
                a['align-items'] = `flex-${e[1]}`
                break
              default:
                a['align-items'] = e[1]
                break
            }

            break
          case 'content':
            switch (e[1]) {
              case 'start':
              case 'end':
                a['align-content'] = `flex-${e[1]}`
                break
              case 'between':
              case 'around':
                a['align-content'] = `space-${e[1]}`
                break
              default:
                a['align-content'] = e[1]
                break
            }

            break
          case 'justify':
            switch (e[1]) {
              case 'start':
              case 'end':
                a['justify-content'] = `flex-${e[1]}`
                break
              case 'between':
              case 'around':
                a['justify-content'] = `space-${e[1]}`
                break
              default:
                a['justify-content'] = e[1]
                break
            }

            break
          case 'self':
            switch (e[1]) {
              case 'start':
              case 'end':
                a['align-self'] = `flex-${e[1]}`
                break
              default:
                a['align-self'] = e[1]
                break
            }

            break
          case 'order':
            a.order = r.order[e[1]]
            break
          case 'col':
            e[1] === 'auto' && (a['grid-column'] = e[1])
            break
          case 'row':
            e[1] === 'auto' && (a['grid-row'] = e[1])
            break
          case 'w':
            a.width = r.width[e[1]]
            break
          case 'h':
            a.height = r.height[e[1]]
            break
          case 'text':
            switch (e[1]) {
              case 'left':
              case 'center':
              case 'right':
              case 'justify':
                a['text-align'] = e[1]
                break
              case 'current':
                a.color = 'currentColor'
                break
              default:
                ;(o = r.fontSize[e[1]])
                  ? (a['font-size'] = o)
                  : (a = {
                      '--ow-text-opacity': 1,
                      color: m(r.colors, e[1], void 0, '--ow-text-opacity'),
                    })
                break
            }

            break
          case 'subpixel':
            e[1] === 'antialiased' &&
              (a = { '-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto' })
            break
          case 'not':
            e[1] === 'italic' && (a['font-style'] = 'normal')
            break
          case 'list':
            switch (e[1]) {
              case 'inside':
              case 'outside':
                a['list-style-position'] = e[1]
                break
              default:
                a['list-style-type'] = e[1]
                break
            }

            break
          case 'no':
            e[1] === 'underline' && (a['text-decoration'] = 'none')
            break
          case 'line':
            e[1] === 'through' && (a['text-decoration'] = 'line-through')
            break
          case 'break':
            switch (e[1]) {
              case 'normal':
                ;(a['word-break'] = e[1]), (a['overflow-wrap'] = e[1])
                break
              case 'words':
                a['overflow-wrap'] = 'break-word'
                break
              case 'all':
                a['word-break'] = 'break-all'
                break
            }

            break
          case 'bg':
            switch (e[1]) {
              case 'fixed':
              case 'local':
              case 'scroll':
                a['background-attachment'] = e[1]
                break
              case 'bottom':
              case 'center':
              case 'left':
              case 'right':
              case 'top':
                a['background-position'] = e[1]
                break
              case 'repeat':
                a[`background-${e[1]}`] = e[1]
                break
              case 'auto':
              case 'cover':
              case 'contain':
                a['background-size'] = e[1]
                break
              case 'current':
                a['background-color'] = 'currentColor'
                break
              default:
                a = {
                  '--ow-bg-opacity': 1,
                  'background-color': m(r.colors, e[1], void 0, '--ow-bg-opacity'),
                }
                break
            }

            break
          case 'border':
            switch (e[1]) {
              case 't':
              case 'r':
              case 'b':
              case 'l':
                a = E(['border', e[1], 'width'], r.borderWidth.default)
                break
              case 'solid':
              case 'dashed':
              case 'dotted':
              case 'double':
              case 'none':
                a['border-style'] = e[1]
                break
              case 'collapse':
                a['border-collapse'] = e[1]
                break
              case 'separate':
                a['border-collapse'] = e[1]
                break
              case 'current':
                a['border-color'] = 'currentColor'
                break
              default:
                ;(o = r.borderWidth[e[1]])
                  ? (a['border-width'] = o)
                  : (a = {
                      '--ow-border-opacity': 1,
                      'border-color': m(r.colors, e[1], void 0, '--ow-border-opacity'),
                    })
                break
            }

            break
          case 'shadow':
            a['box-shadow'] = r.boxShadow[e[1]]
            break
          case 'opacity':
            a.opacity = r.opacity[e[1]]
            break
          case 'transition':
            a['transition-property'] = r.transitionProperty[e[1]]
            break
          case 'ease':
            a['transition-timing-function'] = r.transitionTimingFunction[e[1]]
            break
          case 'appearance':
            e[1] === 'none' && (a[e[0]] = e[1])
            break
          case 'outline':
            e[1] === 'none' && (a[e[0]] = '0')
            break
          case 'resize':
            switch (e[1]) {
              case 'x':
                a.resize = 'vertical'
                break
              case 'y':
                a.resize = 'horizontal'
                break
              case 'none':
                a.resize = e[1]
                break
            }

            break
          case 'fill':
            e[1] === 'current' && (a.fill = r.fill[e[1]])
            break
          case 'stroke':
            e[1] === 'current'
              ? (a.stroke = r.stroke.current)
              : (a['stroke-width'] = r.strokeWidth[e[1]])
            break
          case 'sr':
            e[1] === 'only' &&
              (a = {
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0,0,0,0)',
                'border-width': '0',
              })
            break
          case 'box':
            a['box-sizing'] = `${e[1]}-box`
            break
          case 'float':
          case 'clear':
          case 'overflow':
            a[e[0]] = e[1]
            break
          case 'scrolling':
            a['-webkit-overflow-scrolling'] = e[1]
            break
          case 'z':
            a['z-index'] = r.zIndex[e[1]]
            break
          case 'gap':
            a.gap = r.gap[e[1]]
            break
          case 'p':
            a.padding = r.padding[e[1]]
            break
          case 'py':
          case 'px':
          case 'pt':
          case 'pr':
          case 'pb':
          case 'pl':
            a = E(['padding', e[0][1]], r.padding[e[1]])
            break
          case 'm':
            a.margin = `${s}${r.margin[e[1]]}`
            break
          case 'my':
          case 'mx':
          case 'mt':
          case 'mr':
          case 'mb':
          case 'ml':
            a = E(['margin', e[0][1]], `${s}${r.margin[e[1]]}`)
            break
          case 'font':
            ;(o = r.fontFamily[e[1]]) && (a['font-family'] = o),
              (o = r.fontWeight[e[1]]) && (a['font-weight'] = o)
            break
          case 'tracking':
            a['letter-spacing'] = r.letterSpacing[e[1]]
            break
          case 'leading':
            a['line-height'] = r.lineHeight[e[1]]
            break
          case 'align':
            a['vertical-align'] = e[1]
            break
          case 'whitespace':
            a['white-space'] = e[1]
            break
          case 'rounded':
            switch (e[1]) {
              case 't':
              case 'r':
              case 'b':
              case 'l':
              case 'tl':
              case 'tr':
              case 'bl':
              case 'br':
                a = B(['border', e[1], 'radius'], r.borderRadius.default)
                break
              default:
                a['border-radius'] = r.borderRadius[e[1]]
                break
            }

            break
          case 'duration':
            a['transition-duration'] = `${r.transitionDuration[e[1]]}`
            break
          case 'delay':
            a['transition-delay'] = `${r.transitionDelay[e[1]]}`
            break
          case 'scale':
            a.transform = `scale(${r.scale[e[1]]})`
            break
          case 'rotate':
            a.transform = `rotate(${s ? '-' : ''}${r.rotate[e[1]]})`
            break
          case 'origin':
            a['transform-origin'] = e[1]
            break
          case 'cursor':
            a.cursor = e[1]
            break
          case 'select':
            a['user-select'] = e[1]
            break
          case 'placeholder':
            a['::placeholder'] = {
              '--ow-placeholder-opacity': 1,
              color: m(r.placeholderColor, e[1], void 0, '--ow-placeholder-opacity'),
            }
            break
          case 'divide':
            switch (e[1]) {
              case 'x':
              case 'y':
                a.selectors = {
                  '& > * + *': {
                    [`border-${e[1] === 'x' ? 'left' : 'top'}-width`]: r.divideWidth.default,
                  },
                }
                break
              case 'solid':
              case 'dashed':
              case 'dotted':
              case 'double':
              case 'none':
                a.selectors = { '& > * + *': { 'border-style': e[1] } }
                break
              default:
                a.selectors = {
                  '& > * + *': {
                    '--ow-divide-opacity': 1,
                    'border-color': m(r.colors, e[1], void 0, '--ow-divide-opacity'),
                  },
                }
                break
            }

            break
          case 'top':
          case 'right':
          case 'bottom':
          case 'left':
            a[e[0]] = e[1]
            break
        }

        break
      case 3:
        switch (e[0]) {
          case 'divide':
            switch (e[1]) {
              case 'x':
              case 'y':
                a.selectors = {
                  '& > * + *': {
                    [`border-${e[1] === 'x' ? 'left' : 'top'}-width`]: r.divideWidth[e[2]],
                  },
                }
                break
              default:
                a.selectors = {
                  '& > * + *': {
                    '--ow-divide-opacity': 1,
                    'border-color': m(r.colors, e[1], e[2], '--ow-divide-opacity'),
                  },
                }
                break
            }

            break
          case 'placeholder':
            switch (e[1]) {
              case 'opacity':
                a['::placeholder'] = { '--ow-placeholder-opacity': r.opacity[e[2]] }
                break
              default:
                a['::placeholder'] = {
                  '--ow-placeholder-opacity': 1,
                  color: m(r.placeholderColor, e[1], e[2], '--ow-placeholder-opacity'),
                }
            }

            break
          case 'table':
            a.display = `${e[0]}-${e[1]}-${e[2]}`
            break
          case 'object':
            e[1] === 'scale'
              ? (a['object-fit'] = `${e[1]}-${e[2]}`)
              : (a['object-position'] = `${e[1]} ${e[2]}`)
            break
          case 'inset':
            switch (e[1]) {
              case 'y':
                a = { top: e[2], bottom: e[2] }
                break
              case 'x':
                a = { left: e[2], right: e[2] }
                break
            }

            break
          case 'flex':
            switch (e[1]) {
              case 'row':
                e[2] === 'reverse' && (a['flex-direction'] = `row-${e[2]}`)
                break
              case 'col':
                e[2] === 'reverse' && (a['flex-direction'] = `column-${e[2]}`)
                break
              case 'no':
                e[2] === 'wrap' && (a['flex-wrap'] = `${e[1]}${e[2]}`)
                break
              case 'wrap':
                e[2] === 'reverse' && (a['flex-wrap'] = `${e[1]}-${e[2]}`)
                break
              case 'grow':
              case 'shrink':
                e[2] === '0' && (a[`flex-${e[1]}`] = e[2])
                break
            }

            break
          case 'grid':
            switch (e[1]) {
              case 'cols':
                a['grid-template-columns'] =
                  e[2] === 'none' ? e[2] : `repeat(${e[2]}, minmax(0, 1fr))`
                break
              case 'rows':
                a['grid-template-rows'] = e[2] === 'none' ? e[2] : `repeat(${e[2]}, minmax(0, 1fr))`
                break
              case 'flow':
                a['grid-auto-flow'] = e[2]
                break
            }

            break
          case 'min':
            switch (e[1]) {
              case 'w':
                a['min-width'] = r.minWidth[e[2]]
                break
              case 'h':
                a['min-height'] = r.minHeight[e[2]]
                break
            }

            break
          case 'max':
            switch (e[1]) {
              case 'w':
                a['max-width'] = r.maxWidth[e[2]]
                break
              case 'h':
                a['max-height'] = r.maxHeight[e[2]]
                break
            }

            break
          case 'whitespace':
            e[1] + e[2] === 'nowrap'
              ? (a['white-space'] = 'nowrap')
              : (a['white-space'] = `${e[1]}-${e[2]}`)
            break
          case 'bg':
            switch (e[1]) {
              case 'no':
                e[2] === 'repeat' && (a['background-repeat'] = `${e[1]}-${e[2]}`)
                break
              case 'repeat':
                switch (e[2]) {
                  case 'x':
                  case 'y':
                    a['background-repeat'] = `${e[1]}-${e[2]}`
                    break
                  default:
                    a['background-repeat'] = e[2]
                    break
                }

                break
              case 'left':
                a['background-position'] = `${e[1]} ${e[2]}`
                break
              case 'right':
                a['background-position'] = `${e[1]} ${e[2]}`
                break
              case 'opacity':
                a['--ow-bg-opacity'] = r.opacity[e[2]]
                break
              default:
                a = {
                  '--ow-bg-opacity': 1,
                  'background-color': m(r.colors, e[1], e[2], '--ow-bg-opacity'),
                }
                break
            }

            break
          case 'ease':
            e[1] + e[2] === 'inout' &&
              (a['transition-timing-function'] = 'cubic-bezier(0.4, 0, 0.2, 1)')
            break
          case 'not':
            e[1] + e[2] === 'sronly' &&
              (a = {
                position: 'static',
                width: 'auto',
                height: 'auto',
                padding: '0',
                margin: '0',
                overflow: 'visible',
                clip: 'auto',
                'white-space': 'normal',
              })
            break
          case 'overflow':
            a[`${e[0]}-${e[1]}`] = e[2]
            break
          case 'col':
            switch (e[1]) {
              case 'span':
                a['grid-column'] = `span ${e[2]} / span ${e[2]}`
                break
              case 'start':
              case 'end':
                a[`grid-column-${e[1]}`] = e[2]
                break
              case 'gap':
                a['column-gap'] = r.spacing[e[2]]
                break
            }

            break
          case 'row':
            switch (e[1]) {
              case 'span':
                a['grid-row'] = `span ${e[2]} / span ${e[2]}`
                break
              case 'start':
              case 'end':
                a[`grid-row-${e[1]}`] = e[2]
                break
            }

            break
          case 'rounded':
            switch (e[1]) {
              case 't':
              case 'r':
              case 'b':
              case 'l':
              case 'tl':
              case 'tr':
              case 'bl':
              case 'br':
                a = B(['border', e[1], 'radius'], r.borderRadius[e[2]])
                break
            }

            break
          case 'border':
            switch (e[1]) {
              case 't':
              case 'r':
              case 'b':
              case 'l':
                a = E(['border', e[1], 'width'], r.borderWidth[e[2]])
                break
              case 'opacity':
                a['--ow-border-opacity'] = r.opacity[e[2]]
                break
              default:
                a = {
                  '--ow-border-opacity': 1,
                  'border-color': m(r.colors, e[1], e[2], '--ow-border-opacity'),
                }
                break
            }

            break
          case 'scale':
            a.transform = `scale${e[1].toUpperCase()}(${r.scale[e[2]]})`
            break
          case 'translate':
            a.transform = `${e[0]}${e[1].toUpperCase()}(${s}${r.spacing[e[2]]})`
            break
          case 'skew':
            a.transform = `${e[0]}${e[1].toUpperCase()}(${s}${r.skew[e[2]]})`
            break
          case 'pointer':
            e[1] === 'events' && (a['pointer-events'] = e[2])
            break
          case 'text':
            switch (e[1]) {
              case 'opacity':
                a['--ow-text-opacity'] = r.opacity[e[2]]
                break
              default:
                a = { '--ow-text-opacity': 1, color: m(r.colors, e[1], e[2], '--ow-text-opacity') }
                break
            }

            break
          case 'align':
            a['vertical-align'] = `${e[1]}-${e[2]}`
            break
          case 'origin':
            a['transform-origin'] = `${e[1]} ${e[2]}`
            break
          case 'cursor':
            a.cursor = `${e[1]}-${e[2]}`
            break
          case 'space':
            a.selectors = {
              '& > * + *': { [`margin-${e[1] === 'x' ? 'left' : 'top'}`]: `${s}${r.margin[e[2]]}` },
            }
            break
        }

        break
      case 4:
        switch (e[0]) {
          case 'grid':
            e[1] === 'flow' &&
              (e[2] === 'col' && (a['grid-auto-flow'] = `column ${e[3]}`),
              e[2] === 'row' && (a['grid-auto-flow'] = `row ${e[3]}`))
            break
          case 'max':
            e[1] + e[2] === 'wscreen' && (a['max-width'] = r.maxWidth[`screen-${e[3]}`])
            break
        }

        break
    }

    return a
  }

const T = te
const N = {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    colors: {
      transparent: '#00000000',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
      },
      red: {
        100: '#FFF5F5',
        200: '#FED7D7',
        300: '#FEB2B2',
        400: '#FC8181',
        500: '#F56565',
        600: '#E53E3E',
        700: '#C53030',
        800: '#9B2C2C',
        900: '#742A2A',
      },
      orange: {
        100: '#FFFAF0',
        200: '#FEEBC8',
        300: '#FBD38D',
        400: '#F6AD55',
        500: '#ED8936',
        600: '#DD6B20',
        700: '#C05621',
        800: '#9C4221',
        900: '#7B341E',
      },
      yellow: {
        100: '#FFFFF0',
        200: '#FEFCBF',
        300: '#FAF089',
        400: '#F6E05E',
        500: '#ECC94B',
        600: '#D69E2E',
        700: '#B7791F',
        800: '#975A16',
        900: '#744210',
      },
      green: {
        100: '#F0FFF4',
        200: '#C6F6D5',
        300: '#9AE6B4',
        400: '#68D391',
        500: '#48BB78',
        600: '#38A169',
        700: '#2F855A',
        800: '#276749',
        900: '#22543D',
      },
      teal: {
        100: '#E6FFFA',
        200: '#B2F5EA',
        300: '#81E6D9',
        400: '#4FD1C5',
        500: '#38B2AC',
        600: '#319795',
        700: '#2C7A7B',
        800: '#285E61',
        900: '#234E52',
      },
      blue: {
        100: '#EBF8FF',
        200: '#BEE3F8',
        300: '#90CDF4',
        400: '#63B3ED',
        500: '#4299E1',
        600: '#3182CE',
        700: '#2B6CB0',
        800: '#2C5282',
        900: '#2A4365',
      },
      indigo: {
        100: '#EBF4FF',
        200: '#C3DAFE',
        300: '#A3BFFA',
        400: '#7F9CF5',
        500: '#667EEA',
        600: '#5A67D8',
        700: '#4C51BF',
        800: '#434190',
        900: '#3C366B',
      },
      purple: {
        100: '#FAF5FF',
        200: '#E9D8FD',
        300: '#D6BCFA',
        400: '#B794F4',
        500: '#9F7AEA',
        600: '#805AD5',
        700: '#6B46C1',
        800: '#553C9A',
        900: '#44337A',
      },
      pink: {
        100: '#FFF5F7',
        200: '#FED7E2',
        300: '#FBB6CE',
        400: '#F687B3',
        500: '#ED64A6',
        600: '#D53F8C',
        700: '#B83280',
        800: '#97266D',
        900: '#702459',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '15rem',
      64: '16rem',
    },
    opacity: { 0: '0', 25: '0.25', 50: '0.5', 75: '0.75', 100: '1' },
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1e3: '1000ms',
    },
    borderWidth: { default: '1px', 0: '0', 2: '2px', 4: '4px', 8: '8px' },
  };
  const oe = ({ screens: r, colors: t, spacing: o, opacity: s, duration: e, borderWidth: a }) => ({
    screens: r,
    colors: t,
    spacing: o,
    backgroundColor: t,
    gradientColorStops: t,
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))',
    },
    backgroundOpacity: s,
    backgroundSize: { auto: 'auto', cover: 'cover', contain: 'contain' },
    borderColor: t,
    borderOpacity: s,
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: a,
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    divideColor: t,
    divideOpacity: s,
    divideWidth: a,
    fill: { current: 'currentColor' },
    flex: { 1: '1 1 0%', auto: '1 1 auto', initial: '0 1 auto', none: 'none' },
    flexGrow: { 0: '0', default: '1' },
    flexShrink: { 0: '0', default: '1' },
    fontFamily: {
      sans: '"Lato", Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontMetrics: {
      'Segoe UI': { capHeight: 1455, ascent: 2200, descent: -480, lineGap: 0, unitsPerEm: 2048 },
      Roboto: { capHeight: 1500, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
      'Helvetica Neue': {
        capHeight: 1433,
        ascent: 1974,
        descent: -426,
        lineGap: 0,
        unitsPerEm: 2048,
      },
      Lato: { capHeight: 1433, ascent: 1974, descent: -426, lineGap: 0, unitsPerEm: 2e3 },
    },
    height: { auto: 'auto', ...o, full: '100%', screen: '100vh' },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    margin: { auto: 'auto', ...o },
    maxHeight: { full: '100%', screen: '100vh' },
    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...Object.entries(r).reduce((l, [h, k]) => ({ ...l, [`screen-${h}`]: k }), {}),
    },
    minHeight: { 0: '0', full: '100%', screen: '100vh' },
    minWidth: { 0: '0', full: '100%' },
    opacity: s,
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: o,
    placeholderColor: t,
    placeholderOpacity: s,
    space: o,
    stroke: { current: 'currentColor' },
    strokeWidth: { 0: '0', 1: '1', 2: '2' },
    textColor: t,
    textOpacity: s,
    width: {
      auto: 'auto',
      ...o,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    },
    zIndex: { auto: 'auto', 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50' },
    gap: o,
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    rotate: { 0: '0deg', 45: '45deg', 90: '90deg', 180: '180deg' },
    translate: { ...o, '-full': '-100%', '-1/2': '-50%', '1/2': '50%', full: '100%' },
    skew: { 0: '0', 3: '3deg', 6: '6deg', 12: '12deg' },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: e,
    transitionDelay: e,
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      spin: { to: { transform: 'rotate(360deg)' } },
      ping: { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
      pulse: { '50%': { opacity: '.5' } },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
      },
    },
  })
const P = oe
const _ = (r) => r && typeof r == 'object';
  const M = (...r) =>
    r.reduce(
      (t, o) => (
        Object.keys(o).forEach((s) => {
          const e = t[s];
            const a = o[s]
          _(e) && _(a) ? (t[s] = M(e, a)) : (t[s] = s === 'transform' && e ? [a, e].join(' ') : a)
        }),
        t
      ),
      {},
    )
const F = M
const se = (r) => {
  let t = []
  return r.reduce((o, s) => {
    const e = s.match(/(.*:)+\(/);
      const a = s.match(/\)/g) || []
    return (
      e && ((t = t.concat(e[1].split('('))), (s = e.input.replace(e[0], ''))),
      (s = t.join('') + s),
      a.length > 0 &&
        a.forEach(() => {
          ;(s = s.slice(0, -1)), t.pop()
        }),
      s.endsWith(':') ? o : [...o, s]
    )
  }, [])
}

const I = (r, ...t) =>
  se(
    (typeof r == 'string'
      ? r
      : Array.isArray(r)
      ? r.reduce((o, s, e) => (o += [s || '', t[e] || ''].join(' ')), '')
      : Object.entries(r).reduce((o, [s, e]) => (o = [o, e ? s : ''].join(' ')), '')
    )
      .replace(/\s\s+/g, ' ')
      .trim()
      .split(' '),
  )
function U(r) {
  for (var t = 0, o, s = 0, e = r.length; e >= 4; ++s, e -= 4)
    (o =
      (r.charCodeAt(s) & 255) |
      ((r.charCodeAt(++s) & 255) << 8) |
      ((r.charCodeAt(++s) & 255) << 16) |
      ((r.charCodeAt(++s) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (t =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (e) {
    case 3:
      t ^= (r.charCodeAt(s + 2) & 255) << 16
    case 2:
      t ^= (r.charCodeAt(s + 1) & 255) << 8
    case 1:
      ;(t ^= r.charCodeAt(s) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }

  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}

const ie = /^(br|hy|us|wr|text-si|scroll-snap-t)/;
  const ne = /^(ap|us|tab-|border-e|margin-e|margin-s|padding-e|padding-s|border-sta)/;
  const ce = /^(ap|br|hy|us|wr|mas|colu|clip-|box-de|font-k|text-e|font-fe|shape-i|text-or|text-si|border-e|margin-e|margin-s|padding-e|padding-s|border-sta|background-cl|scroll-snap-t|text-decoration-)/;
  const le = /^(pos|background-cl)/;
  const D = {};
  const de = function (r) {
    return D[r] ? D[r] : (D[r] = (Number(ie.test(r))) | (2 * ne.test(r)) | (4 * ce.test(r)))
  };

  const be = function (r, t) {
    return le.test(r) ? t.replace(/(sticky|text)/, '-webkit-$1, $1') : t
  }

const W = typeof window != 'undefined' && window.Deno;
  const L = W ? !1 : typeof window != 'undefined';
  const A = W || L ? !1 : process.env.NODE_ENV !== 'production';
  const H = '__otion'
function G() {
  let r = document.getElementById(H)
  return r || ((r = document.createElement('style')), (r.id = H), document.head.appendChild(r))
}

function pe({ nonce: r, target: t = G().sheet }) {
  return (
    (t.ownerNode.nonce = r),
    {
      sheet: t,
      insert(o, s) {
        try {
          return t.insertRule(o, s)
        } catch {
          return -1
        }
      },
    }
  )
}

function fe({ nonce: r, target: t = G() }) {
  return (
    (t.nonce = r),
    {
      sheet: t.sheet,
      insert(o, s) {
        return t.insertBefore(document.createTextNode(o), t.childNodes[s]), s
      },
    }
  )
}

const ue = {
  insert() {
    return 0
  },
}
function S(r) {
  return r.trim().replace(/\s+/g, ' ')
}

function ge(r) {
  return S(r).replace(/([([]) | ([)\]])| ?(:) ?/g, '$1$2$3')
}

const me = /^(-|f[lo].*?[^se]$|g.{6,}[^ps]$|z|o[pr]|(-w.{6})?li.*?(t|mp)$|an|(bo|s).{5}im|sca|m.{7}[ds]|ta|c.*?[st]$|wido|ini)/;
  const he = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/;
  const ke = new Map([
    ['nk', 1],
    ['sited', 2],
    ['pty', 3],
    ['cus-w', 4],
    ['ver', 5],
    ['cus', 6],
    ['cus-v', 7],
    ['tive', 8],
    ['sable', 9],
  ]);
  const we = 9
function V(r, t, o) {
  let s = 0
  const e = r[1] === '-'
  if (!e) {
    const l = r[0] === '-' ? r.slice(r.indexOf('-', 1)) + 1 : r;
      const h = he.exec(l)
    s = (h ? Number(Boolean(h[1])) || -Boolean(h[2]) : 0) + 1
    let k = 1
    for (; (k = l.indexOf('-', k) + 1); ) ++s
  }

  const a = 2
  return (s *= a * ((t && ke.get(t.slice(3, 8))) || we + 1)), (s += Number(o)), s
}

const R = 72
function xe(r) {
  return `-${r.toLowerCase()}`
}

function ye() {
  let r; let t; let o; let s
  function e() {
    if (!r || !t || !o)
      throw new Error('On a custom otion instance, `setup()` must be called before usage.')
  }

  function a(n) {
    for (let index = n; index <= R; ++index) ++s[index]
  }

  function l(n, index) {
    if (n.type === 1) {
      const { selectorText: b, style: c } = n;
        const [, d, f] = /^..([\da-z]+)(:.*)?/.exec(b);
        const p = c[0]
      p && a(V(p, f, Boolean(index))), o.set(d, o.size)
    } else l(n.cssRules[0], !0)
  }

  function h(n, index) {
    const b = typeof index == 'number' && !me.test(n) ? `${index}px` : S(`${index}`)
    return t(n, b)
  }

  function k(n, index) {
    if (typeof index != 'object') return h(n, index)
    let b = ''
    return (
      index.forEach((c) => {
        c && (b += `;${h(n, c)}`)
      }),
      b.slice(1)
    )
  }

  function z(n, index, b, c, d) {
    let f = ''
    for (const p in n) {
      const y = n[p]
      if (y != null)
        if (typeof y != 'object' || Array.isArray(y)) {
          const $ = p.replace(/^ms|[A-Z]/g, xe);
            const u = k($, y);
            const w = `_${U(index + u)}`;
            const x = b
          let g = o.get(w)
          if (g == null || x) {
            const v = V($, d == null ? '' : index.slice(d), Boolean(x))
            if (g == null || c[v] > g) {
              const O = `.${w}`
              r.insert(
                `${
                  index.slice(0, d) + O + (d != null ? `${index.slice(d).replace(/&/g, O)}{` : '{')
                }${u}}${b}`,
                s[v],
              ),
                a(v),
                (g = o.size),
                o.set(w, g),
                x && (c[v] = Math.max(c[v], g))
            }
          }

          f += ` ${w}`
        } else {
          let $;
            let u = p[0] === ':' || p[0] === '@' || p[0] === '&' ? p : ge(p);
            let w = '';
            let x = d
          x == null &&
            (u[0] === ':' || u[0] === '&'
              ? ((x = index.length),
                ($ = u.split(/,(?![^[]*?[^\\]["']\s*?])/).map((g) => S(g).replace('&', ''))))
              : u === 'selectors'
              ? (u = '')
              : u[0] !== '@' && ((u += '{'), (w = '}'))),
            ($ || [u]).forEach((g) => {
              f += z(y, index + g, w + b, c, x)
            })
        }
    }

    return f
  }

  return {
    setup(n) {
      ;(r = n.injector || (L ? (A ? fe({}) : pe({})) : ue)),
        (t =
          n.prefix ||
          ((index, b) => {
            const c = `${index}:${be(index, b)}`
            let d = c
            const f = de(index)
            return (
              f & 1 && (d += `;-ms-${c}`),
              f & 2 && (d += `;-moz-${c}`),
              f & 4 && (d += `;-webkit-${c}`),
              d
            )
          })),
        (o = new Map()),
        (s = new Uint16Array(R))
    },
    hydrate() {
      A && e()
      const { cssRules: n } = r.sheet
      for (let index = 0, { length: b } = n; index < b; ++index) {
        const c = n[index]
        c.type === 7 ? o.set(c.name, o.size) : l(c)
      }
    },
    css(n) {
      return A && e(), z(n, '', '', new Uint16Array(R)).slice(1)
    },
    keyframes(n) {
      A && e()
      let index
      return {
        toString() {
          if (!index) {
            let d = ''
            for (const b in n) {
              d += `${b}{`
              const f = n[b]
              for (const c in f) {
                const p = f[c]
                p != null && (d += k(c, p))
              }

              d += '}'
            }

            ;(index = `_${U(d)}`),
              o.has(index) || (r.insert(`@keyframes ${index}{${d}}`, o.size), o.set(index, o.size))
          }

          return index
        },
      }
    },
  }
}

const C = ye()
C.setup({})
const Y = C.setup;
  const K = C.hydrate;
  const q = C.css;
  const Se = C.keyframes
const Z = (r) => (t) => {
    const o = [t, new Error().stack.split('at ').pop()].join(' ')
    if (r.strict) throw o
    console.warn(o)
  };

  const $e = (r, t) => {
    t = t.split(':')
    const o = t.pop();
      const s = t;
      let e = T(r)(o)
    return (
      (!Object.keys(e)[0] || !Object.values(e)[0]) && Z(r)(`No translation for "${o}"`),
      s.reverse().forEach((a) => {
        const l = r.screens[a]
        l ? (e = { '@media': { [`(min-width: ${l})`]: e } }) : (e = { [`:${a}`]: e })
      }),
      e
    )
  };

  const J = (r, t = {}) => (o, s) => {
    const e = I(o, s);
      const a = {}
    return (t[e] =
      t[e] ||
      F(
        ...e.map(
          (l) => (
            a[l] && Z(r)(`Duplicate declaration of "${l}"`), (a[l] = !0), (t[l] = t[l] || $e(r, l))
          ),
        ),
      ))
  };

  const Q = (r) => F(P(F(N, r)), r);
  const X = (r = {}) => {
    const t = J(Q(r))
    return (o, ...s) => q(t(o, s))
  }

const ve = X()
export { Q as configure, ve as default, K as hydrate, J as process, Y as setup, X as themed }
