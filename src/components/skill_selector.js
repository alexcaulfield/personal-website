import React from "react";
import { Accordion, Button, Card, Icon } from "semantic-ui-react";
import {DarkModeCard, DarkModeButton} from './shared/shared_components';

const SkillSelector = ({
  allSkills,
  skillToSelect,
  handleSkillSelect,
  isOpen,
  setIsOpen,
}) => (
  <Accordion fluid styled>
    <Accordion.Title
      active={isOpen}
      index={0}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon name="dropdown" />
      Filter By Skill
    </Accordion.Title>
    <Accordion.Content active={isOpen}>
      <DarkModeCard fluid>
        {Object.keys(allSkills).map((skillType, index) => (
          <Card.Content extra>
            {skillType} &nbsp;
            {allSkills[skillType].map(skill => (
              <DarkModeButton
                basic
                onClick={() => handleSkillSelect(skill)}
                active={skillToSelect === skill}
                disabled={skillToSelect !== skill && skillToSelect !== ""}
              >
                {skill}
              </DarkModeButton>
            ))}
          </Card.Content>
        ))}
      </DarkModeCard>
    </Accordion.Content>
  </Accordion>
);

export default SkillSelector;
