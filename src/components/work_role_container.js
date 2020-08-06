import React from 'react';
import {
  Item,
  Card,
} from 'semantic-ui-react';
import {
  getTenureString,
  getImgData
} from "./resume_utils"
import WorkRole from "./work_role"
import { graphql, useStaticQuery } from "gatsby"

const WorkRoleContainer = ({
  place,
  startdate,
  enddate,
  city,
  state,
  roles,
  type,
}) => {
  const photoData = useStaticQuery(graphql`
    query {
      allImageSharp(filter: {fixed: {originalName: {eq:"nhs_logo.png"}}}) {
        nodes {
          fixed {
            src
          }
        }
      }
    }
  `);
  const {
    logo,
    alt
  } = getImgData(place, photoData)

  return (
    <Item.Group divided>
      <Item>
        <Item.Image size='tiny' src={logo} alt={alt}/>
        <Item.Content>
          <Item.Header>{place}</Item.Header>
          <Item.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {!(type === 'education') && getTenureString(startdate, enddate)} &#183; {city}, {state} </Item.Meta>
          <Card.Group>
            {roles.map(role => <WorkRole {...role} />)}
          </Card.Group>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default WorkRoleContainer;