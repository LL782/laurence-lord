import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NotePage = ({ data }) => {
  const note = data.mdx;
  const title = note.frontmatter.title;
  const image = getImage(note.frontmatter.image);
  const afterthoughts = note.frontmatter.afterthoughts;

  return (
    <Layout title={title}>
      <nav>
        <Link to="/notes">Notes</Link>
      </nav>

      <hr />

      <article>
        <h1>{title}</h1>
        <GatsbyImage alt={note.frontmatter.imageAlt} image={image} />
        <section>
          <MDXRenderer>{note.body}</MDXRenderer>
        </section>
        {afterthoughts && <aside>Aside: {afterthoughts}</aside>}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query NoteById($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        afterthoughts
        date
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              aspectRatio: 3
              transformOptions: { trim: 1.5 }
            )
          }
        }
        imageAlt
        title
      }
      slug
    }
  }
`;

export default NotePage;
