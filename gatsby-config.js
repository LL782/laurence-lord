module.exports = {
  siteMetadata: {
    author: 'Laurence "DC5B" Lord',
    defaultDescription: `Personal website of London based software craftsperson and artist, Laurence Lord. This website houses notes and links related to my occupation and varied thoughts.`,
    defaultTitle: 'Laurence "DC5B" Lord - Creative Developer',
    headline: "My links, notes and experiments",
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
