<template>
  <Layout>
    <section
      id="banner"
      class="style2"
      :style="`background-image: url(${work.headerBackgroundImage.transformUrl})`">
      <div class="inner">
        <header class="major">
          <h1>{{ work.title }}</h1>
        </header>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2>{{ work.heroTitle }}</h2>
          </header>
          <div v-html="work.heroContent.content" />
        </div>
      </section>
      <section
        id="two"
        class="spotlights">
        <section
          v-for="project in projects"
          :key="project.id">
          <a
            :href="project.url"
            class="image">
            <v-lazy-image
              :src="project.coverImage.transformUrl"
              :src-placeholder="project.coverImage.placeholder"
              :alt="project.title" />
          </a>
          <div class="content">
            <div class="inner">
              <header class="major">
                <p>{{ project.title }}</p>
              </header>
              <div v-html="project.description.content" />
              <ul
                v-if="project.url"
                class="actions">
                <li>
                  <a
                    :href="project.url"
                    class="button">
                    View Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      { hid: 'description', name: 'description', content: `A collection of various (semi-almost) completed projects I have made 💼` }
    ]
  },
  computed: {
    work () {
      return this.$page.allDatoCmsWork.edges[ 0 ].node
    },
    projects () {
      return this.$page.projects.edges.map(({ node }) => node)
    }
  }
}
</script>

<page-query>
query Projects {
  allDatoCmsWork {
    edges {
      node {
        id
        headerBackgroundImage {
          transformUrl(imgixParams: { w: 1200, h: 600, fit: "crop", q: 80, auto: "format,compress" })
        }
        title
        heroTitle
        heroContent {
          content
        }
      }
    }
  }
  projects: allDatoCmsProject (sort: { order: DESC, by: "publishDate" }) {
    edges {
      node {
        id
        title
        url
        description {
          content
        }
        coverImage {
          transformUrl(imgixParams: { maxW: 600, q: 85, auto: "format,compress" })
          placeholder: transformUrl(imgixParams: { w: 300, h: 300, fit: "crop", blur: 60, q: 40, auto: "format,compress" })
        }
      }
    }
  }
}
</page-query>
