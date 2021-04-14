import { Link } from "gatsby";
import * as React from "react";

import { EditOnGitHubInvite } from "../components/editOnGitHubInvite";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout isHome={true}>
      <Seo isHome={true} />
      <h1>Laurence Lord</h1>
      <h2>Creative Developer</h2>
      <p>
        I make websites and write&nbsp;web&nbsp;code
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
        Checkout <a href="https://www.behance.net/laurencelord">Behance</a> for
        old examples of&nbsp;my&nbsp;work
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
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
