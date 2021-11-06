const dotenv = require("dotenv");
const result = dotenv.config({
  path: `${__dirname}/.env`,
});
const googleApiKey = process.env.PRIVATE_KEY.replace(
  new RegExp("\\\\n", "g"),
  "\n"
);

const env_creds = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: googleApiKey,
};

module.exports = {
  siteMetadata: {
    title: `Alex Caulfield`,
    description: `Alex Caulfield's Personal Website`,
    author: `Alex Caulfield <alex@alexcaulfield.com>`,
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    `gatsby-plugin-styled-components`,
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
        icon: "src/images/favicon.png",
      },
    }
  ],
};
