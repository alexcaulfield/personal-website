import React from "react";
import { Card, Icon } from "semantic-ui-react";
import WorkRole from "./work_role";
import { getTenureString } from "./resume_utils";
import { DarkModeCard, DarkModeIcon } from "./shared/shared_components";

const ProjectCard = ({
  place,
  startdate,
  enddate,
  roles,
  link,
  githublink,
}) => (
  <DarkModeCard>
    <Card.Content>
      <Card.Header>{place}</Card.Header>
      <Card.Meta>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <DarkModeIcon name="linkify" />
          </a>
        )}
        {githublink && (
          <a href={githublink} target="_blank" rel="noopener noreferrer">
            <DarkModeIcon name="github" />
          </a>
        )}
      </Card.Meta>
      {startdate && (
        <Card.Meta>
          {startdate} - {enddate ? enddate : "Present"} &#183;{" "}
          {getTenureString(startdate, enddate)}
        </Card.Meta>
      )}
      {roles.map(role => (
        <WorkRole {...role} />
      ))}
    </Card.Content>
  </DarkModeCard>
);

export default ProjectCard;
