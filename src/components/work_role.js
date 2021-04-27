import React from "react";
import { Card } from "semantic-ui-react";
import { getTenureString } from "./resume_utils";
import { DarkModeCard, DarkModeLabel } from "./shared/shared_components";

const WorkRole = ({ role, startdate, enddate, skills, details }) => (
  <DarkModeCard fluid>
    <Card.Content>
      {role && <Card.Header>{role}</Card.Header>}
      {startdate && (
        <Card.Meta>
          {startdate} - {enddate ? enddate : "Present"} &#183;{" "}
          {getTenureString(startdate, enddate)}
        </Card.Meta>
      )}
      {details.map(detail => (
        <Card.Description>{detail}</Card.Description>
      ))}
      <Card.Content extra>
        {skills.map(skill => (
          <DarkModeLabel basic>{skill}</DarkModeLabel>
        ))}
      </Card.Content>
    </Card.Content>
  </DarkModeCard>
);

export default WorkRole;
