import React from "react";
import WorkBlock from "./work_block";
import EducationBlock from "./education_block";
import { Header, Container } from "semantic-ui-react";
import { useResumeData } from "../hooks/use_resume_data";

const WorkLayout = () => {
  const { workBlocks, eduBlocks } = useResumeData();
  return (
    <Container>
      <Header size="medium">Experience</Header>
      {workBlocks.map(({ node }) => {
        const {
          name,
          position,
          startdate,
          enddate,
          city,
          state,
          details,
          tags,
          link,
        } = node;
        return (
          <WorkBlock
            name={name}
            position={position}
            startdate={startdate}
            enddate={enddate}
            city={city}
            state={state}
            details={details}
            tags={tags}
            link={link}
          />
        );
      })}
      <Header size="medium">Education</Header>
      {eduBlocks.map(({ node }) => {
        const { name, position, startdate, enddate, city, state, tags } = node;
        return (
          <EducationBlock
            name={name}
            position={position}
            startdate={startdate}
            enddate={enddate}
            city={city}
            state={state}
            tags={tags}
          />
        );
      })}
    </Container>
  );
};

export default WorkLayout;
