import { setup } from '@beamwind/play'

if (import.meta.env.MODE !== 'production') {
  setup({ hash: false })
}

import App from './app.svelte'

const app = new App({
  target: document.body,
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
