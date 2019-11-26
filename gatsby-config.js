const dotenv = require('dotenv')
const result = dotenv.config()

var env_creds = {}
if (result) {
  env_creds = {
    client_email: result.parsed.CLIENT_EMAIL,
    private_key: result.parsed.PRIVATE_KEY,
  }
} else {
  env_creds = {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  }
}

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
          credentials: env_creds
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '19DioFyzhNk41wCiZe6R6pYRyBU2W9wzx9as9CFwtSsE',
          worksheetTitle: 'header',
          credentials: env_creds
      }
    },
  ],
}
