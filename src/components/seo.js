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
      title={metaTitle}
      htmlAttributes={{ lang: `en` }}
      titleTemplate={titleTemplate}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "twitter:title", content: metaTitle },
        { property: "twitter:creator", content: siteMetadata.twitter || `` },
        { property: "twitter:description", content: metaDescription },
        { property: "og:image", content: imageUrl },
        { property: "og:image:alt", content: imageAlt || metaTitle },
        { property: "twitter:image", content: imageUrl },
        { property: "twitter:image:alt", content: imageAlt || metaTitle },
        { property: "twitter:card", content: "summary_large_image" },
      ].concat(meta)}
    />
  );
};
