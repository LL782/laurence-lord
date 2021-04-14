const website = require("./config/website");

module.exports = {
  siteMetadata: {
    description: website.description,
    siteUrl: website.url,
    title: website.title,
    twitter: website.twitter,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/content/notes`,
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism-okaidia`,
      },
    },
    "gatsby-transformer-sharp",
  ],
  flags: {},
};
