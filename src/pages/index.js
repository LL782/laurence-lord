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
      <h2>Artist, business developer and software craftsperson</h2>
      <StaticImage
        alt="Closely cropped black ink artwork of branches, flowers and masked faces"
        aspectRatio={21 / 9}
        layout="constrained"
        src="../images/crop-of-punk-storm.png"
      />
      <p>I craft websites, develop businesses and draw pictures. This websites has a growing collection of my notes, lab experiments and links to places where I'm active online.</p>

      <p>The notes are written (primarily) for me. I write about what I'm working on, what I think of different development processes and break-throughs I make in my own neuro-lingustic program.</p>

      <p>The lab experiments are notes too – mini web apps where I try things out, test with different people and can find the results again in the future.</p>
      <h3>On this site</h3>
      <ul>
        <li>
          <Link to="/notes/">My notes</Link>
        </li>
        <li>
          <Link to="/labs/">Lab experiments</Link>
        </li>
      </ul>
      <h3>Elsewhere online</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h4>Mainstream links</h4>
          <ul>
            <li>
              <a href="https://github.com/LL782">LL782</a> GitHub
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ll782">LL782</a> LinkedIn
            </li>
            <li>
              <a href="https://www.twitter.com/LL782">@LL782</a> Twitter
            </li>
          </ul>
        </div>
        <div>
          <h4>Side stream </h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/dog.5b/">DOG.5B</a> My drawings
            </li>
            <li>
              <a href="https://www.dc5b.com/">DC5B.COM</a> Art business
            </li>
            <li>
              <a href="https://www.pathfindertools.com/">PathfinderTools.com</a>{" "}
              RPG Hobby
            </li>
          </ul>
        </div>
      </div>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
