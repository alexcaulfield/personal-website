import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo";
import ProjectsLayout from "../components/projects_layout";

const PAGE_NAME = 'Projects';

const Projects = () => {
  return (
    <Layout activePanel={PAGE_NAME}>
      <SEO title={PAGE_NAME} />
      <ProjectsLayout/>
    </Layout>
  )
};

export default Projects;