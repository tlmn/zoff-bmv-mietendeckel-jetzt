module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mietendeckel jetzt`,
        short_name: `Mietendeckel jetzt`,
        start_url: `/`,
        background_color: `#FFE200`,
        theme_color: `#FFE200`,
        display: `minimal-ui`,
        icon: `src/images/web-icon.png`
      }
    }
  ]
};
