import * as React from "react";
import url from "url";

export const BlockQuote = ({ children, citationUrl, heading }) => {
  const { hostname: citationDomain, pathname } = url.parse(citationUrl);
  const citationSlug = pathname.substr(pathname.lastIndexOf("/") + 1);
  const citationLabel = `${citationDomain} [...] ${citationSlug}`;

  console.log(`citationSlug: `, citationSlug);

  return (
    <>
      <h4>
        <a href={citationUrl}>{heading}</a>
      </h4>
      <blockquote>
        {children}
        <cite>
          <a href={citationUrl}>{citationLabel}</a>
        </cite>
      </blockquote>
    </>
  );
};
