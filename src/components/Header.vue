<template>
  <header
    id="header"
    class="alt">
    <g-link
      to="/"
      class="logo">
      <strong>{{ siteName.first }}</strong> <span>{{ siteName.last }}</span>
    </g-link>
  </header>
</template>

<script>
export default {
  computed: {
    siteName () {
      const [first, last] = this.$static.metadata.siteName.split(' ')
      return { first, last }
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.menu-link {
  box-shadow: unset;
}
</style>
