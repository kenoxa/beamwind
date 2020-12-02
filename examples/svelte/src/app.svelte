<script context="module">
  import { bw, setup, theme } from '@beamwind/play'

  console.log(theme('backgroundColor'))

  setup({
    plugins: {
      'app-p': 'm-sm',
      'app-code': 'bg-#0002 px-sm py-xs rounded-sm',
    },
    theme: {
      animation: {
        'logo-pulse': ['infinite 1.6s ease-in-out alternate'],
      },
      keyframes: {
        'logo-pulse': {
          from: {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(1.06)',
          },
        },
      },
    },
  })
</script>

<script>
  import { onMount } from 'svelte'

  const appLink = bw`text-#ff3e00 no-underline inline-block px-md`

  let count = 0

  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<header class={bw`bg-surface m-md space-y-md`}>
  <h1 class={bw`text-2xl font-bold`}>Tones</h1>

  <p>
    The usage of colour in the system is designed to have a strong correlation with the tone of
    voice being used. The system makes available a spectrum of tones which are leveraged across the
    entire component suite.
  </p>

  <div class={bw`flex flex-wrap p-md text-center`}>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-primary rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>primary</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-secondary rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>secondary</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-critical rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>critical</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-caution rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>caution</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-positive rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>positive</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-neutral rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>neutral</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-info rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>info</figcaption>
    </figure>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <div class={bw`bg-promote rounded-md h-2xl`} />
      <figcaption class={bw`text(sm neutral) tracking-wider`}>promote</figcaption>
    </figure>
  </div>

  <div class={bw`flex flex-wrap p-md text-center`}>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-primary
          hover:bg-primary-hover
          focus:bg-primary-focus
          active:bg-primary-active
        `}>
        primary
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-primary-hover
        `}>
        hover
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-primary-active
        `}>
        active
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-primary-focus
        `}>
        focus
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-primary-disabled
        `}>
        disabled
      </button>
    </figure>
  </div>

  <div class={bw`flex flex-wrap p-md text-center`}>
    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-critical
          hover:bg-critical-hover
          focus:bg-critical-focus
          active:bg-critical-active
        `}>
        critical
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-critical-hover
        `}>
        hover
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-critical-active
        `}>
        active
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-critical-focus
        `}>
        focus
      </button>
    </figure>

    <figure class={bw`w(1/2 sm:1/4 lg:1/8) p-sm`}>
      <button
        class={bw`
          focus:outline-none
          px-md py-sm
          rounded-md
          bg-critical-disabled
        `}>
        disabled
      </button>
    </figure>
  </div>
</header>

<div class={bw`text-center`}>
  <header class={bw`bg-surface min-h-screen flex flex-col items-center justify-center text-2xl`}>
    <img
      src="/logo.svg"
      class={bw`h-36vmin pointer-events-none mb-12 animate-logo-pulse`}
      alt="logo" />
    <p class={bw`app-p`}>
      Edit
      <code class={bw`app-code`}>src/App.svelte</code>
      and save to reload.
    </p>
    <p class={bw`app-p`}>
      Page has been open for
      <code class={bw`app-code`}>{count}</code>
      seconds.
    </p>
    <p class={bw`app-p divide-x-sm divide-promote`}>
      <a class={appLink} href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte
      </a>
      <a
        class={appLink}
        href="https://github.com/kenoxa/beamwind"
        target="_blank"
        rel="noopener noreferrer">
        Learn Beamwind
      </a>
    </p>

    <p
      class={bw`app-p rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10`}>
      <button
        class={bw`focus:outline-none text-sm px-5 py-3 rounded-md font-semibold bg(promote opacity-80) shadow-2xl ring(& sm promote opacity-80 offset(sm on-promote))`}>
        ring-offset-purple-100
      </button>
    </p>
  </header>
</div>
