import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import { Image, Segment } from 'semantic-ui-react'

const Hero = () => {
  const heroData = useStaticQuery(graphql`
    query heroQuery{
      allImageSharp(filter: {fixed: {originalName: {eq:"headshot-site.jpg"}}}) {
        nodes {
          fixed {
            src
          }
        }
      }
      allGoogleSheetHeaderRow(filter: {}) {
          edges {
              node {
                  bio
              }
          }
      }
    }
  `);

  const headshotSrc = heroData.allImageSharp.nodes.length > 0 ? heroData.allImageSharp.nodes[0].fixed.src : ''
  const bio = heroData.allGoogleSheetHeaderRow.edges ? heroData.allGoogleSheetHeaderRow.edges[0].node.bio : ''
  return (
    <div>
      <Image src={headshotSrc} size='small' circular centered bordered />
      <Segment>{bio}</Segment>
    </div>
  )
}

export default Hero