import React from "react";
import { Label, Card } from "semantic-ui-react";
import { getTenureString } from "./resume_utils";

const WorkRole = ({ role, startdate, enddate, skills, details }) => (
  <Card fluid style={{ backgroundColor: "var(--bg)" }}>
    <Card.Content>
      {role && (
        <Card.Header style={{ color: "var(--textNormal)" }}>{role}</Card.Header>
      )}
      {startdate && (
        <Card.Meta style={{ color: "var(--textNormal)" }}>
          {startdate} - {enddate ? enddate : "Present"} &#183;{" "}
          {getTenureString(startdate, enddate)}
        </Card.Meta>
      )}
      {details.map(detail => (
        <Card.Description style={{ color: "var(--textNormal)" }}>
          {detail}
        </Card.Description>
      ))}
      <Card.Content extra>
        {skills.map(skill => (
          <Label
            basic
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--textNormal)",
              borderColor: "var(--textNormal)",
              marginBottom: "8px",
            }}
          >
            {skill}
          </Label>
        ))}
      </Card.Content>
    </Card.Content>
  </Card>
);

export default WorkRole;
