import { graphql, useStaticQuery } from "gatsby"

const joinRolesToExperiences = (roles, experiences) => {
  return experiences.map(experience => {
    const rolesForExperience = roles.filter(role => role.place === experience.place && role.type === experience.type)
    const rolesFinal = rolesForExperience.map(({
      role,
      startdate,
      enddate,
      description,
      skills,
    }) => {
      let splitSkills = []
      if (skills) {
        splitSkills = skills.split(', ')
      }
      const details = description.split(/\n/g)
      return {
        role,
        startdate,
        enddate,
        details: details,
        skills: splitSkills,
      }
    })
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
    }
  `);

  const experiences = allGoogleSheetExperienceRow.edges.map(({node}) => node);
  const roles       = allGoogleSheetRolesRow.edges.map(({node}) => node);
  const joinedExperiences = joinRolesToExperiences(roles, experiences);

  return {
    work: joinedExperiences.filter(experience => experience.type === 'work'),
    education: joinedExperiences.filter(experience => experience.type === 'education'),
    project: joinedExperiences.filter(experience => experience.type === 'project'),
  };
}