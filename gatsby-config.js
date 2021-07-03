module.exports = {
  siteMetadata: {
    author: "Laurence Lord",
    backgroundColor: "#fff",
    defaultDescription: `Personal website of London based software craftsperson and artist, Laurence Lord. This website houses notes and links related to my occupation and varied thoughts.`,
    defaultTitle: "Laurence Lord - Creative Developer",
    headline: "Just my links and notes",
    logo: "/logos/monkey-pixels.png",
    shortName: "LL782",
    siteUrl: "https://www.laurencelord.co.uk",
    themeColor: "#000",
    titleAlt: "Laurence Lord",
    twitter: "@LL782",
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
