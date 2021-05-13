import React, { useEffect, useState } from "react";
import { Container, Responsive, Button, Icon, Grid } from "semantic-ui-react";
import { useResumeData } from "../hooks/use_resume_data";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./resume_pdf";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { DarkModeHeader } from "./shared/shared_components";
import styled from "styled-components";

const ImageWrapper = styled.div`
  margin-bottom: 2vh;
`;

const ButtonWrapper = styled.div`
  padding: 25px;
  text-align: center;
`;

const AboutMeHero = () => {
  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    workBlocks,
    eduBlocks,
    projectBlocks,
    headerBlocks,
    allSkills,
  } = useResumeData();
  const { node } = headerBlocks.length > 0 ? headerBlocks[0] : {};
  const {
    name,
    currentrole,
    currentcompany,
    currentcompanylink,
    bio,
    interests,
  } = node;
  return (
    <Container>
      <Responsive>
        <Grid>
          <Grid.Row>
            <Grid.Column
              widescreen={8}
              computer={16}
              largeScreen={8}
              mobile={16}
              tablet={16}
              textAlign="center"
            >
              <ImageWrapper>
                <Img
                  fluid={imgData.file.childImageSharp.fluid}
                  alt="An image from my travels"
                />
              </ImageWrapper>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              widescreen={8}
              largeScreen={8}
              computer={16}
            >
              <DarkModeHeader as="h1">
                Hey!{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>{" "}
                My name is {name}.
              </DarkModeHeader>
              <DarkModeHeader as="h3">
                I'm currently a {currentrole} at{" "}
                <a
                  href={currentcompanylink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentcompany}
                </a>
                .
              </DarkModeHeader>
              <DarkModeHeader as="h4">{bio}</DarkModeHeader>
              <DarkModeHeader as="h4">{interests}</DarkModeHeader>
              <ButtonWrapper>
                {isClient && (
                  <PDFDownloadLink
                    document={
                      <PdfDocument
                        headerNodes={headerBlocks}
                        workNodes={workBlocks}
                        eduNodes={eduBlocks}
                        projNodes={projectBlocks}
                        allSkills={allSkills}
                      />
                    }
                    fileName="alexcaulfield-resume.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        <Button secondary>
                          <Icon loading name="spinner" />
                        </Button>
                      ) : (
                        <Button primary>
                          Download my resume <Icon name="download" />
                        </Button>
                      )
                    }
                  </PDFDownloadLink>
                )}
              </ButtonWrapper>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  );
};

export default AboutMeHero;
