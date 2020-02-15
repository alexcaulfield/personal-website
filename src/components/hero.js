import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import { Image, Segment } from 'semantic-ui-react'
import LazyHero from 'react-lazy-hero'

const getRandomImg = (imageList) => {
  return imageList[Math.floor((Math.random() * imageList.length) + 1)]
}

const Hero = () => {
  const heroData = useStaticQuery(graphql`
    query heroQuery{
      heroImage: allImageSharp(filter: {fixed: {originalName: {eq:"headshot-site.jpg"}}}) {
        nodes {
          fixed {
            src
          }
        }
      }
      backgrounds: allImageSharp(filter: {fixed: {originalName: {regex: "/IMG/"}}}) {
        nodes {
          fixed(width: 2000) {
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

  const headshotSrc = heroData.heroImage.nodes.length > 0 ? heroData.heroImage.nodes[0].fixed.src : ''
  const bio = heroData.allGoogleSheetHeaderRow.edges ? heroData.allGoogleSheetHeaderRow.edges[0].node.bio : ''
  const backgroundImgSrc = heroData.backgrounds.nodes.map(node => node.fixed.src)
  return (
    <div style={{width: '100%'}}>
      <LazyHero
        imageSrc={getRandomImg(backgroundImgSrc)}
        opacity={0}
        parallaxOffset={70}
      >
        <div
          style={{
            maxWidth:'960px'
          }}
        >
          <Image src={headshotSrc} size='small' circular centered bordered />
          <Segment>{bio}</Segment>
        </div>
      </LazyHero>
    </div>
  )
}

export default Hero