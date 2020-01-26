module.exports = {
  siteMetadata: {
    title: 'Josh Freeman',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'vitae',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    'gatsby-remark-copy-linked-files',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1080,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout')
      }
    }
  ],
}
