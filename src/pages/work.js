import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkPageLayout from "../components/work_page_layout";

const PAGE_NAME = "Work";

const Work = () => {
  return (
    <Layout activePanel={PAGE_NAME}>
      <SEO title={PAGE_NAME} />
      <WorkPageLayout />
    </Layout>
  );
};
export default Work;
