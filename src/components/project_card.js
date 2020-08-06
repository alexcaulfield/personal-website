import React from 'react';
import { Card } from "semantic-ui-react";
import WorkRole from "./work_role";
import { getTenureString } from "./resume_utils"

const ProjectCard = ({
  place,
  startdate,
  enddate,
  roles,
}) => (
  <Card>
    <Card.Content>
      <Card.Header>{place}</Card.Header>
      {startdate && <Card.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)}</Card.Meta>}
      {roles.map(role => <WorkRole {...role} />)}
    </Card.Content>
  </Card>
);

export default ProjectCard;