module.exports = {
  siteMetadata: {
    description: "My personal blog",
    siteUrl: "https://www.laurencelord.co.uk",
    title: "Laurence Lord",
    twitter: "ll782",
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
