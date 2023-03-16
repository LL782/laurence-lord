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
      <h2>Creative Developer</h2>
      <StaticImage
        alt="Closely cropped black ink artwork of branches, flowers and masked faces"
        aspectRatio={21 / 9}
        layout="constrained"
        src="../images/crop-of-punk-storm.png"
      />
      <p>
        I craft websites, develop businesses and draw pictures. This website
        shares a collection of notes, lab experiments and links related to my
        activty online.
      </p>

      <p>
        Although written for myself, you may find my notes interesting. They're
        about what I'm doing, my ways-of-working and the break-throughs I make
        in my own, personal program.
      </p>

      <p>
        The lab experiments are notes too – mini web apps where I try things
        out, test with different people and – best of all – can find them again
        in the future.
      </p>
      <h3>On this site</h3>
      <ul>
        <li>
          <Link to="/notes/">My notes</Link>
        </li>
        <li>
          <Link to="/labs/">Lab experiments</Link>
        </li>
      </ul>
      <h3>Links</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h4>Mainstream</h4>
          <ul>
            <li>
              <a href="https://github.com/LL782">LL782 GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ll782">LL782 LinkedIn</a>
            </li>
            <li>
              <a href="https://www.twitter.com/LL782">LL782 Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Side-streams</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/dc5b_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DC5B Instagram
              </a>
            </li>
            <li>
              <a href="https://www.dc5b.com/">DC5B Website</a>
            </li>
            <li>
              <a href="https://maps.mundoko.world/">Mundoko Maps</a>
            </li>
          </ul>
        </div>
      </div>
      <EditOnGitHubInvite path={`/src/pages/index.js`} />
    </Layout>
  );
};

export default IndexPage;
