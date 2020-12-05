<script>
  import { bw } from '@beamwind/play'

  const style = {
    main: bw`
      ${true ? 'text-green-500' : ''}
      bg-current
      font-sans
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      clearfix
      transition
      duration-1000
      hover:(
        sm:(bg-blue-600 text-blue-500)
        md:(text-purple-700 bg-purple-500)
      )
    `,
    card: bw`
      bg-white
      max-w-sm
      rounded-2xl
      overflow-hidden
      shadow-2xl
      border(current 16)
      rotate(
        -3 hover:6
        sm:(0 hover:3)
        md:(3 hover:-6)
      )
    `,
    tag: bw`
      inline-block
      bg-gray-200
      hover:(
        bg-gray-100
        text-gray-800
        shadow-lg
      )
      border(& gray-400)
      rounded-full
      px-2
      py-1
      text(sm gray-600)
      font-semibold
      cursor-pointer
    `,
  }
</script>

<main class={style.main}>
  <div class={style.card}>
    <img
      class={bw('w-full')}
      src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
      alt="Sunset in the mountains" />
    <div class={bw({ 'px-6': true, 'py-8': true, 'space-y-4': true })}>
      <div class={bw`font-bold`}>
        <h1 class={bw`text-3xl`}>The Coldest Sunset In The World</h1>
      </div>
      <div>
        <p class={bw`text-gray-700 text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <form class={bw`flex flex-row space-x-4`}>
        <input
          class={bw`w-full py-3 px-4 bg-gray-100 border(& gray-300) rounded sm:focus:(bg-gray-100 placeholder-current)`}
          placeholder="Enter a value" />
        <button class={bw`px-6 rounded bg-current font-bold`}>
          <span class={bw`text-white`}>SEND</span>
        </button>
      </form>
    </div>
    <div class={bw`px-6 py-4 bg-gray-100 border(t gray-300) space-x-2`}>
      <div class={style.tag}><span>#photography</span></div>
      <div class={style.tag}><span>#travel</span></div>
      <div class={style.tag}><span>#winter</span></div>
    </div>
  </div>
</main>

<footer class={bw`bg-surface m-md space-y-md`}>
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
</footer>
