import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  console.log(`posts: `, posts);

  return (
    <Layout>
      <Seo title="Homepage" />
      {posts.map((post) => (
        <Link to={post.slug} key={post.slug}>
          <h2>{post.frontmatter.title}</h2>
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
