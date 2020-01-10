module.exports = {
  siteName: 'Travis Reynolds',
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
    }
  ]
}
