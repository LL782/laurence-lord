import { Link } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 page" />
      <h1>The big empty. This page does not exist</h1>
      <p>
        Probably best to hit <Link to="/">the homepage</Link>,{" "}
        <Link to="/notes/">Notes</Link> or <Link to="/labs/">Labs</Link>
      </p>
      <p>
        Or{" "}
        <a href="https://www.ecosia.org/search?method=index&q=site%3Alaurencelord.co.uk">
          Ecosia
        </a>{" "}
        what you're looking for – I might have renamed it
      </p>
    </Layout>
  );
};

export default NotFoundPage;
