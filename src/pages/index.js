import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResumeContainer from '../components/resume_container'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ResumeContainer />
  </Layout>
)

export default IndexPage
