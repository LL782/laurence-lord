import * as React from "react";
import url from "url";

const Heading = {
  1: ({ children }) => <h1>{children}</h1>,
  2: ({ children }) => <h2>{children}</h2>,
  3: ({ children }) => <h3>{children}</h3>,
  4: ({ children }) => <h4>{children}</h4>,
  5: ({ children }) => <h5>{children}</h5>,
  6: ({ children }) => <h6>{children}</h6>,
};

export const BlockQuote = ({
  children,
  customLabel,
  citationUrl,
  date,
  heading,
  headingLevel = 4,
}) => {
  const H = Heading[headingLevel];

  const Title = () =>
    !heading ? null : (
      <H>{!citationUrl ? heading : <a href={citationUrl}>{heading}</a>}</H>
    );

  const Date = () =>
    !date ? null : (
      <>
        {" "}
        – <time>{date}</time>
      </>
    );

  const Cite = () => {
    if (!citationUrl) {
      return null;
    }
    const { hostname: citationDomain, pathname } = url.parse(citationUrl);
    const citationSlug = pathname.substr(pathname.lastIndexOf("/") + 1);

    const urlLabel = citationSlug
      ? `${citationDomain} [...] ${citationSlug}`
      : citationDomain;

    const citationLabel = customLabel || urlLabel;

    return (
      <cite>
        <a href={citationUrl}>{citationLabel}</a> <Date />
      </cite>
    );
  };

  return (
    <>
      <Title />
      <blockquote>{children}</blockquote>
      <Cite />
    </>
  );
};
