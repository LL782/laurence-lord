import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Homepage" />
      <div>Hello world</div>
    </Layout>
  );
};

export default IndexPage;
