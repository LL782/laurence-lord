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
      <h2>
        Software Craftsperson at{" "}
        <a href="https://www.codurance.com">Codurance</a> and
        Artist Developer at <a href="https://dc5b.com">DC5B</a>
      </h2>
      <p>
        I've gone from individual contributor developing code, to developing
        teams to developing software projects. Drawing has always been a hobby
        for me and now I'm developing a side-hustle pushing my artwork forwards.
      </p>
      <p>
        <a href="https://idea.dc5b.com">Bug a mug</a>,{" "}
        <a href="https://patreon.com/user?u=30673863">support me on Patreon</a>{" "}
        or <a href="mailto:laurence.lord@gmail.com">drop me an email</a>. Thanks
        so much for your support and have a great trip!
      </p>
      <a href="https://www.instagram.com/dog.dc5b" style={{ border: "0 none" }}>
        <StaticImage
          alt="Closely cropped black ink artwork of branches, flowers and masked faces"
          aspectRatio={21 / 9}
          layout="constrained"
          src="../images/crop-of-punk-storm.png"
        />
      </a>
      <h3>On this site</h3>
      <ul>
        <li>
          <Link to="/notes/">My various notes</Link>
        </li>
        <li>
          <Link to="/labs/">A lab experiment</Link>
        </li>
      </ul>
      <h3>Elsewhere</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h4>Mainstream</h4>
          <ul>
            <li>
              <a href="https://github.com/LL782">LL782</a> GitHub
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laurencelord">
                Laurence Lord
              </a>{" "}
              LinkedIn
            </li>
            <li>
              <a href="https://www.twitter.com/LL782">@LL782</a> Twitter
            </li>
          </ul>
        </div>
        <div>
          <h4>Side hustle</h4>
          <ul>
            <li>
              <a href="https://idea.idc5b.com/">IDEA.DC5B.COM</a> portfolio shop
            </li>
            <li>
              <a href="https://www.instagram.com/dog.dc5b/">DOG.DC5B</a>{" "}
              Instagram
            </li>
            <li>
              <a href="https://patreon.com/user?u=30673863">Laurence Lord</a>{" "}
              Patreon
            </li>
          </ul>
        </div>
      </div>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
