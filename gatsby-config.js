module.exports = {
  siteMetadata: {
    title: "Laurence Lord",
    description: "My personal blog",
    twitter: "ll782",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
  ],
};
