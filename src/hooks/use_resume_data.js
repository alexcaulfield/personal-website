import { useStaticQuery, graphql } from "gatsby";

export const useResumeData = () => {
  const {
    allGoogleSheetBlocksRow,
    allGoogleSheetHeaderRow,
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
            tags
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
            bio
            interests
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

  return {
    workBlocks,
    eduBlocks,
    projectBlocks,
    headerBlocks,
  };
};
