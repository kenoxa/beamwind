const mt = Object.create;
  const ne = Object.defineProperty;
  const pt = Object.getPrototypeOf;
  const ht = Object.prototype.hasOwnProperty;
  const bt = Object.getOwnPropertyNames;
  const xt = Object.getOwnPropertyDescriptor;
  const yt = (e) => ne(e, '__esModule', { value: !0 });
  const wt = (e, t) => () => (t || ((t = { exports: {} }), e(t.exports, t)), t.exports);
  const kt = (e, t, n) => {
    if ((yt(e), (t && typeof t == 'object') || typeof t == 'function'))
      for (const r of bt(t))
        !ht.call(e, r) &&
          r !== 'default' &&
          ne(e, r, { get: () => t[r], enumerable: !(n = xt(t, r)) || n.enumerable })
    return e
  };

  const Tt = (e) =>
    e && e.__esModule
      ? e
      : kt(ne(e != null ? mt(pt(e)) : {}, 'default', { value: e, enumerable: !0 }), e);
  const Ve = wt((ie) => {
    'use strict'
    const Et = /^(br|hy|us|wr|text-si|scroll-snap-t)/;
      const jt = /^(ap|us|tab-|border-e|margin-e|margin-s|padding-e|padding-s|border-sta)/;
      const Pt = /^(ap|br|hy|us|wr|mas|colu|clip-|box-de|font-k|text-e|font-fe|shape-i|text-or|text-si|border-e|margin-e|margin-s|padding-e|padding-s|border-sta|background-cl|scroll-snap-t|text-decoration-)/;
      const Dt = /^(pos|background-cl)/;
      const se = {}
    ;(ie.prefixProperty = function (e) {
      return se[e] ? se[e] : (se[e] = (Number(Et.test(e))) | (2 * jt.test(e)) | (4 * Pt.test(e)))
    }),
      (ie.prefixValue = function (e, t) {
        return Dt.test(e) ? t.replace(/(sticky|text)/, '-webkit-$1, $1') : t
      })
  });
  const Te = {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        'red-50': '#fef2f2',
        'red-100': '#fee2e2',
        'red-200': '#fecaca',
        'red-300': '#fca5a5',
        'red-400': '#f87171',
        'red-500': '#ef4444',
        'red-600': '#dc2626',
        'red-700': '#b91c1c',
        'red-800': '#991b1b',
        'red-900': '#7f1d1d',
        'yellow-50': '#fffbeb',
        'yellow-100': '#fef3c7',
        'yellow-200': '#fde68a',
        'yellow-300': '#fcd34d',
        'yellow-400': '#fbbf24',
        'yellow-500': '#f59e0b',
        'yellow-600': '#d97706',
        'yellow-700': '#b45309',
        'yellow-800': '#92400e',
        'yellow-900': '#78350f',
        'green-50': '#ecfdf5',
        'green-100': '#d1fae5',
        'green-200': '#a7f3d0',
        'green-300': '#6ee7b7',
        'green-400': '#34d399',
        'green-500': '#10b981',
        'green-600': '#059669',
        'green-700': '#047857',
        'green-800': '#065f46',
        'green-900': '#064e3b',
        'blue-50': '#eff6ff',
        'blue-100': '#dbeafe',
        'blue-200': '#bfdbfe',
        'blue-300': '#93c5fd',
        'blue-400': '#60a5fa',
        'blue-500': '#3b82f6',
        'blue-600': '#2563eb',
        'blue-700': '#1d4ed8',
        'blue-800': '#1e40af',
        'blue-900': '#1e3a8a',
        'indigo-50': '#eef2ff',
        'indigo-100': '#e0e7ff',
        'indigo-200': '#c7d2fe',
        'indigo-300': '#a5b4fc',
        'indigo-400': '#818cf8',
        'indigo-500': '#6366f1',
        'indigo-600': '#4f46e5',
        'indigo-700': '#4338ca',
        'indigo-800': '#3730a3',
        'indigo-900': '#312e81',
        'purple-50': '#f5f3ff',
        'purple-100': '#ede9fe',
        'purple-200': '#ddd6fe',
        'purple-300': '#c4b5fd',
        'purple-400': '#a78bfa',
        'purple-500': '#8b5cf6',
        'purple-600': '#7c3aed',
        'purple-700': '#6d28d9',
        'purple-800': '#5b21b6',
        'purple-900': '#4c1d95',
        'pink-50': '#fdf2f8',
        'pink-100': '#fce7f3',
        'pink-200': '#fbcfe8',
        'pink-300': '#f9a8d4',
        'pink-400': '#f472b6',
        'pink-500': '#ec4899',
        'pink-600': '#db2777',
        'pink-700': '#be185d',
        'pink-800': '#9d174d',
        'pink-900': '#831843',
      },
      spacing: {
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      durations: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1e3: '1000ms',
      },
      animation: {
        spin: ['1s linear infinite'],
        ping: ['1s cubic-bezier(0,0,0.2,1) infinite'],
        pulse: ['2s cubic-bezier(0.4,0,0.6,1) infinite'],
        bounce: ['1s infinite'],
      },
      borderColor: { DEFAULT: (e) => e('colors', 'gray-200', 'currentColor') },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      borderWidth: { DEFAULT: '1px', 0: '0px', 2: '2px', 4: '4px', 8: '8px' },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        sans:
          'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
        mono: 'ui-monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      height: {
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
      },
      inset: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      keyframes: {
        spin: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%,100%': { transform: 'scale(2)', opacity: '0' },
        },
        pulse: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.5' } },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': { transform: 'none', 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      lineHeight: {
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      maxWidth: {
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
        '7xl': '80rem',
        prose: '65ch',
      },
      opacity: {
        5: '0.05',
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
        95: '0.95',
      },
      order: {
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
      outline: { white: ['2px dotted white', '2px'], black: ['2px dotted black', '2px'] },
      ringColor: { DEFAULT: (e) => e('colors', 'blue-500', '#3b82f6') },
      ringOffsetWidth: { 0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
      ringWidth: { 0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px' },
      rotate: {
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
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
      skew: { 0: '0deg', 1: '1deg', 2: '2deg', 3: '3deg', 6: '6deg', 12: '12deg' },
      strokeWidth: { 0: '0', 1: '1', 2: '2' },
      transitionTimingFunction: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      translate: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      width: {
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
      },
      zIndex: { 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50' },
    },
  };
  const $e = () => ({ theme: Te });
  const ve = (e) => [
    ':root{-moz-tab-size:4;tab-size:4}',
    'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}',
    'button{background-color:transparent;background-image:none}',
    "button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}",
    'button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}',
    'fieldset{margin:0;padding:0}',
    'ol,ul{list-style:none;margin:0;padding:0}',
    `html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:${e(
      'fontFamily',
      'sans',
      'ui-sans-serif,system-ui,sans-serif',
    )}}`,
    'body{margin:0;font-family:inherit;line-height:inherit}',
    `*,::before,::after{box-sizing:border-box;border:0 solid ${e(
      'borderColor',
      'DEFAULT',
      'currentColor',
    )}}`,
    'hr{height:0;color:inherit;border-top-width:1px}',
    'img{border-style:solid}',
    'textarea{resize:vertical}',
    `input::placeholder,textarea::placeholder{color:${e(
      'placeholderColor',
      'DEFAULT',
      '#a1a1aa',
    )}}`,
    'button,[role="button"]{cursor:pointer}',
    'table{text-indent:0;border-color:inherit;border-collapse:collapse}',
    'h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}',
    'a{color:inherit;text-decoration:inherit}',
    'button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;margin:0;padding:0;line-height:inherit;color:inherit}',
    'button,select{text-transform:none}',
    '::-moz-focus-inner{border-style:none;padding:0}',
    ':-moz-focusring{outline:1px dotted ButtonText}',
    ':-moz-ui-invalid{box-shadow:none}',
    'legend{padding:0}',
    'progress{vertical-align:baseline}',
    '::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}',
    '[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}',
    '::-webkit-search-decoration{-webkit-appearance:none}',
    '::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}',
    'summary{display:list-item}',
    'abbr[title]{text-decoration:underline dotted}',
    'b,strong{font-weight:bolder}',
    `pre,code,kbd,samp{font-family:${e(
      'fontFamily',
      'mono',
      'ui-monospace,monospace',
    )};font-size:1em}`,
    'sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}',
    'sub{bottom:-0.25em}',
    'sup{top:-0.5em}',
    'img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}',
    'img,video{max-width:100%;height:auto}',
  ];
  const Ce = () => ({
    init(e, t) {
      ve(t).forEach(e)
    },
  });
  const re = (e, t) => typeof e === t;
  const b = (e) => re(e, 'string');
  const B = (e) => e != null && re(e, 'object');
  const k = Array.isArray;
  const v = (e) => re(e, 'function');
  const c = (e, t = '-') => e.join(t);
  const P = (e, t) => c(e.filter(Boolean), t);
  const o = (e, t = 1) => e.slice(t);
  const Re = (e) => e;
  const F = () => {
    if (typeof Map == 'function') return new Map()
    const e = Object.create(null)
    return {
      has(t) {
        return t in e
      },
      get(t) {
        return e[t]
      },
      set(t, n) {
        e[t] = n
      },
    }
  };

  const $t = (e, t) => {
    const n = [e[0]]
    for (let r = 0; r < t.length; )
      b(t[r]) ? (n[n.length - 1] += t[r] + e[++r]) : (t[r] && n.push(t[r]), n.push(e[++r]))
    return n
  };

  const oe = (e) => (k(e[0]) && k(e[0].raw) ? $t(e[0], o(e)) : e);
  const Se = (e, t) => {
    let n = e.length
    if (n === 0) return 0
    for (let r = 0; r < n; ) {
      const l = (n + r) >> 1
      e[l] <= t ? (r = l + 1) : (n = l)
    }

    return n
  };

  const T = (e, t) => (e && t ? { ...e, ...t } : e || t || {});
  let Ee;
  const vt = {
    sticky: '@supports ((position: -webkit-sticky) or (position:sticky))',
    'motion-reduce': '@media (prefers-reduced-motion:reduce)',
    'motion-safe': '@media (prefers-reduced-motion:no-preference)',
  };
  const H = (e) => e.slice(0, 6) === 'group-';
  const je = (e, t) =>
    (Ee = t('screens', e)) ? `@media (min-width: ${Ee})` : vt[e] || (H(e) && e) || `:${e}`;
  const Pe =
    (typeof CSS != 'undefined' && CSS.escape) ||
    ((e) => e.replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '\\$&'));
  const Ct = (e) => e[0] === ':';
  const M = (e) => e[0] === '@';
  const G = (e, t) => {
    const n = c(t, ':')
    return (n && n + ':') + e
  };

  const Rt = (e, t, n, r) =>
    n(
      t.reduce(
        (l, s) => (H(s) ? `.${Pe(r('group'))}:${o(s, 6)} ` : '') + l + (Ct(s) ? s : ''),
        '.' + Pe(e),
      ),
    );
  const De = (e, t, n, r, l) =>
    t.reduceRight((s, u) => (M(u) ? `${u}{${s}}` : s), `${Rt(e, t, r, l)}{${n}}`);
  const Oe = typeof window != 'undefined';
  const ze = '__beamwind';
  const St = () => {
    let e = document.getElementById(ze)
    return e || ((e = document.createElement('style')), (e.id = ze), document.head.appendChild(e))
  };

  const Ie = ({ target: e = [] } = {}) => ({ target: e, insert: (t, n) => e.splice(n, 0, t) });
  const Y = ({ nonce: e, target: t = St().sheet } = {}) => (
    e && (t.ownerNode.nonce = e), { target: t, insert: t.insertRule.bind(t) }
  );
  const X = () => ({ target: null, insert: () => {} });
  const Ae = { breakpoints: (e) => Object.keys(e).reduce((t, n) => ((t['screen-' + n] = e[n]), t), {}) };
  var Fe = (e, t) => {
    const n = F();
      const r = (s, u) => {
        const f = s[u]
        return v(f) ? f(l, Ae) : f
      };

      const l = (s, u, f) => {
        let y = n.get(s)
        if ((y || ((y = T(r(e, s), r(t, s))), n.set(s, y)), u)) {
          let w = y[u]
          return v(w) && (w = w(l, Ae)), w == null ? f : w
        }

        return y
      }

    return (
      (l.extend = (s) => (
        (s = v(s) ? s(l) : s),
        Fe(
          T(e, s),
          s && s.extend
            ? Object.keys(s.extend).reduce((u, f) => ((u[f] = T(u[f], s.extend[f])), u), T({}, t))
            : t,
        )
      )),
      l
    )
  };

  const He = Fe(
    {
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
      colors: { transparent: 'transparent', current: 'currentColor' },
      durations: {},
      spacing: { px: '1px', 0: '0px' },
      animation: { none: 'none' },
      backgroundColor: (e) => e('colors'),
      backgroundImage: { none: 'none' },
      backgroundOpacity: (e) => e('opacity'),
      borderColor: (e) => ({ ...e('colors'), DEFAULT: 'currentColor' }),
      borderOpacity: (e) => e('opacity'),
      borderRadius: { none: '0px', DEFAULT: '0.25rem', full: '9999px' },
      borderWidth: { DEFAULT: '1px' },
      boxShadow: { none: '0 0 transparent' },
      divideColor: (e) => e('borderColor'),
      divideOpacity: (e) => e('borderOpacity'),
      divideWidth: (e) => e('borderWidth'),
      fill: { current: 'currentColor' },
      flex: { 1: '1 1 0%', auto: '1 1 auto', initial: '0 1 auto', none: 'none' },
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,sans-serif',
        serif: 'ui-serif,serif',
        mono: 'ui-monospace,monospace',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      gap: (e) => e('spacing'),
      gradientColorStops: (e) => e('colors'),
      height: (e) => ({ auto: 'auto', ...e('spacing'), full: '100%', screen: '100vh' }),
      inset: (e) => ({ auto: 'auto', ...e('spacing'), full: '100%' }),
      keyframes: {},
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      margin: (e) => ({ auto: 'auto', ...e('spacing') }),
      maxHeight: (e) => ({ ...e('spacing'), full: '100%', screen: '100vh' }),
      maxWidth: (e, { breakpoints: t }) => ({
        none: 'none',
        0: '0rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        ...t(e('screens')),
      }),
      minHeight: { 0: '0px', full: '100%', screen: '100vh' },
      minWidth: { 0: '0px', full: '100%', min: 'min-content', max: 'max-content' },
      opacity: { 0: '0', 25: '0.25', 50: '0.5', 75: '0.75', 100: '1' },
      order: { first: '-9999', last: '9999', none: '0' },
      outline: { none: ['2px solid transparent', '2px'] },
      padding: (e) => e('spacing'),
      placeholderColor: (e) => e('colors'),
      placeholderOpacity: (e) => e('opacity'),
      ringColor: (e) => ({ DEFAULT: '#3b82f6', ...e('colors') }),
      ringOffsetColor: (e) => e('colors'),
      ringOffsetWidth: {},
      ringOpacity: (e) => ({ DEFAULT: '0.5', ...e('opacity') }),
      ringWidth: { DEFAULT: '3px' },
      rotate: {},
      scale: {},
      skew: {},
      space: (e) => e('spacing'),
      stroke: { current: 'currentColor' },
      strokeWidth: {},
      textColor: (e) => e('colors'),
      textOpacity: (e) => e('opacity'),
      transitionDuration: (e) => ({ DEFAULT: '150ms', ...e('durations') }),
      transitionDelay: (e) => e('durations'),
      transitionProperty: {
        none: 'none',
        all: 'all',
        DEFAULT: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
        colors: 'background-color,border-color,color,fill,stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform',
      },
      transitionTimingFunction: { DEFAULT: 'cubic-bezier(0.4,0,0.2,1)' },
      translate: (e) => ({ ...e('spacing'), full: '100%' }),
      width: (e) => ({
        auto: 'auto',
        ...e('spacing'),
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
      }),
      zIndex: { auto: 'auto' },
    },
    {},
  );
  const K = Tt(Ve());
  const Ue = (e, t) => {
    const n = `${e}:${K.prefixValue(e, t)}`;
      let r = n;
      const l = K.prefixProperty(e)
    return (
      l & 1 && (r += `;-ms-${n}`), l & 2 && (r += `;-moz-${n}`), l & 4 && (r += `;-webkit-${n}`), r
    )
  };

  const Le = (e, t) => `${e}:${t}`;
  const Ot =
    Math.imul ||
    ((e, t) => {
      t = Math.trunc(t)
      let n = (e & 4194303) * t
      return e & 4290772992 && (n += Math.trunc((e & 4290772992) * t)), Math.trunc(n)
    });
  const q = (e) => {
    let t = 9
    for (let n = e.length; n--; ) t = Ot(t ^ e.charCodeAt(n), 1597334677)
    return '_' + ((t ^ (t >>> 9)) >>> 0).toString(36)
  };

  let V;
  let ae;
  const zt = (e) =>
    (ae = /\(\s*min-width:\s*(\d+(?:.\d+)?)(p)?/.exec(e)) ? Number(ae[1]) / (ae[2] ? 15 : 1) / 10 : 0;
  const ce = (e) => {
    V = 0
    for (let t = e.length; t--; ) ~'-:,'.indexOf(e[t]) && ++V
    return V
  };

  const We = [
    'rst',
    'st',
    'd',
    'en',
    'nk',
    'sited',
    'pty',
    'ecked',
    'oup-h',
    'oup-f',
    'cus-w',
    'ver',
    'cus',
    'cus-v',
    'tive',
    'sable',
  ];
  const It = (e) => (~(V = We.indexOf(e.slice(3, 8))) ? V : We.length);
  const At = (e, t) => e | (M(t) ? 0 : 1 << It(H(t) ? ':' + t : t));
  const Ft = /^(?:(border-(?:[tlbr].{2,4}-)?(?:w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/;
  const Ht = (e) => {
    const t = e[0] === '-' ? o(e, e.indexOf('-', 1) + 1) : e;
      const n = Ft.exec(t)
    return ce(t) + (n ? Number(Boolean(n[1])) || -Boolean(n[2]) : 0) + 1
  };

  const Vt = (e) => (e[0] === '-' ? 0 : Ht(e));
  const Ne = (e) => Math.max(0, 15 - e);
  const Ut = (e, t) => Ne(ce(t));
  const Lt = (e) => Ne(Object.keys(e).filter((t) => e[t]).length);
  const _e = (e, t) => Object.keys(e).reduce((n, r) => (e[r] ? Math.max(n, t(r, e[r])) : n), 0);
  const Be = (e, t) => {
    const n = zt(e[0] || '')
    return (
      (((n & 31) << 21) |
        ((ce(c((n ? o(e) : e).filter(M), ';')) & 15) << 17) |
        (e.reduce(At, 0) & 131071)) *
        (1 << 12) +
      (((Lt(t) & 15) << 8) | ((_e(t, Vt) & 15) << 4) | (_e(t, Ut) & 15))
    )
  };

  const Me = (e) => (t, n, r, l) => {
    if (t) {
      const s = n && e(n)
      if (s && s.length > 0) return s.reduce((u, f) => ((u[P([r, f, l])] = t), u), {})
    }
  };

  const Wt = {
    t: ['top-left', 'top-right'],
    r: ['top-right', 'bottom-right'],
    b: ['bottom-left', 'bottom-right'],
    l: ['bottom-left', 'top-left'],
    tl: ['top-left'],
    tr: ['top-right'],
    bl: ['bottom-left'],
    br: ['bottom-right'],
  };
  const Ge = Me((e) => Wt[e]);
  const Nt = { x: 'lr', y: 'tb' };
  const Ye = { t: 'top', r: 'right', b: 'bottom', l: 'left' };
  const U = (e) => {
    const t = (Nt[e] || e || '')
      .split('')
      .sort()
      .reduce((n, r) => {
        if (n && Ye[r]) return n.push(Ye[r]), n
      }, [])
    if (t && t.length > 0) return t
  };

  const D = Me(U);
  let index;
  const _t = (e) => e[0].toUpperCase() + o(e);
  const le = (e, t) => Math.round(Number.parseInt(e, 16) * t);
  const Xe = (e, t) => {
    if (e && e[0] === '#') {
      const n = (e.length - 1) / 3;
        const r = [17, 1, 0.062272][n - 1]
      return `rgba(${le(e.substr(1, n), r)},${le(e.substr(1 + n, n), r)},${le(
        e.substr(1 + 2 * n, n),
        r,
      )},var(--${t}))`
    }

    return e
  };

  const L = (e, t, n, r) =>
    n
      ? {
          [`--${r(t + '-opacity')}`]: '1',
          [e]: (index = Xe(n, r(t + '-opacity'))) && index !== n ? [n, index] : n,
        }
      : void 0;
  const W = (e) => ({ [e[0]]: c(o(e)) });
  const C = (e) => ({ display: c(e) });
  const N = (e) => ({ position: e[0] });
  const O = (e) => ({ 'text-transform': e[0] });
  const z = (e) => ({ 'text-decoration': c(e) });
  const J = (e, t) => ({ [e[0]]: t('inset', o(e)) });
  const Ke = (e, t, n) => {
    switch (e[1]) {
      case 'solid':
      case 'dashed':
      case 'dotted':
      case 'double':
      case 'none':
        return { 'border-style': e[1] }
      case 'collapse':
      case 'separate':
        return { 'border-collapse': e[1] }
      case 'opacity':
        return { [`--${n(e[0] + '-opacity')}`]: t('borderOpacity', o(e, 2)) }
    }

    return (index = t(`${e[0]}Width`, o(e), !0))
      ? { 'border-width': index }
      : L('border-color', e[0], t(`${e[0]}Color`, o(e)), n)
  };

  const qe = (e, t) =>
    (index = { w: 'width', h: 'height' }[e[1]]) && { [`${e[0]}-${index}`]: t(`${e[0]}${_t(index)}`, o(e, 2)) };
  const Je = (e) => (t, n) => (t[0][1] ? D(n(e, o(t)), t[0][1], e) : { [e]: n(e, o(t)) });
  const S = Je('padding');
  const E = Je('margin');
  const Qe = (e) => (t) => {
    switch (t[1]) {
      case 'auto':
        return { [`grid-${e}`]: 'auto' }
      case 'span':
        return t[2] && { [`grid-${e}`]: t[2] === 'full' ? '1 / -1' : `span ${t[2]} / span ${t[2]}` }
      case 'start':
      case 'end':
        return t.length === 3 && { [`grid-${e}-${t[1]}`]: t[2] }
    }
  };

  const de = (e) => (t) => {
    switch (t[1]) {
      case 'start':
      case 'end':
        return { [e]: `flex-${t[1]}` }
      case 'between':
      case 'around':
        return { [e]: `space-${t[1]}` }
    }

    return { [e]: t[1] }
  };

  const Ze = {
    shadow: (e, t, { tag: n }) =>
      (index = t('boxShadow', o(e))) && {
        [`--${n('shadow')}`]: index,
        'box-shadow': [
          index,
          `var(--${n('ring-offset-shadow')},0 0 transparent),var(--${n(
            'ring-shadow',
          )},0 0 transparent),var(--${n('shadow')})`,
        ],
      },
    ring(e, t, { tag: n }) {
      switch (e[1]) {
        case 'inset':
          return { [`--${n('ring-inset')}`]: 'inset' }
        case 'opacity':
          return { [`--${n('ring-opacity')}`]: t('ringOpacity', o(e, 2)) }
        case 'offset':
          return (index = t('ringOffsetWidth', o(e, 2), !0))
            ? { [`--${n('ring-offset-width')}`]: index }
            : { [`--${n('ring-offset-color')}`]: t('ringOffsetColor', o(e, 2)) }
      }

      return (index = t('ringWidth', o(e), !0))
        ? {
            [`--${n('ring-offset-shadow')}`]: `var(--${n(
              'ring-inset',
            )},/*!*/ /*!*/) 0 0 0 var(--${n('ring-offset-width')},0px) var(--${n(
              'ring-offset-color',
            )},#fff)`,
            [`--${n('ring-shadow')}`]: `var(--${n(
              'ring-inset',
            )},/*!*/ /*!*/) 0 0 0 calc(${index} + var(--${n('ring-offset-width')},0px)) var(--${n(
              'ring-color',
            )},rgba(59,130,246,0.5))`,
            'box-shadow': `var(--${n('ring-offset-shadow')}),var(--${n('ring-shadow')}),var(--${n(
              'shadow',
            )},0 0 transparent)`,
          }
        : {
            [`--${n('ring-opacity')}`]: '1',
            [`--${n('ring-color')}`]: Xe(t('ringColor', o(e)), n('ring-opacity')),
          }
    },
    duration: (e, t) => ({ 'transition-duration': t('transitionDuration', o(e)) }),
    delay: (e, t) => ({ 'transition-delay': t('transitionDelay', o(e)) }),
    origin: (e) => ({ 'transform-origin': c(o(e), ' ') }),
    cursor: W,
    select: (e) => ({ 'user-select': e[1] }),
    transform: (e, t, { tag: n }) => ({
      transform: `translateX(var(--${n('transform-translate-x')},0)) translateY(var(--${n(
        'transform-translate-y',
      )},0)) rotate(var(--${n('transform-rotate')},0)) skewX(var(--${n(
        'transform-skew-x',
      )},0)) skewY(var(--${n('transform-skew-y')},0)) scaleX(var(--${n(
        'transform-scale-x',
      )},1)) scaleY(var(--${n('transform-scale-y')},1))`,
    }),
    rotate: (e, t, { tag: n }) =>
      (index = t('rotate', o(e))) && { [`--${n('transform-rotate')}`]: index, transform: `rotate(${index})` },
    scale: (e, t, { tag: n }) =>
      (index = t('scale', [e[2] || e[1]])) && {
        [`--${n('transform-scale-x')}`]: e[1] !== 'y' && index,
        [`--${n('transform-scale-y')}`]: e[1] !== 'x' && index,
        transform: `scale${e[2] ? e[1].toUpperCase() : ''}(${index})`,
      },
    translate: (e, t, { tag: n }) =>
      (index = t('translate', o(e, 2))) && {
        [`--${n('transform-translate-x')}`]: e[1] !== 'y' && index,
        [`--${n('transform-translate-y')}`]: e[1] !== 'x' && index,
        transform: `translate${e[1].toUpperCase()}(${index})`,
      },
    skew: (e, t, { tag: n }) =>
      (index = t('skew', o(e, 2))) && {
        [`--${n('transform-skew-x')}`]: e[1] !== 'y' && index,
        [`--${n('transform-skew-y')}`]: e[1] !== 'x' && index,
        transform: `skew${e[1].toUpperCase()}(${index})`,
      },
    'bg-gradient': (e, t, { tag: n }) =>
      (index = e[1] === 'to' && (index = U(e[2])) ? 'to ' + c(index, ' ') : t('rotate', o(e))) && {
        'background-image': `linear-gradient(${index},var(--${n('gradient-stops')},var(--${n(
          'gradient-from',
        )},transparent),var(--${n('gradient-to')},transparent)))`,
      },
    from: (e, t, { tag: n }) =>
      (index = t('gradientColorStops', o(e))) && { [`--${n('gradient-from')}`]: index },
    via: (e, t, { tag: n }) =>
      (index = t('gradientColorStops', o(e))) && {
        [`--${n('gradient-stops')}`]: `var(--${n('gradient-from')},transparent),${index},var(--${n(
          'gradient-to',
        )},transparent)`,
      },
    to: (e, t, { tag: n }) =>
      (index = t('gradientColorStops', o(e))) && { [`--${n('gradient-to')}`]: index },
    'pointer-events-none': { 'pointer-events': 'none' },
    'pointer-events-auto': { 'pointer-events': 'auto' },
    tracking: (e, t) => ({ 'letter-spacing': t('letterSpacing', o(e)) }),
    leading: (e, t) => ({ 'line-height': t('lineHeight', o(e)) }),
    align: (e) => ({ 'vertical-align': c(o(e)) }),
    whitespace: (e) => ({ 'white-space': c(o(e)) }),
    z: (e, t) => ({ 'z-index': t('zIndex', o(e)) }),
    gap: (e, t) => ({ gap: t('gap', o(e)) }),
    stroke: (e, t) =>
      (index = t('stroke', o(e), !0)) ? { stroke: index } : { 'stroke-width': t('strokeWidth', o(e)) },
    fill: (e, t) => ({ fill: t('fill', o(e)) }),
    outline: (e, t) => (index = t('outline', o(e))) && { outline: index[0], 'outline-offset': index[1] },
    appearance: W,
    opacity: (e, t) => ({ opacity: t('opacity', o(e)) }),
    ease: (e, t) => ({ 'transition-timing-function': t('transitionTimingFunction', o(e)) }),
    break(e) {
      switch (e[1]) {
        case 'normal':
          return { 'word-break': 'normal', 'overflow-wrap': 'normal' }
        case 'words':
          return { 'overflow-wrap': 'break-word' }
        case 'all':
          return { 'word-break': 'break-all' }
      }
    },
    w: (e, t) => ({ width: t('width', o(e)) }),
    h: (e, t) => ({ height: t('height', o(e)) }),
    underline: z,
    'no-underline': z(['none']),
    'line-through': z,
    'text-underline': z(['underline']),
    'text-no-underline': z(['none']),
    'text-line-through': z(['line', 'through']),
    uppercase: O,
    lowercase: O,
    capitalize: O,
    'normal-case': O(['none']),
    'text-normal-case': O(['none']),
    text(e, t, { tag: n }) {
      switch (e[1]) {
        case 'left':
        case 'center':
        case 'right':
        case 'justify':
          return { 'text-align': e[1] }
        case 'uppercase':
        case 'lowercase':
        case 'capitalize':
          return O(o(e))
        case 'opacity':
          return { [`--${n('text-opacity')}`]: t('textOpacity', o(e, 2)) }
      }

      const r = t('fontSize', o(e), !0)
      return r
        ? b(r)
          ? { 'font-size': r }
          : {
              'font-size': r[0],
              'line-height': b(r[1]) ? r[1] : r[1].lineHeight,
              'letter-spacing': r[1].letterSpacing,
            }
        : L('color', 'text', t('textColor', o(e)), n)
    },
    bg(e, t, { tag: n }) {
      switch (e[1]) {
        case 'fixed':
        case 'local':
        case 'scroll':
          return { 'background-attachment': c(o(e), ',') }
        case 'bottom':
        case 'center':
        case 'left':
        case 'right':
        case 'top':
          return { 'background-position': c(o(e), ' ') }
        case 'no':
          return e[2] === 'repeat' && { 'background-repeat': c(o(e)) }
        case 'auto':
        case 'cover':
        case 'contain':
          return { 'background-size': e[1] }
        case 'repeat':
          switch (e[2]) {
            case 'x':
            case 'y':
              return { 'background-repeat': c(o(e)) }
          }

          return { 'background-repeat': e[2] || e[1] }
        case 'opacity':
          return { [`--${n('bg-opacity')}`]: t('backgroundOpacity', o(e, 2)) }
      }

      return T(
        L('background-color', 'bg', t('backgroundColor', o(e)), n),
        L('color', 'text', t('textColor', e[1] === 'on' ? o(e, 2) : ['on'].concat(o(e)), !0), n),
      )
    },
    rounded: (e, t) =>
      Ge(t('borderRadius', o(e, 2), !0), e[1], 'border', 'radius') || {
        'border-radius': t('borderRadius', o(e)),
      },
    'transition-none': { 'transition-property': 'none' },
    transition: (e, t) => ({
      transition: P(
        [
          t('transitionProperty', o(e)),
          t('transitionDuration', []),
          t('transitionTimingFunction', []),
        ],
        ' ',
      ),
    }),
    flex(e, t) {
      switch (e[1]) {
        case 'row':
        case 'col':
          return { 'flex-direction': c(e[1] === 'col' ? ['column'].concat(o(e, 2)) : o(e, 1)) }
        case 'nowrap':
        case 'wrap':
          return { 'flex-wrap': c(o(e)) }
        case 'grow':
        case 'shrink':
          return { [`flex-${e[1]}`]: e[2] || '1' }
      }

      return (index = t('flex', o(e), !0)) ? { flex: index } : C(e)
    },
    grid(e) {
      switch (e[1]) {
        case 'cols':
        case 'rows':
          return (
            e.length > 2 && {
              [`grid-template-${e[1] === 'cols' ? 'columns' : e[1]}`]:
                e.length === 3 && Number(e[2]) ? `repeat(${e[2]},minmax(0,1fr))` : c(o(e, 2), ' '),
            }
          )
        case 'flow':
          return (
            e.length > 2 && {
              'grid-auto-flow': c(e[2] === 'col' ? ['column'].concat(o(e, 3)) : o(e, 2), ' '),
            }
          )
      }

      return C(e)
    },
    auto(e) {
      switch (e[1]) {
        case 'cols':
        case 'rows':
          return (
            (index =
              e.length === 3
                ? { auto: 'auto', min: 'min-content', max: 'max-content', fr: 'minmax(0,1fr)' }[
                    e[2]
                  ] || `minmax(0,${e[2]})`
                : e.length > 3 && `minmax(${c(o(e, 2), ',')})`) && {
              [`grid-auto-${e[1] === 'cols' ? 'columns' : 'rows'}`]: index,
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
    hidden: C(['none']),
    inline: C,
    block: C,
    table(e) {
      switch (e[1]) {
        case 'auto':
        case 'fixed':
          return { 'table-layout': e[1] }
      }

      return C(e)
    },
    flow: C,
    d: (e) => C(o(e)),
    static: N,
    fixed: N,
    absolute: N,
    relative: N,
    sticky: N,
    visible: { visibility: 'visible' },
    invisible: { visibility: 'hidden' },
    antialiased: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    truncate: { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' },
    resize: (e) =>
      e.length <= 2 && { resize: { x: 'vertical', y: 'horizontal' }[e[1]] || e[1] || 'both' },
    clearfix: ['::after', { content: '""', display: 'table', clear: 'both' }],
    object(e) {
      switch (e[1]) {
        case 'contain':
        case 'cover':
        case 'fill':
        case 'none':
          return { 'object-fit': e[1] }
        case 'scale':
          return { 'object-fit': c(o(e)) }
      }

      return { 'object-position': c(o(e), ' ') }
    },
    top: J,
    right: J,
    bottom: J,
    left: J,
    inset: (e, t) =>
      (index = U(e[1]))
        ? D(t('inset', o(e, 2)), e[1])
        : (index = t('inset', o(e))) && { top: index, right: index, bottom: index, left: index },
    items(e) {
      switch (e[1]) {
        case 'start':
        case 'end':
          return { 'align-items': `flex-${e[1]}` }
      }

      return { 'align-items': e[1] }
    },
    content: de('align-content'),
    justify: de('justify-content'),
    self: de('align-self'),
    order: (e, t) => ({ order: t('order', o(e)) }),
    col: Qe('column'),
    row: Qe('row'),
    'subpixel-antialiased': { '-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto' },
    list(e) {
      switch (e[1]) {
        case 'inside':
        case 'outside':
          return { 'list-style-position': e[1] }
      }

      return { 'list-style-type': c(o(e)) }
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
    box: (e) => ({ 'box-sizing': `${e[1]}-box` }),
    float: W,
    clear: W,
    overflow(e) {
      switch (e[1]) {
        case 'ellipsis':
        case 'clip':
          return { 'text-overflow': e[1] }
      }

      return e[2] ? { [`overflow-${e[1]}`]: e[2] } : W(e)
    },
    p: S,
    py: S,
    px: S,
    pt: S,
    pr: S,
    pb: S,
    pl: S,
    m: E,
    my: E,
    mx: E,
    mt: E,
    mr: E,
    mb: E,
    ml: E,
    italic: { 'font-style': 'italic' },
    'not-italic': { 'font-style': 'normal' },
    'font-italic': { 'font-style': 'italic' },
    'font-not-italic': { 'font-style': 'normal' },
    font: (e, t) =>
      (index = t('fontFamily', o(e), !0))
        ? { 'font-family': index }
        : { 'font-weight': t('fontWeight', o(e)) },
    space: (e, t) =>
      (index = { x: 'l', y: 't' }[e[1]]) && [
        '>:not([hidden])~:not([hidden])',
        D(t('space', o(e, 2)), index, 'margin'),
      ],
    border: (e, t, { tag: n }) =>
      U(e[1]) ? D(t('borderWidth', o(e, 2)), e[1], 'border', 'width') : Ke(e, t, n),
    divide: (e, t, { tag: n }) =>
      (index = (index = { x: 'l', y: 't' }[e[1]])
        ? D(t('divideWidth', o(e, 2)), index, 'border', 'width')
        : Ke(e, t, n)) && ['>:not([hidden])~:not([hidden])', index],
    placeholder: (e, t, { tag: n }) =>
      (index =
        e[1] === 'opacity'
          ? { [`--${n('placeholder-opacity')}`]: t('placeholderOpacity', o(e, 2)) }
          : L('color', 'placeholder', t('placeholderColor', o(e)), n)) && ['::placeholder', index],
    min: qe,
    max: qe,
    animate: (e, t, { keyframes: n }) => {
      const r = t('animation', (index = o(e)))
      return r && { animation: b(r) ? r : `${n(r[1] || c(index))} ${r[0]}` }
    },
  };
  const et = (e) => ({
    unknown(t, n, r) {
      r || e(`No theme value found for ${t}[${JSON.stringify(c(n) || 'DEFAULT')}]`)
    },
    warn(t, n) {
      e((n ? `[${n}] ` : '') + t)
    },
  });
  const Q = et((e) => console.warn(e));
  const tt = et((e) => {
    throw new Error(e)
  });
  const nt = (e) => {
    let t = He;
      let n = Ze;
      let r;
      let l;
      const s = [];
      let u = Ue;
      let f = q;
      let y = Q;
      const w = F();
      const he = F();
      const te = [];
      const be = (a) =>
        (k(a) ? a : [a]).forEach(
          ({
            theme: d,
            plugins: g,
            init: m,
            injector: p,
            nonce: x = l,
            prefix: $ = u,
            hash: R = f,
            mode: ft = y,
          } = {}) => {
            if (p && te.length > 0)
              throw new Error('Changing the injector after first use is not supported')
            d && (t = t.extend(d)),
              (n = T(n, g)),
              m && s.push(m),
              (r = p || r),
              (l = x),
              (u = $),
              (f = R),
              (y = ft)
          },
        );
      const ut = (a, d) =>
        k(d)
          ? c(
              d.filter(Boolean).map((g) => u(a, g)),
              ';',
            )
          : u(a, d);
      const xe = (a) => Object.keys(a).reduce((d, g) => (a[g] ? (d && d + ';') + ut(g, a[g]) : d), '');
      const gt = (a) => je(a, t);
      const ye = (a) => (f ? f(a) : a);
      const we = (a, d) => {
        r || (r = Oe ? Y({ nonce: l }) : X())
        const g = Se(te, d)
        try {
          r.insert(a, g), te.splice(g, 0, d)
        } catch (error) {
          ;/:-[mwo]/.test(a) || y.warn(error.message)
        }
      };

      const ke = (a, d, g, m, p) => {
        he.has(d) ||
          (s.length && (s.forEach((x) => x(($) => we($, 0), t)), (s.length = 0)),
          we(g, Be(m, p)),
          he.set(d, !0)),
          w.set(a, d)
      }

    return (
      be(e),
      {
        t: (a, d, g) => {
          const m = k(d) ? d : [d];
            const p = t(a, c(m) || 'DEFAULT')
          return p == null ? y.unknown(a, m, g, t) : p
        },
        p: (a) => n[a],
        a: ye,
        r: (a, d, g) => t(a, d, g),
        g: (a, d) => w.get(G(a, d)),
        s: (a, d, g) => w.set(G(a, d), g),
        i(a, d, g, m = Re) {
          const p = G(a, d);
            let x = w.get(p)
          if (!x) {
            const $ = d.map(gt);
              const R = xe(g)
            ;(x = f ? f(c([c(d, '\0'), m(''), R], '\0')) : p), ke(p, x, De(x, $, R, m, ye), $, g)
          }

          return x
        },
        k(a, d) {
          const g = '\0' + a;
            let m = w.get(g)
          if (!m) {
            const p = Object.keys(d).reduce(($, R) => `${$}${R}{${xe(d[R])}}`, '')
            m = f ? f(p) : a
            const x = `@keyframes ${m}{${p}}`
            ke(g, m, x, [x], {})
          }

          return m
        },
        c: be,
        w(a, d) {
          y.warn(d, a)
        },
      }
    )
  };

  let ue;
  let h;
  const index_ = [];
  const I = [];
  const Z = [];
  const rt = (e, t, n) => {
    const r = h.t(e, t, n)
    return ue && r && b(r) ? `calc(${r} * -1)` : r
  };

  const ot = (e, t) => h.k(e, t || h.t('keyframes', e) || {});
  const Bt = (e, t, n) => {
    const r = I.length
    ee(), b(n) ? ge(n) : n(it), _(), h.s(e, t, c(o(I, r), ' '))
  };

  const st = (e, t, n) => {
    if (v(n) || b(n)) return !Bt(e, t, n)
    let r
    if ((k(n) && ((r = n[0]), (n = n[1])), B(n)))
      return I.push(h.i(e, t, n, b(r) ? (l) => l + r : r))
  };

  const Mt = (e, t) => {
    const n = (e === 'group' && h.a(e)) || h.g(e, t)
    if (n != null) return n && I.push(n)
    let r = e
    ;(ue = ''), r[0] === '-' && ((ue = '-'), (r = o(r)))
    let l = r.split('-');
      let s
    for (let u = l.length; u; u--) {
      const f = c(l.slice(0, u))
      if (((s = h.p(f)), s)) {
        ;(l = o(l, u)), l.unshift(f)
        break
      }
    }

    st(e, t, v(s) ? s(l, rt, { keyframes: ot, tag: h.a }) : s) ||
      h.w(e, s ? `Plugin "${l[0]}" had no result` : `No plugin for "${r}" found`)
  };

  const fe = (e) => {
    e.length = 0
  };

  const at = (e) => (t) => (t && e(t), '');
  var ee = () => {
    index_.push('')
  };

  var _ = (e) => {
    let t
    for (; (t = index_.pop()); );
    e && t != null && index_.push(t)
  };

  const ct = at((e) => {
    index_.push(e)
  });
  const lt = at((e) => {
    const t = P(Z);
      const n = e === '&' ? t : (t && t + '-') + e
    n && Mt(n, index_.filter(Boolean))
  });
  var ge = (e, t) => {
    let n;
      let r = ''
    for (let l = 0; l < e.length; )
      switch ((n = e[l++])) {
        case ':':
          r = ct(r)
          break
        case '(':
          Z.push(r), (r = ''), ee()
          break
        case ')':
        case ' ':
        case '	':
        case `
`:
        case '\r':
          r ? ((r = lt(r)), _(n !== ')')) : n === ')' && _(), n === ')' && Z.pop()
          break
        default:
          r += n
      }

    t ? ct(r) : lt(r)
  };

  const me = (e) => {
    e && (ee(), it(e), _())
  };

  const Gt = (e, t) => {
    if (t) {
      ee()
      const n = b(t) || k(t) || B(t)
      ge(e, n), n && me(t), _()
    }
  };

  let Yt = 0;
  var it = (e) => {
    b(e)
      ? ge(e)
      : k(e)
      ? e.forEach(me)
      : v(e)
      ? st(
          `__${e.name}_${(++Yt).toString(36)}`,
          index_.filter(Boolean),
          e(rt, { keyframes: ot, tag: h.a }),
        )
      : B(e) &&
        Object.keys(e).forEach((t) => {
          Gt(t, e[t])
        })
  };

  const dt = (e, t) => {
    if (h) throw new Error('There is already an active context')
    ;(h = t), fe(I), fe(index_), fe(Z)
    try {
      e.forEach(me)
    } finally {
      h = void 0
    }

    return c(I, ' ')
  };

  const A = (e) => {
    const t = nt(e)
    return { bw: (...n) => dt(oe(n), t), setup: t.c, theme: t.r }
  };

  const ar = A();
  const pe = A([$e(), Ce()]);
  const { bw: Xt } = pe;
  const { setup: Kt } = pe;
  const { theme: qt } = pe
export {
  Xt as bw,
  A as createInstance,
  Y as cssomInjector,
  q as cyrb32,
  X as noOpInjector,
  Le as noprefix,
  Kt as setup,
  tt as strict,
  qt as theme,
  Ie as virtualInjector,
  Q as warn,
}
