import React from 'React';
import {Container} from "semantic-ui-react";
import ProjectBlock from "./project_block";
import {useResumeData} from "../hooks/use_resume_data";

const ProjectsLayout = () => {
  const {
    projectBlocks,
  } = useResumeData();
  return (
    <Container>
      {projectBlocks.map(({node}) => {
        const {
          name,
          details,
          tags,
          link,
        } = node
        return (
          <ProjectBlock
            name={name}
            details={details}
            tags={tags}
            link={link}
          />
        )
      })}
    </Container>
  );
};

export default ProjectsLayout;