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
  Container,
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

  return (
    <Container>
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
    </Container>
  )
}

export default ResumeContainer