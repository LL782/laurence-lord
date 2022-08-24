import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

import { Layout } from "../../components/layout";
import { Seo } from "../../components/seo";
import { EditOnGitHubInvite } from "../../components/editOnGitHubInvite";
import NewerOlder from "../../components/newerOlder";

const NotePage = ({ data }) => {
  const note = data.mdx;

  const afterthoughts = note.frontmatter.afterthoughts;
  const description = note.frontmatter.description;
  const image = getImage(note.frontmatter.image);
  const seoImage = getSrc(note.frontmatter.image);
  const imageAlt = note.frontmatter.imageAlt;
  const imageAnchor = note.frontmatter.imageAnchor;
  const imageLink = note.frontmatter.imageLink;
  const title = note.frontmatter.title;

  const MainImage = () => {
    let Result = null;
    if (image) {
      Result = <GatsbyImage alt={imageAlt} image={image} />;
    }
    if (imageLink) {
      Result = <Link to={imageLink}>{Result}</Link>;
    }
    if (imageAnchor) {
      Result = <a href={imageAnchor}>{Result}</a>;
    }
    return Result;
  };
  return (
    <Layout title={`${title}...`}>
      <nav>
        <Link to="/notes">&larr; All notes</Link>
      </nav>

      <hr />

      <article>
        <Seo
          description={description}
          image={seoImage}
          imageAlt={imageAlt}
          title={title}
        />
        <h1>{title}</h1>
        <MainImage />
        <section>
          <MDXRenderer>{note.body}</MDXRenderer>
        </section>
        {afterthoughts && (
          <aside>
            <h2>Afterthoughts</h2>
            <p>{afterthoughts}</p>
          </aside>
        )}
      </article>

      <hr />

      <NewerOlder allNotes={data.allMdx.nodes} idOfCurrentNote={note.id} />
      <EditOnGitHubInvite path={`/content/notes/${note.slug}.mdx`} />
    </Layout>
  );
};

export const noteQuery = graphql`
  query NoteById($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        afterthoughts
        date
        description
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
        imageAnchor
        imageLink
        title
      }
      id
      slug
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default NotePage;
