import { Link } from "gatsby";
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
            <Link to="/" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/notes">My Notes</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default IndexPage;
