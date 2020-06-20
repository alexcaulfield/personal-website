import React from "react"
import AboutMeHero from '../components/about_me_hero'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResumeContainer from '../components/resume_container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMeHero />
  </Layout>
)

export default IndexPage
