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
        I work for <a href="https://www.codurance.com">Codurance</a> as a
        Software Craftsperson and I draw under the name{" "}
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
      <p>
        This website is also home to <Link to="/notes">My Notes</Link>
      </p>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
