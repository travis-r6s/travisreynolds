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
            <img
              :src="post.featuredImage.url"
              :alt="post.title">
          </div>
          <vue-markdown>{{ post.text }}</vue-markdown>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
// Components
import VueMarkdown from 'vue-markdown'
export default {
  components: { VueMarkdown },
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
    text
    featuredImage {
      url
    }
    seo {
      title
      description
    }
  }
}
</page-query>
