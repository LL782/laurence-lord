import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, image, imageAlt, isHome, title }) => {
  const { buildTime, site } = useStaticQuery(query);

  const {
    author,
    defaultDescription,
    defaultTitle,
    headline,
    logo,
    ogLanguage,
    siteUrl,
    siteLanguage,
    titleAlt,
    twitter,
  } = site.siteMetadata;

  const metaTitle = title || defaultTitle;
  const titleTemplate = isHome ? `%s` : `%s | ${titleAlt}`;
  const metaDescription = description || defaultDescription;
  const imageUrl = `${siteUrl}${image || logo}`;

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    author: { "@type": "Person", name: author },
    copyrightHolder: { "@type": "Person", name: author },
    copyrightYear: "2021",
    creator: { "@type": "Person", name: author },
    dateModified: buildTime,
    datePublished: "2021-04-03T10:30:00+01:00",
    description: metaDescription,
    headline,
    image: { "@type": "ImageObject", url: imageUrl },
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    name: metaTitle,
    publisher: { "@type": "Person", name: author },
    url: siteUrl,
  };

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={siteLanguage} />
      <title>{metaTitle}</title>

      <link rel="icon" type="image/png" href="/favicon.png" />

      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image:alt" content={imageAlt || metaTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={ogLanguage} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={"website"} />
      <meta property="twitter:card" content={"summary_large_image"} />
      <meta property="twitter:creator" content={twitter} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image:alt" content={imageAlt || metaTitle} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:title" content={metaTitle} />

      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      )}
    </Helmet>
  );
};

const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        author
        defaultDescription
        defaultTitle
        headline
        logo
        ogLanguage
        siteLanguage
        siteUrl
        titleAlt
        twitter
      }
    }
  }
`;
