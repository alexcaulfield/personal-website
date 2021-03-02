import { graphql, useStaticQuery } from "gatsby"

const joinRolesToExperiences = (roles, experiences) => {
  return experiences.map(experience => {
    const rolesForExperience = roles.filter(
      role => role.place === experience.place && role.type === experience.type
    )
    const rolesFinal = rolesForExperience.map(
      ({ role, startdate, enddate, description, skills }) => {
        let splitSkills = []
        if (skills) {
          splitSkills = skills.split(", ")
        }
        const details = description ? description.split(/\n/g) : []
        return {
          role,
          startdate,
          enddate,
          details: details,
          skills: splitSkills,
        }
      }
    )
    return {
      ...experience,
      roles: rolesFinal,
    }
  })
}

export const useNewResumeData = () => {
  const {
    allGoogleSheetExperienceRow,
    allGoogleSheetRolesRow,
    allGoogleSheetSkillgroupsRow,
  } = useStaticQuery(graphql`
    query newResumeQuery {
      allGoogleSheetExperienceRow(filter: {}) {
        edges {
          node {
            type
            place
            city
            state
            startdate
            enddate
            link
            githublink
          }
        }
      }
      allGoogleSheetRolesRow(filter: {}) {
        edges {
          node {
            type
            place
            role
            startdate
            enddate
            description
            skills
          }
        }
      }
      allGoogleSheetSkillgroupsRow(filter: {}) {
        edges {
          node {
            frontend
            backend
            data
            ux
            tools
            apis
          }
        }
      }
    }
  `)

  const experiences = allGoogleSheetExperienceRow.edges.map(({ node }) => node)
  const roles = allGoogleSheetRolesRow.edges.map(({ node }) => node)
  const joinedExperiences = joinRolesToExperiences(roles, experiences)

  const skillBlocks = allGoogleSheetSkillgroupsRow.edges.map(({ node }) => node)
  const allSkills = {
    Frontend: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.frontend !== null) {
        return [...skills, skillBlock.frontend]
      }
      return skills
    }, []),
    Backend: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.backend !== null) {
        return [...skills, skillBlock.backend]
      }
      return skills
    }, []),
    Data: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.data !== null) {
        return [...skills, skillBlock.data]
      }
      return skills
    }, []),
    UX: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.ux !== null) {
        return [...skills, skillBlock.ux]
      }
      return skills
    }, []),
    Tools: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.tools !== null) {
        return [...skills, skillBlock.tools]
      }
      return skills
    }, []),
    APIs: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.apis !== null) {
        return [...skills, skillBlock.apis]
      }
      return skills
    }, []),
  }

  return {
    work: joinedExperiences.filter(experience => experience.type === "work"),
    education: joinedExperiences.filter(
      experience => experience.type === "education"
    ),
    project: joinedExperiences.filter(
      experience => experience.type === "project"
    ),
    volunteer: joinedExperiences.filter(
      experience => experience.type === "volunteer"
    ),
    allSkills,
  }
}
