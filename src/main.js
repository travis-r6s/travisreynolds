// Packages
import { VLazyImagePlugin } from 'v-lazy-image'

// Components
import DefaultLayout from '~/layouts/Default.vue'

// Styles
import '@/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  // use Plugins
  Vue.use(VLazyImagePlugin)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
