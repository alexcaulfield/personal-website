import React from "react";
import { Accordion, Button, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { DarkModeCard } from './shared/shared_components';

const DarkModeAccordion = styled(Accordion)`
  background-color: var(--bg) !important;
  .title {
    color: var(--textNormal) !important;
  }
`;

const SpacedButton = styled(Button)`
  margin-bottom: 8px !important;
`;

const SkillSelector = ({
  allSkills,
  skillToSelect,
  handleSkillSelect,
  isOpen,
  setIsOpen,
}) => (
  <DarkModeAccordion fluid styled>
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
              <SpacedButton
                primary
                onClick={() => handleSkillSelect(skill)}
                active={skillToSelect === skill}
                disabled={skillToSelect !== skill && skillToSelect !== ""}
              >
                {skill}
              </SpacedButton>
            ))}
          </Card.Content>
        ))}
      </DarkModeCard>
    </Accordion.Content>
  </DarkModeAccordion>
);

export default SkillSelector;
