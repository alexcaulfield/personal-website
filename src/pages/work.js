import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo";
import ResumeContainer from "../components/resume_container";

const PAGE_NAME = 'Work'

const Work = () => {
  return (
    <Layout activePanel={PAGE_NAME}>
      <SEO title={PAGE_NAME} />
      <ResumeContainer />
    </Layout>
  )
}
export default Work;