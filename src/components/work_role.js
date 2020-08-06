import React from 'react';
import { Button, Card } from "semantic-ui-react"
import { getTenureString } from "./resume_utils"

const WorkRole = ({
  role,
  startdate,
  enddate,
  skills,
  details,
}) => (
  <Card fluid>
    <Card.Content>
      {role && <Card.Header>{role}</Card.Header>}
      {startdate && <Card.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)}</Card.Meta>}
      {details.map(detail => <Card.Description>{detail}</Card.Description>)}
      <Card.Content extra>
        {skills.map(skill => <Button basic>{skill}</Button>)}
      </Card.Content>
    </Card.Content>
  </Card>
)

export default WorkRole;