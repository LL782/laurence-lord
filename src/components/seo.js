import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({
  description,
  image,
  imageAlt,
  isHome,
  meta = [],
  title,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          titleAlt
          description
          logo
          siteUrl
          twitter
        }
      }
    }
  `);

  const metaTitle = title || siteMetadata.title;
  const titleTemplate = isHome ? `%s` : `%s | ${siteMetadata.titleAlt}`;
  const metaDescription = description || siteMetadata.description;
  const imageUrl = `${siteMetadata.siteUrl}${image || siteMetadata.logo}`;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      link={[{ rel: "icon", type: "image/png", href: "/favicon.png" }]}
      meta={[
        { name: "description", content: metaDescription },
        { name: "image", content: imageUrl },
        { property: "og:description", content: metaDescription },
        { property: "og:image:alt", content: imageAlt || metaTitle },
        { property: "og:image", content: imageUrl },
        { property: "og:locale", content: "en_GB" },
        { property: "og:title", content: metaTitle },
        { property: "og:type", content: "website" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:creator", content: siteMetadata.twitter || `` },
        { property: "twitter:description", content: metaDescription },
        { property: "twitter:image:alt", content: imageAlt || metaTitle },
        { property: "twitter:image", content: imageUrl },
        { property: "twitter:title", content: metaTitle },
      ].concat(meta)}
    />
  );
};
