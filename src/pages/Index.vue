<template>
  <Layout>
    <section
      id="banner"
      class="major"
      :style="`background-image: url(${home.headerBackgroundImage.transformUrl})`">
      <div class="inner">
        <header class="major">
          <h1>{{ home.title }}</h1>
        </header>
        <div class="content">
          <div v-html="home.subtitle.content" />
        </div>
      </div>
    </section>

    <div id="main">
      <section
        id="one"
        class="tiles">
        <article
          v-for="post in posts"
          :key="post.id"
          v-observe-visibility="{
            callback: visibilityChanged,
            once: true,
          }"
          class="background-image-lazy"
          :style="{backgroundImage: `url(${post.featuredImage.transformUrl})`}">
          <header class="major">
            <p class="title">
              {{ post.title }}
            </p>
            <p>{{ post.subtitle }}</p>
          </header>
          <g-link
            :to="post.path"
            :aria-label="`View ${post.title} post`"
            class="link primary" />
        </article>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Nice to see you',
    meta: [
      { hid: 'description', name: 'description', content: `Travis' personal website, containing various snippets of code he always seems to forget 🙄` }
    ]
  },
  data: () => ({ visible: {} }),
  computed: {
    home () {
      return this.$page.allDatoCmsHome.edges[ 0 ].node
    },
    posts () {
      return this.$page.allDatoCmsPost.edges.map(({ node }) => node)
    }
  },
  methods: {
    visibilityChanged (visible, entry) {
      if (visible) entry.target.className = ''
    }
  }
}
</script>

<page-query>
query Home {
  allDatoCmsHome {
    edges {
      node {
        id
        headerBackgroundImage {
          transformUrl(imgixParams: { w: 1200, h: 600, fit: "crop", q: 80, auto: "format,compress" })
        }
        title
        subtitle {
          content
        }
        buttonText
        buttonUrl
      }
    }
  }
  allDatoCmsPost (sort: { order: DESC, by: "publishDate" }) {
    edges {
      node {
        id
        title
        subtitle
        path
        featuredImage {
          url
          transformUrl(imgixParams: { w: 1000, h: 500, fit: "crop", q: 80, auto: "format,compress" })
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.background-image-lazy {
  background-image: none !important;
}
</style>
