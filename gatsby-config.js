module.exports = {
  siteMetadata: {
    author: 'Laurence "DC5B" Lord',
    defaultDescription:
      "Laurence Lord is a creative developer based in UK, specialising in websites and online businesses. This website shares his personal notes, lab experiments and links.",
    defaultTitle: 'Laurence "DC5B" Lord',
    headline: "Creative Developer",
    logo: "/logos/ll782-og.png",
    ogLanguage: "en_GB",
    siteLanguage: "en",
    siteUrl: "https://www.laurencelord.co.uk",
    titleAlt: 'Laurence "DC5B" Lord',
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
