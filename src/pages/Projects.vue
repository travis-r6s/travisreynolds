<template>
  <Layout>
    <section
      id="banner"
      class="style2">
      <div class="inner">
        <header class="major">
          <h1>Projects</h1>
        </header>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div class="inner">
          <header class="major">
            <h2>What are these?</h2>
          </header>
          <p>
            I regularly create little projects to try out and test new web technologies, or things I have learnt.<br>
            They are all listed here, for your browsing pleasure...
          </p>
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
            <img
              :src="project.coverImage.url"
              :alt="project.title">
          </a>
          <div class="content">
            <div class="inner">
              <header class="major">
                <h3>{{ project.title }}</h3>
              </header>
              <div v-html="project.description" />
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
      {
        property: 'description',
        value: 'My Personal Projects'
      }
    ]
  },
  computed: {
    projects () {
      return this.$page.projects.edges.map(({ node }) => node)
    }
  }
}
</script>

<page-query>
query Projects {
  projects: allDatoCmsProject (sort: { order: DESC, by: "publishDate" }) {
    edges {
      node {
        id
        title
        url
        description
        coverImage {
          url
        }
      }
    }
  }
}
</page-query>
