module.exports = {
  siteName: 'Travis Reynolds',
  siteUrl: 'https://travisreynolds.dev',
  templates: {
    DatoCmsPost: '/post/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: '2b671a8b6d5a82773be00658d4424a',
        previewMode: true
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'DatoCmsPost',
            indexName: 'Post',
            fields: ['title', 'path', 'description']
          },
          {
            typeName: 'DatoCmsProject',
            indexName: 'Project',
            fields: ['title', 'path', 'description']
          }
        ],
        searchFields: ['title', 'description']
      }
    },
    'gridsome-plugin-purgecss',
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-115394744-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/post/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/projects': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    'gridsome-plugin-robots-txt'
  ]
}
