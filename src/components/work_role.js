import React from 'react';
import { Button, Card, Icon } from "semantic-ui-react"
import { getTenureString } from "./resume_utils"

const WorkRole = ({
  role,
  startdate,
  enddate,
  skills,
  details,
  link,
  githublink,
}) => (
  <Card fluid>
    <Card.Content>
      {role && <Card.Header>{role}</Card.Header>}
      <Card.Meta>
        {link && <a href={link} target="_blank" rel="noopener noreferrer"><Icon name='linkify'/></a>}
        {githublink && <a href={githublink} target="_blank" rel="noopener noreferrer"><Icon name='github'/></a>}
      </Card.Meta>
      {startdate && <Card.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)}</Card.Meta>}
      {details.map(detail => <Card.Description>{detail}</Card.Description>)}
      <Card.Content extra>
        {skills.map(skill => <Button basic>{skill}</Button>)}
      </Card.Content>
    </Card.Content>
  </Card>
)

export default WorkRole;