import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogNotePage = ({ data }) => {
  const note = data.mdx;
  const title = note.frontmatter.title;
  const image = getImage(note.frontmatter.image);

  return (
    <Layout title={title}>
      <article>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={note.frontmatter.imageAlt} />
        <section>
          <MDXRenderer>{note.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogNoteById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
      }
      body
    }
  }
`;

export default BlogNotePage;
