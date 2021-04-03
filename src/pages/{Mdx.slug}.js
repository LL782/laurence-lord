import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  const title = post.frontmatter.title;

  return (
    <Layout title={title}>
      <article>
        <h1>{title}</h1>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default BlogPostPage;
