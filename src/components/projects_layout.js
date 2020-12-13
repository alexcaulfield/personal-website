import React from "react"
import { Container, Card } from "semantic-ui-react"
import ProjectBlock from "./project_block"
import { useResumeData } from "../hooks/use_resume_data"

const ProjectsLayout = () => {
  const { projectBlocks } = useResumeData()
  return (
    <Container>
      <Card.Group>
        {projectBlocks.map(({ node }) => {
          const { name, details, tags, link, githublink } = node
          return (
            <ProjectBlock
              name={name}
              details={details}
              tags={tags}
              link={link}
              githublink={githublink}
            />
          )
        })}
      </Card.Group>
    </Container>
  )
}

export default ProjectsLayout
