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
      <p>I write these notes for myself</p>
      <p>
        You're welcome to dive in but you will find some of them are very raw
      </p>
      <p>
        <Link to="/notes/i-am-writing-for-myself">More about that here...</Link>
      </p>
      {notes.map((note) => (
        <Link to={`/notes/${note.slug}`} key={note.slug}>
          <h2>{note.frontmatter.title}...</h2>
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
