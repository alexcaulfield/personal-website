import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResumeContainer from '../components/resume_container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ResumeContainer />
  </Layout>
)

export default IndexPage
