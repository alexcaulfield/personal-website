import React from "react"
import AboutMeHero from '../components/about_me_hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMeHero role='Software Engineer' company='Wayfair'/>
  </Layout>
);

export default IndexPage
