import React from 'react'
import { 
  Item, 
  Header, 
  Button 
} from 'semantic-ui-react';
import {
  getTenureString,
  getImgData
} from '../components/resume_utils'

const ProjectBlock = ({
  name,
  details,
  tags,
  link,
}) => {


  const detailsArray = details.split(/\n/g)
  const tagsArray = tags.split(', ')
  return (
    <div>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as='a'><a href={link}>{name}</a></Item.Header>
            {detailsArray.map(detail => {
              return <Item.Description>{detail}</Item.Description>
            })}
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

export default ProjectBlock