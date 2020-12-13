import React from "react"
import { Header as SemanticHeader, Icon, Segment } from "semantic-ui-react"

const Footer = () => (
  <Segment.Group horizontal>
    <Segment textAlign="right">
      <a
        href="https://www.linkedin.com/in/alexandercaulfield/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" size="big" />
      </a>
      <a
        href="https://github.com/alexcaulfield"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" size="big" />
      </a>
      <a href="mailto:alex@alexcaulfield.com">
        <Icon name="mail" size="big" />
      </a>
    </Segment>
    <Segment>
      <SemanticHeader as="h5">
        <Icon name="copyright outline" />
        <SemanticHeader.Content>
          {new Date().getFullYear()} Alex Caulfield
          <SemanticHeader.Subheader>
            Made with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </SemanticHeader.Subheader>
        </SemanticHeader.Content>
      </SemanticHeader>
    </Segment>
  </Segment.Group>
)

export default Footer
