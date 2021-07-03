import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, image, imageAlt, isHome, title }) => {
  const { site } = useStaticQuery(query);

  const {
    defaultDescription,
    defaultTitle,
    logo,
    siteUrl,
    titleAlt,
    twitter,
  } = site.siteMetadata;

  const metaTitle = title || defaultTitle;
  const titleTemplate = isHome ? `%s` : `%s | ${titleAlt}`;
  const metaDescription = description || defaultDescription;
  const imageUrl = `${siteUrl}${image || logo}`;

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang="en" />
      <title>{metaTitle}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/* {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image:alt" content={imageAlt || metaTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={"en_GB"} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={"website"} />
      <meta property="twitter:card" content={"summary_large_image"} />
      <meta property="twitter:creator" content={twitter || ``} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image:alt" content={imageAlt || metaTitle} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:title" content={metaTitle} />
    </Helmet>
  );
};

const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        author # TODO: not used
        backgroundColor # TODO: not used
        defaultDescription
        defaultTitle
        headline # TODO: not used
        logo
        shortName # TODO: not used
        siteUrl
        themeColor # TODO: not used
        titleAlt
        twitter
      }
    }
  }
`;
