module.exports = {
  siteMetadata: {
    title: 'Integra',
    menuLinks: {
      index: [
        {
          name: 'Programs',
          link: '/',
        },
        {
          name: 'About',
          link: '/page-2',
        },
        {
          name: 'Testimonials',
          link: '/page-2',
        },
        {
          name: 'Contact',
          link: '/page-2',
        },
      ],
      training: [
        {
          name: 'Mission',
          link: '/',
        },
        {
          name: 'About',
          link: '/page-2',
        },
        {
          name: 'Our Trainers',
          link: '/page-2',
        },
        {
          name: 'Contact',
          link: '/page-2',
        },
      ],
      therapy: [
        {
          name: 'Mission',
          link: '/',
        },
        {
          name: 'About',
          link: '/page-2',
        },
        {
          name: 'Our Therapists',
          link: '/page-2',
        },
        {
          name: 'Contact',
          link: '/page-2',
        },
      ],
      massage: [
        {
          name: 'Mission',
          link: '/',
        },
        {
          name: 'About',
          link: '/page-2',
        },
        {
          name: 'Our Therapists',
          link: '/page-2',
        },
        {
          name: 'Contact',
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
        extraDirsToCache: ['public/static'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_KEY,
      },
    },
  ],
}
