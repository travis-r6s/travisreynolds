<template>
  <Layout>
    <div
      id="main"
      class="alt">
      <section id="one">
        <div class="inner">
          <header class="major">
            <h1>{{ post.title }}</h1>
          </header>
          <div class="image main">
            <v-lazy-image
              :src="post.featuredImage.transformUrl"
              :src-placeholder="post.featuredImage.placeholder"
              :alt="post.title" />
          </div>
          <div v-html="post.text.content" />
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    const { title, description = '' } = this.post.seo || this.post
    return {
      title,
      meta: [
        {
          property: 'description',
          content: description
        }
      ]
    }
  },
  computed: {
    post () { return this.$page.post }
  }
}
</script>

<page-query>
query ($id: ID!) {
  post: datoCmsPost (id: $id) {
    title
    text {
      content
    }
    featuredImage {
      transformUrl(h: 500, maxW: 1200, q: 85)
      placeholder: transformUrl(h: 300, w: 500, q: 40, blur: 60)
    }
    seo {
      title
      description
    }
  }
}
</page-query>

<style lang="scss" scoped>
.image img {
  height: 500px;
}
</style>
