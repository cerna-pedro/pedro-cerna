module.exports = {
  siteMetadata: {
    title: `Pedro Cerna | Web Developer`,
    description: `Hi, I'm Pedro Cerna and I develop fast, custom, awesome websites.`,
    author: `Pedro Cerna`,
    url: `https://pedrocerna.com`,
    image: "/og1200x630.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedro Cerna`,
        short_name: `Pedro Cerna`,
        start_url: `/`,
        background_color: `#ff779b`,
        theme_color: `#ff779b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
