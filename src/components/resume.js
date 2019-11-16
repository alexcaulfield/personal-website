import React from 'react'
import WorkBlock from '../components/work_block'
import EducationBlock from '../components/education_block'
import { useStaticQuery, graphql } from "gatsby"
import { Header } from 'semantic-ui-react'

const Resume = () => {
  const data = useStaticQuery(graphql`
    query workQuery {
      allGoogleSheetWorkRow(filter: {}) {
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
          }
        }
      }
    }
  `)

  const workBlocks = data.allGoogleSheetWorkRow.edges.filter(({node}) => node.type === 'work')
  const eduBlocks = data.allGoogleSheetWorkRow.edges.filter(({node}) => node.type === 'education')

  return (
    <div>
      <Header size='large'>Alex Caulfield</Header>
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
    </div>
  )
}

export default Resume