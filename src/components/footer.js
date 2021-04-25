import React from "react";
import { Icon, Segment } from "semantic-ui-react";
import { DarkModeHeader } from "./shared/shared_components";

const Footer = () => (
  <Segment.Group horizontal style={{ backgroundColor: "var(--bg)" }}>
    <Segment textAlign="right">
      <a
        href="https://www.linkedin.com/in/alexandercaulfield/"
        target="_blank"
        rel="noopener noreferrer"
        name="linkedin"
      >
        <Icon name="linkedin" size="big" />
      </a>
      <a
        href="https://github.com/alexcaulfield"
        target="_blank"
        rel="noopener noreferrer"
        name="github"
      >
        <Icon name="github" size="big" />
      </a>
      <a href="mailto:alex@alexcaulfield.com" name="email">
        <Icon name="mail" size="big" />
      </a>
    </Segment>
    <Segment>
      <DarkModeHeader as="h5">
        <DarkModeHeader.Content>
          <Icon name="copyright outline" />
          {new Date().getFullYear()} Alex Caulfield
          <DarkModeHeader.Subheader>
            Made with{" "}
            <a href="https://www.gatsbyjs.org" name="Gatsby">
              Gatsby
            </a>
          </DarkModeHeader.Subheader>
        </DarkModeHeader.Content>
      </DarkModeHeader>
    </Segment>
  </Segment.Group>
);

export default Footer;
