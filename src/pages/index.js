import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Emoji } from "../components/emoji";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = ({ path }) => {
  return (
    <Layout isHome={true}>
      <Seo title="Homepage" />
      <h1>Laurence Lord</h1>
      <h2>Creative Developer</h2>
      <p>
        I make websites and write web code <Emoji label="wave">👋</Emoji>
      </p>
      <p>
        I work for <a href="https://www.codurance.com">Codurance</a> as a
        Software Craftsperson and I draw part-time under the name{" "}
        <a href="https://www.instagram.com/dog.dc5b/">DOG.DC5B</a>
      </p>

      <StaticImage
        alt="Winding road laid over rocky hills"
        aspectRatio={21 / 9}
        layout="constrained"
        src="https://images.unsplash.com/photo-1617618175709-f208b5cd5c02"
      />
      <p>
        You can <a href="mailto:hello@laurencelord.co.uk">email me</a>, find me
        on <a href="https://github.com/LL782">GitHub</a> and{" "}
        <a href="https://www.linkedin.com/in/laurencelord">LinkedIn</a>. I have{" "}
        <a href="https://www.twitter.com/LL782">Twitter</a> but hardly use it.
        If you want old examples of my work try{" "}
        <a href="https://www.behance.net/laurencelord">Behance</a>{" "}
        <Emoji label="Grimace">😬</Emoji>
      </p>
      <h3>Site contents</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {path === "/" && `(you're here)`}
          </li>
          <li>
            <Link to="/notes">Notes</Link> Personal notes you're welcome to read
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default IndexPage;
