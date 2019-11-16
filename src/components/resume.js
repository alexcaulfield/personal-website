import React from 'react'
import WorkBlock from '../components/work_block'
import { useStaticQuery, graphql } from "gatsby"
import { Item } from 'semantic-ui-react';

const Resume = () => {
  const workExperienceData = useStaticQuery(graphql`
    query workQuery {
      allGoogleSheetWorkRow(filter: { type: {eq: "work"}}) {
        edges {
          node {
            name
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
  
  return (
    <div>
      {workExperienceData.allGoogleSheetWorkRow.edges.map((node) => {
        return (
          <WorkBlock
            workData={node}
          />
        )
      })}
    </div>
  )
}

export default Resume