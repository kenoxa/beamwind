<script context="module">
  import preflight from '@beamwind/preflight'
  import { bw, setup } from 'beamwind'

  if (import.meta.env.MODE !== 'production') {
    setup({ hash: false })
  }

  setup([
    preflight,
    {
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
    },
  ])
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

<div class={bw`text-center`}>
  <header
    class={bw`bg-#f9f6f6 text-#333 min-h-screen flex flex-col items-center justify-center text-2xl`}>
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
    <p class={bw`app-p divide-x`}>
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

    <p class={bw`app-p divide-x`}>
      <button
        class={bw`focus:outline-none text-sm px-5 py-3 rounded-md font-semibold bg-promote ring(& xs promote offset(xs on-promote))`}>
        ring-offset-purple-100
      </button>
    </p>
  </header>
</div>
