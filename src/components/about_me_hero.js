import React, { useEffect, useState } from "react";
import { Container, Responsive, Button, Icon, Grid } from "semantic-ui-react";
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
                My name is Alex Caulfield.
              </DarkModeHeader>
              <DarkModeHeader as="h3">
                I'm currently a Software Engineer at{" "}
                <a
                  href="https://reddit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reddit
                </a>
                .
              </DarkModeHeader>
              <DarkModeHeader as="h4">
                I'm an experienced full stack software engineer with a passion for helping others build their engineering skills, creating intuitive user interfaces, and developing with frontend technologies like React, TypeScript, and GraphQL.
              </DarkModeHeader>
              <DarkModeHeader as="h4">
              When I'm away from my computer, you can find me making a pizza, traveling, hiking, biking, throwing a frisbee, or playing guitar.
              </DarkModeHeader>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  );
};

export default AboutMeHero;
