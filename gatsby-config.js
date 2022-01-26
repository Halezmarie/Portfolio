module.exports = {
  pathPrefix: "/halezmarie.github.io",
}

module.exports = {
  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haley Grassi`,
        short_name: `Haley Grassi`,
        start_url: `/`,
        background_color: `$purple`,
        theme_color: `$purple`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
