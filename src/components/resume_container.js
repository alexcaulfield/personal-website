import React, {useState, useEffect} from 'react'
import WorkBlock from './work_block'
import EducationBlock from './education_block'
import ProjectBlock from './project_block'
import { useStaticQuery, graphql } from "gatsby"
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfDocument from '../components/resume_pdf'
import {  
  Header, 
  Button, 
  Icon, 
} from 'semantic-ui-react';

const ResumeContainer = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const data = useStaticQuery(graphql`
    query blocksQuery {
      allGoogleSheetBlocksRow(filter: {}) {
        edges {
          node {
            name
            type
            position
            startdate
            enddate
            city
            state
            details
            tags
            link
          }
        }
      }
      allGoogleSheetHeaderRow(filter: {}) {
        edges {
          node {
            name
            address
            email
            phone
            website
          }
        }
      }
    }
  `)

  const workBlocks = data.allGoogleSheetBlocksRow.edges.filter(({node}) => node.type === 'work')
  const eduBlocks = data.allGoogleSheetBlocksRow.edges.filter(({node}) => node.type === 'education')
  const projectBlocks = data.allGoogleSheetBlocksRow.edges.filter(({node}) => node.type === 'project')

  return (
    <>
      <div style={{padding: 25, textAlign: "center"}}>
        {isClient && (
          <PDFDownloadLink document={
            <PdfDocument 
              headerNodes={data.allGoogleSheetHeaderRow.edges}
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
        <div style={{padding: 10}}>
          <a href="https://www.linkedin.com/in/alexandercaulfield/" target="_blank"><Icon name='linkedin' size='huge'></Icon></a>
          <a href="https://github.com/alexcaulfield" target="_blank"><Icon name='github' size='huge'></Icon></a>
          <a href="mailto:alex@alexcaulfield.com"><Icon name='mail' size='huge'></Icon></a>
        </div>
      </div>
         
      <div>
        <Header size='medium'>Experience</Header>
        {workBlocks.map(({node}) => {
          const {
            name,
            position,
            startdate,
            enddate,
            city,
            state,
            details,
            tags,
            link,
          } = node
            return (
              <WorkBlock
                name={name}
                position={position}
                startdate={startdate}
                enddate={enddate}
                city={city}
                state={state}
                details={details}
                tags={tags}
                link={link}
              />
            )
          }
        )}
        <Header size='medium'>Education</Header>
        {eduBlocks.map(({node}) => {
          const {
            name,
            position,
            startdate,
            enddate,
            city,
            state,
            tags,
          } = node
            return (
              <EducationBlock
                name={name}
                position={position}
                startdate={startdate}
                enddate={enddate}
                city={city}
                state={state}
                tags={tags}
              />
            )
        })}
        <Header size='medium'>Projects</Header>
        {projectBlocks.map(({node}) => {
          const {
            name,
            details,
            tags,
            link,
          } = node
            return (
              <ProjectBlock
                name={name}
                details={details}
                tags={tags}
                link={link}
              />
            )
        })}
      </div>
    </>
  )
}

export default ResumeContainer