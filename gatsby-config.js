module.exports = {
  siteMetadata: {
    title: "Laurence Lord",
    description: "My personal blog",
    twitter: "ll782",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism-okaidia`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/content/notes`,
      },
    },
    "gatsby-transformer-sharp",
  ],
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
};
