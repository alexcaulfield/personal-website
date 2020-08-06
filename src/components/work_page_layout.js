import React, {useState} from 'react';
import { useNewResumeData } from "../hooks/use_new_resume_data";
import { Container, Header, Card, Button } from "semantic-ui-react"
import WorkRoleContainer from "./work_role_container"
import SkillSelector from "./skill_selector"

const WorkPageLayout = () => {
  const {
    work,
    education,
    project,
    volunteer,
    allSkills,
  } = useNewResumeData();

  const [skillToSelect, setSkillToSelect] = useState('');
  const [experiencesToDisplay, setExperiencesToDisplay] = useState(work);
  const [isAccordionOpen, setAccordionOpen] = useState(false)

  const handleSkillSelect = skill => {
    if (skill === skillToSelect) {
      setSkillToSelect('');
      setExperiencesToDisplay(work);
    } else {
      setSkillToSelect(skill);
      setExperiencesToDisplay(experiencesToDisplay.filter(experience => {
        const experienceSkills = experience.roles.reduce((skills, role) => [...skills, ...role.skills], []);
        return experienceSkills.includes(skill);
      }))
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
      {experiencesToDisplay.length > 0 && <Header size='medium'>Experience</Header>}
      {experiencesToDisplay.map(place => <WorkRoleContainer {...place} />)}
    </Container>
  )
}

export default WorkPageLayout;
