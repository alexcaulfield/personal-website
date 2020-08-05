import React from 'react';
import { useNewResumeData } from "../hooks/use_new_resume_data";
import { Container, Header } from "semantic-ui-react"
import WorkRoleContainer from "./work_role_container"

const WorkPageLayout = () => {
  const {
    work,
    education,
  } = useNewResumeData();

  return (
    <Container>
      <Header size='medium'>Experience</Header>
      {work.map(place => <WorkRoleContainer {...place} />)}
    </Container>
  )
}

export default WorkPageLayout;
