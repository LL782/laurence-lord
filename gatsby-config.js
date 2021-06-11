const website = require("./config/website");

module.exports = {
  siteMetadata: {
    logo: website.logo,
    description: website.description,
    logo: website.logo,
    siteUrl: website.url,
    title: website.title,
    titleAlt: website.titleAlt,
    twitter: website.twitter,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/embeds/*": [
            "Content-Security-Policy: frame-ancestors 'self' https://*.laurencelord.co.uk/",
            "X-Frame-Options: SAMEORIGIN",
          ],
        },
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/embeds/*`],
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/content/notes`,
      },
    },
    "gatsby-transformer-sharp",
  ],
  flags: {},
};
