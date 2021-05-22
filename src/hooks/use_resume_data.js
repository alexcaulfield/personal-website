import { useStaticQuery, graphql } from "gatsby";

export const useResumeData = () => {
  const {
    allGoogleSheetBlocksRow,
    allGoogleSheetHeaderRow,
    allGoogleSheetSkillgroupsRow,
  } = useStaticQuery(graphql`
    query resumeDataQuery {
      allGoogleSheetBlocksRow(filter: {}) {
        edges {
          node {
            name
            type
            position
            startdate
            enddate
            city
            state
            details
            link
            githublink
          }
        }
      }
      allGoogleSheetHeaderRow(filter: {}) {
        edges {
          node {
            name
            address
            email
            phone
            website
            github
            currentrole
            currentcompany
            currentcompanylink
            linkedin
            bio
            interests
          }
        }
      }
      allGoogleSheetSkillgroupsRow(filter: {}) {
        edges {
          node {
            frontend
            backend
            data
          }
        }
      }
    }
  `);

  const workBlocks = allGoogleSheetBlocksRow.edges.filter(
    ({ node }) => node.type === "work"
  );
  const eduBlocks = allGoogleSheetBlocksRow.edges.filter(
    ({ node }) => node.type === "education"
  );
  const projectBlocks = allGoogleSheetBlocksRow.edges.filter(
    ({ node }) => node.type === "project"
  );
  const headerBlocks = allGoogleSheetHeaderRow.edges;
  const skillBlocks = allGoogleSheetSkillgroupsRow.edges.map(
    ({ node }) => node
  );
  const allSkills = {
    Frontend: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.frontend !== null) {
        return [...skills, skillBlock.frontend];
      }
      return skills;
    }, []),
    Backend: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.backend !== null) {
        return [...skills, skillBlock.backend];
      }
      return skills;
    }, []),
    Data: skillBlocks.reduce((skills, skillBlock) => {
      if (skillBlock.data !== null) {
        return [...skills, skillBlock.data];
      }
      return skills;
    }, []),
  };

  return {
    workBlocks,
    eduBlocks,
    projectBlocks,
    headerBlocks,
    allSkills,
  };
};
