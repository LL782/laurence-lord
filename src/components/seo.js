import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, meta = [] }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          twitter
        }
      }
    }
  `);

  const metaDescription = description || siteMetadata.description;

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
        { property: "twitter:card", content: "summary" },
      ].concat(meta)}
    />
  );
};

export default Seo;