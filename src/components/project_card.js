import React from "react";
import { Card, Icon } from "semantic-ui-react";
import WorkRole from "./work_role";
import { getTenureString } from "./resume_utils";

const ProjectCard = ({
  place,
  startdate,
  enddate,
  roles,
  link,
  githublink,
}) => (
  <Card style={{ backgroundColor: "var(--bg)" }}>
    <Card.Content>
      <Card.Header style={{ color: "var(--textNormal)" }}>{place}</Card.Header>
      <Card.Meta>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon name="linkify" style={{ color: "var(--textNormal)" }} />
          </a>
        )}
        {githublink && (
          <a href={githublink} target="_blank" rel="noopener noreferrer">
            <Icon name="github" style={{ color: "var(--textNormal)" }} />
          </a>
        )}
      </Card.Meta>
      {startdate && (
        <Card.Meta style={{ color: "var(--textNormal)" }}>
          {startdate} - {enddate ? enddate : "Present"} &#183;{" "}
          {getTenureString(startdate, enddate)}
        </Card.Meta>
      )}
      {roles.map(role => (
        <WorkRole {...role} />
      ))}
    </Card.Content>
  </Card>
);

export default ProjectCard;
