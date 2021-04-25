import React from "react";
import { Accordion, Button, Card, Icon } from "semantic-ui-react";

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
      <Card fluid>
        {Object.keys(allSkills).map((skillType, index) => (
          <Card.Content extra>
            {skillType} &nbsp;
            {allSkills[skillType].map(skill => (
              <Button
                basic
                onClick={() => handleSkillSelect(skill)}
                active={skillToSelect === skill}
                disabled={skillToSelect !== skill && skillToSelect !== ""}
              >
                {skill}
              </Button>
            ))}
          </Card.Content>
        ))}
      </Card>
    </Accordion.Content>
  </Accordion>
);

export default SkillSelector;
