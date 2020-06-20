import React, {useEffect, useState} from 'react'
import {Container, Responsive, Header as SemanticHeader, Button, Icon, Grid} from 'semantic-ui-react'
import {useResumeData} from '../hooks/use_resume_data';
import {PDFDownloadLink} from "@react-pdf/renderer";
import PdfDocument from "./resume_pdf";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"

const AboutMeHero = () => {
  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          fixed(width: 500, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  const {
    workBlocks,
    eduBlocks,
    projectBlocks,
    headerBlocks,
  } = useResumeData();
  const {node} = headerBlocks.length > 0 ? headerBlocks[0] : {};
  const {
    name,
    currentrole,
    currentcompany,
    bio,
    interests,
  } = node;
  return (
    <Container>
      <Responsive>
        <Grid>
          <Grid.Row>
            <Grid.Column widescreen={8} largeScreen={8} computer={8} only='computer'>
              <Img
                fixed={imgData.file.childImageSharp.fixed}
                alt="An image from my travels"
              />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} widescreen={8} largeScreen={8} computer={8}>
              <SemanticHeader as='h1'>Hey! 👋 My name is {name}</SemanticHeader>
              <SemanticHeader as='h3'>I'm currently a {currentrole} at {currentcompany}</SemanticHeader>
              <SemanticHeader as='h4'>{bio}</SemanticHeader>
              <SemanticHeader as='h4'>{interests}</SemanticHeader>
              <div style={{padding: 25, textAlign: "center"}}>
                {isClient && (
                  <PDFDownloadLink document={
                    <PdfDocument
                      headerNodes={headerBlocks}
                      workNodes={workBlocks}
                      eduNodes={eduBlocks}
                      projNodes={projectBlocks}
                    />
                  } fileName="alexcaulfield-resume.pdf">
                    {({ blob, url, loading, error }) =>
                      (loading ?
                        <Button secondary><Icon loading name='spinner' /></Button> :
                        <Button primary>Download my resume <Icon name='download' /></Button>
                      )}
                  </PDFDownloadLink>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  )
};

export default AboutMeHero;