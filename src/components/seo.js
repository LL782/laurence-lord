import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, image, imageAlt, meta = [], title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          title
          twitter
        }
      }
    }
  `);

  const metaDescription = description || siteMetadata.description;
  const imageUrl = `${siteMetadata.siteUrl}${image}`;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "twitter:title", content: title },
        { property: "twitter:creator", content: siteMetadata.twitter || `` },
        { property: "twitter:description", content: metaDescription },
      ]
        .concat(
          image
            ? [
                { property: "og:image", content: imageUrl },
                { property: "og:image:alt", content: imageAlt || title },
                { property: "twitter:image", content: imageUrl },
                { property: "twitter:image:alt", content: imageAlt || title },
                { property: "twitter:card", content: "summary_large_image" },
              ]
            : [{ property: "twitter:card", content: "summary" }]
        )
        .concat(meta)}
    />
  );
};
