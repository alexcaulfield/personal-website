import React, {useState} from 'react';
import { useNewResumeData } from "../hooks/use_new_resume_data";
import { Container, Header, Card, } from "semantic-ui-react";
import WorkRoleContainer from "./work_role_container";
import SkillSelector from "./skill_selector";
import ProjectCard from "./project_card";

const WorkPageLayout = () => {
  const {
    work,
    education,
    project,
    volunteer,
    allSkills,
  } = useNewResumeData();
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const [skillToSelect, setSkillToSelect] = useState('');
  const [experiencesToDisplay, setExperiencesToDisplay] = useState(work);
  const [educationToDisplay, setEducationToDisplay] = useState(education);
  const [volunteerToDisplay, setVolunteerToDisplay] = useState(volunteer);
  const [projectToDisplay, setProjectToDisplay] = useState(project);

  const filterSkillsToDisplay = (experiencesToDisplay, skill) => {
    return experiencesToDisplay.filter(experience => {
      const experienceSkills = experience.roles.reduce((skills, role) => [...skills, ...role.skills], []);
      return experienceSkills.includes(skill);
    })
  }

  const handleSkillSelect = skill => {
    if (skill === skillToSelect) {
      setSkillToSelect('');
      setExperiencesToDisplay(work);
      setEducationToDisplay(education);
      setVolunteerToDisplay(volunteer);
      setProjectToDisplay(project);
    } else {
      setSkillToSelect(skill);
      setExperiencesToDisplay(filterSkillsToDisplay(experiencesToDisplay, skill));
      setEducationToDisplay(filterSkillsToDisplay(educationToDisplay, skill));
      setVolunteerToDisplay(filterSkillsToDisplay(volunteerToDisplay, skill));
      setProjectToDisplay(filterSkillsToDisplay(projectToDisplay, skill));
    }
  }

  return (
    <Container>
      <SkillSelector
        allSkills={allSkills}
        skillToSelect={skillToSelect}
        handleSkillSelect={handleSkillSelect}
        isOpen={isAccordionOpen}
        setIsOpen={setAccordionOpen}
      />
      {projectToDisplay.length > 0 && <Header size='medium'>Projects</Header>}
      {projectToDisplay.length > 0 && (
        <Card.Group>
          {projectToDisplay.map(project => <ProjectCard {...project} />)}
        </Card.Group>
      )}
      {experiencesToDisplay.length > 0 && <Header size='medium'>Experience</Header>}
      {experiencesToDisplay.map(place => <WorkRoleContainer {...place} />)}
      {educationToDisplay.length > 0 && <Header size='medium'>Education</Header>}
      {educationToDisplay.map(place => <WorkRoleContainer {...place} />)}
      {volunteerToDisplay.length > 0 && <Header size='medium'>Volunteer</Header>}
      {volunteerToDisplay.map(place => <WorkRoleContainer {...place} />)}
    </Container>
  )
}

export default WorkPageLayout;
