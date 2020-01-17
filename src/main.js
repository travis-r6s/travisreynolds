// Packages
import { VLazyImagePlugin } from 'v-lazy-image'
import VueObserveVisibility from 'vue-observe-visibility'

// Components
import DefaultLayout from '~/layouts/Default.vue'

// Styles
import '@/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  // use Plugins
  Vue.use(VLazyImagePlugin)
  Vue.use(VueObserveVisibility)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
