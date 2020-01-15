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
    // {
    //   use: '@gridsome/plugin-critical',
    //   options: {
    //     paths: ['/', '/projects'],
    //     width: 1300,
    //     height: 900
    //   }
    // },
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
    'gridsome-plugin-robots-txt',
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'DatoCmsPost',
        feedOptions: {
          title: 'Travis Reynolds',
          feed_url: 'https://travisreynolds.dev/rss.xml',
          site_url: 'https://travisreynolds.dev'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://travisreynolds.dev/post/' + node.slug
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Travis Reynolds',
        startUrl: '/',
        shortName: 'Travis',
        themeColor: '#242943',
        backgroundColor: '#ffffff',
        icon: './src/images/t.png',
        msTileImage: './src/images/t.png',
        msTileColor: '#242943'
      }
    },
    {
      use: 'gridsome-plugin-brotli',
      options: {
        extensions: ['js', 'css', 'html', 'json', 'svg']
      }
    }
  ]
}
