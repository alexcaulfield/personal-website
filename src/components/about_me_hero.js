import React, {useEffect, useState} from 'react'
import {Container, Responsive, Header as SemanticHeader, Button, Icon} from 'semantic-ui-react'
import {useResumeData} from '../hooks/use_resume_data';
import {PDFDownloadLink} from "@react-pdf/renderer";
import PdfDocument from "./resume_pdf";

const AboutMeHero = ({role, company, description}) => {
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
  return (
    <Container>
      <Responsive>
        <SemanticHeader as='h1'>Hey! 👋 my name is Alex Caulfield</SemanticHeader>
        <SemanticHeader as='h3'>I'm currently a {role} at {company}</SemanticHeader>
        <SemanticHeader as='h4'>I'm an experienced full stack software engineer with a passion for helping others build engineering their skills, developing intuitive user interfaces, and developing with frontend technologies like React, TypeScript, and GraphQL</SemanticHeader>
        <SemanticHeader as='h4'>When I'm away from my computer, you can find me cooking, traveling, hiking, throwing a frisbee, or playing guitar</SemanticHeader>
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
      </Responsive>
    </Container>
  )
};

export default AboutMeHero;