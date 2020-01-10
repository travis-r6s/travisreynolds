<template>
  <Layout>
    <section
      id="banner"
      class="major">
      <div class="inner">
        <header class="major">
          <h1>{{ home.title }}</h1>
        </header>
        <div class="content">
          <div v-html="home.subtitle" />
          <ul class="actions">
            <li>
              <g-link
                :to="home.buttonUrl"
                class="button next scrolly">
                {{ home.buttonText }}
              </g-link>
            </li>
          </ul>
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
          :style="{backgroundImage: `url(${post.featuredImage.url})`}">
          <header class="major">
            <h3>{{ post.title }}</h3>
            <p>{{ post.subtitle }}</p>
          </header>
          <g-link
            :to="post.path"
            class="link primary" />
        </article>
      </section>
      <section id="two">
        <div class="inner">
          <header class="major">
            <h2>Resume</h2>
          </header>
          <p>
            You can view my online resume by clicking below.
          </p>
          <ul class="actions">
            <li>
              <a
                href="https://travisreynolds.gitlab.io/resume"
                class="button next">
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Nice to see you'
  },
  computed: {
    home () {
      return this.$page.allDatoCmsHome.edges[ 0 ].node
    },
    posts () {
      return this.$page.allDatoCmsPost.edges.map(({ node }) => node)
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
        title
        subtitle
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
        }
      }
    }
  }
}
</page-query>
