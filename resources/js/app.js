import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mixin({ methods: { route } })
      .mount(el)
  },
  progress: {
    color: '#4B5563',
    includeCSS: true,
    showSpinner: true,
    spinnerColor: '#4B5563',
    spinnerType: 'border',
    overlayColor: 'rgba(0, 0, 0, 0.75)',
    showOverlay: true,
    delay: 250,
  }
})
