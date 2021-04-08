import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = ({ data }) => {
  const notes = data.allMdx.nodes;

  return (
    <Layout>
      <Seo title="Homepage" />
      <StaticImage
        alt="Winding road laid over rocky hills"
        aspectRatio={21 / 9}
        layout="fullWidth"
        src="https://images.unsplash.com/photo-1617618175709-f208b5cd5c02"
      />
      {notes.map((note) => (
        <Link to={note.slug} key={note.slug}>
          <h2>{note.frontmatter.title}</h2>
        </Link>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`;

export default IndexPage;
