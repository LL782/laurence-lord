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
      <h1>Laurence "DC5B" Lord</h1>
      <h2>
        I am an <strong>artist</strong> and a{" "}
        <strong>software craftsperson</strong>
      </h2>
      <a href="https://idea.dc5b.com" style={{ border: "0 none" }}>
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
          <h4>Sidestream</h4>
          <ul>
            <li>
              <a href="https://idea.idc5b.com/">IDEA.DC5B.COM</a> Side hustle
            </li>
            <li>
              <a href="https://www.instagram.com/dog.dc5b/">DOG.5B</a> Art on Instagram
            </li>
          </ul>
        </div>
      </div>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
