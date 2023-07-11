import { graphql, Link } from "gatsby";
import * as React from "react";

import { EditOnGitHubInvite } from "../../components/editOnGitHubInvite";
import { Layout } from "../../components/layout";
import { Seo } from "../../components/seo";

const NotesIndexPage = ({ data }) => {
  const notes = data.allMdx.nodes;

  return (
    <Layout>
      <Seo title="My Notes" />
      <h1>My Notes</h1>
      <p>
        You're very welcome to dive in, just be aware some 
        notes are very raw.{' '}
        <Link to="/notes/i-am-writing-for-myself">
          I write them for myself
        </Link>.{' '}
        If anything chimes with you please do{' '}
        <a href="mailto:laurence.lord@gmail.com">
          get in touch
        </a>
      </p>
      <hr />
      {notes.map((note) => (
        <Link to={`/notes/${note.slug}`} key={note.slug}>
          <h2>{note.frontmatter.title}</h2>
          <p>Read more...</p>          
        </Link>
      ))}
      <EditOnGitHubInvite path={`/src/pages/notes/index.js`} />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date
          title
        }
        slug
      }
    }
  }
`;

export default NotesIndexPage;
