<template>
  <nav id="menu">
    <div class="inner">
      <ul class="links">
        <li>
          <g-link to="/">
            Home
          </g-link>
        </li>
        <li>
          <g-link to="/projects">
            Projects
          </g-link>
        </li>
      </ul>
      <ul class="actions vertical">
        <li>
          <g-link
            to="/"
            class="button special fit">
            View Blog
          </g-link>
        </li>
        <li>
          <a
            href="#contact"
            class="button fit"
            @click="toggleMenu"
            @keyup="toggleMenu">
            Get In Touch
          </a>
        </li>
      </ul>
    </div>
    <button
      class="close"
      @click="toggleMenu"
      @keyup="toggleMenu">
      Close
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.close {
  box-shadow: unset;
}
</style>
