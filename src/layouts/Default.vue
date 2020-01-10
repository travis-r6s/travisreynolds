<template>
  <div
    class="body"
    :class="{'is-loading': isLoading, 'is-menu-visible': isMenuVisible}">
    <div id="wrapper">
      <Header @toggleMenu="toggleMenu" />
      <slot />
      <Contact />
      <Footer />
    </div>
    <Menu @toggleMenu="toggleMenu" />
  </div>
</template>

<script>
// Components
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
export default {
  components: { Contact, Footer, Header, Menu },
  data: () => ({
    isMenuVisible: false,
    isLoading: true
  }),
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 100)
  },
  methods: {
    toggleMenu () {
      this.isMenuVisible = !this.isMenuVisible
    }
  }
}
</script>
