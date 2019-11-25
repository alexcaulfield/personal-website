module.exports = {
  siteMetadata: {
    title: `Alex Caulfield`,
    description: `Alex Caulfield's Gatsby Portfolio`,
    author: `Alex Caulfield <alex@alexcaulfield.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '19DioFyzhNk41wCiZe6R6pYRyBU2W9wzx9as9CFwtSsE',
          worksheetTitle: 'blocks',
          credentials: require('./ac-gatsby-portfolio-69581e37f021.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '19DioFyzhNk41wCiZe6R6pYRyBU2W9wzx9as9CFwtSsE',
          worksheetTitle: 'header',
          credentials: require('./ac-gatsby-portfolio-69581e37f021.json')
      }
    },
  ],
}
