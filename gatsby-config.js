module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp"
  ]
};
