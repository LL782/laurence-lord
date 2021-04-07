import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  const title = post.frontmatter.title;
  const image = getImage(post.frontmatter.image);

  return (
    <Layout title={title}>
      <article>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
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

export default BlogPostPage;
