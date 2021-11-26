import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
        software craftsperson and I am an artist drawing under the name{" "}
        <a href="https://www.instagram.com/dog.dc5b/">DOG.DC5B</a>
      </p>
      <StaticImage
        alt="Closely cropped black ink artwork of branches, flowers and masked faces"
        aspectRatio={21 / 9}
        layout="constrained"
        src="../images/crop-of-punk-storm.png"
      />
      <p>
        You can <a href="mailto:hello@laurencelord.co.uk">email me</a>, find me
        on <a href="https://github.com/LL782">GitHub</a>,{" "}
        <a href="https://www.linkedin.com/in/laurencelord">LinkedIn</a>,{" "}
        <a href="https://www.twitter.com/LL782">Twitter (which I hardly use)</a>{" "}
        and{" "}
        <a href="https://www.behance.net/laurencelord">
          Behance (old work only)
        </a>
        .
      </p>
      <p>
        This website is home to <Link to="/notes">my notes</Link> and{" "}
        <a href="/labs/a-frame-001/">experimentation</a>. It's online for my own
        convenience rather than for show.{" "}
        <strong>You are most welcome to explore!</strong> but it's worth
        mentioning it is more of a "workshop" than a "gallery".
      </p>
      <h3>Site map:</h3>
      <ul>
        <li>
          <Link to="/notes/">My notes</Link>
        </li>
        <li>
          <Link to="/labs/">Lab experiments</Link> (1 item)
        </li>
      </ul>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
