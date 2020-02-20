import React from 'react'
import { 
  Item, 
  Button 
} from 'semantic-ui-react';

const ProjectBlock = ({
  name,
  details,
  tags,
  link,
}) => {

  const detailsArray = details.split(/\n/g)
  const tagsArray = tags ? tags.split(', ') : []
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