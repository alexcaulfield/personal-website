import React from 'react'
import { 
  Item, 
  Header, 
  Button 
} from 'semantic-ui-react';
import {
  getImgData,
} from '../components/resume_utils'
import { useStaticQuery, graphql } from "gatsby"

const EducationBlock = ({
  name,
  position,
  startdate,
  enddate,
  city,
  state,
  tags,
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
  } = getImgData(name, photoData)

  const tagsArray = tags ? tags.split(', ') : [];
  return (
    <div>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={logo} alt={alt}/>
          <Item.Content>
            <Item.Header as='a'>{position}</Item.Header>
            <Item.Meta><Header size='small'>{name}</Header></Item.Meta>
            <Item.Meta>{startdate} - {enddate ? enddate : 'Present'}</Item.Meta>
            <Item.Meta>{city}, {state}</Item.Meta>
            <Item.Extra>
              {tagsArray.map(tag => {
                return <Button basic>{tag}</Button>
              })}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <br />
    </div>
  )
}

export default EducationBlock