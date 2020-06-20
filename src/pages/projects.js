import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo";
import ResumeContainer from "../components/resume_container";

const PAGE_NAME = 'Projects'

const Projects = () => {
  return (
    <Layout activePanel={PAGE_NAME}>
      <SEO title={PAGE_NAME} />
      These are my projects
    </Layout>
  )
}
export default Projects;