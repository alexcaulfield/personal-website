import React from "react";
import { Accordion, Button, Card, Icon } from "semantic-ui-react";

const SkillSelector = ({
  allSkills,
  skillToSelect,
  handleSkillSelect,
  isOpen,
  setIsOpen,
}) => (
  <Accordion fluid styled style={{ backgroundColor: "var(--bg)" }}>
    <Accordion.Title
      active={isOpen}
      index={0}
      onClick={() => setIsOpen(!isOpen)}
      style={{ color: "var(--textNormal)" }}
    >
      <Icon name="dropdown" />
      Filter By Skill
    </Accordion.Title>
    <Accordion.Content active={isOpen}>
      <Card fluid style={{ backgroundColor: "var(--bg)" }}>
        {Object.keys(allSkills).map((skillType, index) => (
          <Card.Content extra style={{ color: "var(--textNormal)" }}>
            {skillType} &nbsp;
            {allSkills[skillType].map(skill => (
              <Button
                primary
                onClick={() => handleSkillSelect(skill)}
                active={skillToSelect === skill}
                disabled={skillToSelect !== skill && skillToSelect !== ""}
                style={{ marginBottom: "8px" }}
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
