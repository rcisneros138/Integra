module.exports = {
  siteMetadata: {
    title: 'Integra',
    menuLinks: {
      index: [
        {
          name: 'programs',
          link: '/',
        },
        {
          name: 'about',
          link: '/page-2',
        },
        {
          name: 'testimonials',
          link: '/page-2',
        },
        {
          name: 'contact',
          link: '/page-2',
        },
      ],
      training: [
        {
          name: 'mission',
          link: '/',
        },
        {
          name: 'about',
          link: '/page-2',
        },
        {
          name: 'our trainers',
          link: '/page-2',
        },
        {
          name: 'contact',
          link: '/page-2',
        },
      ],
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: 'true',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        extraDirsToCache: ['images'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
