/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /* Your site config here*/
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      },
    },
  ],
  siteMetadata: {
    title: 'UMAMI',
    description: "Recipe site",
    copyright: "This website is copyright 2022 UMAMI" ,
    contact: `asumi_mizoguchi@mymail.eku.edu`
  }
}
