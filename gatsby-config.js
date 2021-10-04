module.exports = {
  pathPrefix: "/pages",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "daiant",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
