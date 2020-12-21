import React from "react"
import { Button, Card, Icon } from "semantic-ui-react"

const ProjectBlock = ({ name, details, tags, link, githublink }) => {
  const detailsArray = details.split(/\n/g)
  const tagsArray = tags ? tags.split(", ") : []
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" name={`${name} link`}>
              <Icon name="linkify" />
            </a>
          )}
          {githublink && (
            <a href={githublink} target="_blank" rel="noopener noreferrer" name={`${name} github link`}>
              <Icon name="github" />
            </a>
          )}
        </Card.Meta>
        {detailsArray.map(detail => {
          return <Card.Description>{detail}</Card.Description>
        })}
      </Card.Content>
      <Card.Content extra>
        {tagsArray.map(tag => {
          return <Button basic>{tag}</Button>
        })}
      </Card.Content>
    </Card>
  )
}

export default ProjectBlock
