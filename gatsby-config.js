module.exports = {
  siteMetadata: {
    title: 'Josh Freeman',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components'
  ],
}
