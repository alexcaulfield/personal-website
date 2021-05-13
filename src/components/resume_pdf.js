import React from "react";
import { Font, View, Document } from "@react-pdf/renderer";
import HeaderPdf from "../components/pdf_components/header";
import WorkPdfBlock from "../components/pdf_components/work_pdf_block";
import EduPdfBlock from "../components/pdf_components/edu_pdf_block";
import ProjPdfBlock from "../components/pdf_components/proj_pdf_block";
import SkillsPdfBlock from "../components/pdf_components/skills_pdf_block";
import styled from "@react-pdf/styled-components";

// https://fonts.googleapis.com/css?family=Lato
Font.register({
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWyWtFCc.ttf",
  family: "LatoRegular",
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA3q5d0.ttf",
  family: "LatoBold",
  fontStyle: "normal",
  fontWeight: "bold",
});
Font.register({
  src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-vNiXg7Q.ttf",
  family: "LatoItalic",
  fontStyle: "normal",
  fontWeight: "normal",
});

const PageWrapper = styled.Page`
  padding: 24px;
  font-size: 12px;
  font-family: LatoRegular;
`;

const SectionHeader = styled.Text`
  font-size: 12px;
  font-family: LatoBold;
  margin-top: 4px;
  margin-bottom: 0px;
`;

const SectionSplitter = styled.Text`
  margin-top: -10px;
  margin-bottom: 4px;
`;

const PdfDocument = ({
  headerNodes,
  workNodes,
  eduNodes,
  projNodes,
  allSkills,
}) => {
  return (
    <Document
      title="Alex Caulfield's Resume"
      author="Alex Caulfield"
      subject="Resume"
      creator="Alex Caulfield"
    >
      <PageWrapper size="A4" wrap={false}>
        <View>
          {headerNodes[0] && <HeaderPdf {...headerNodes[0].node} />}
          <SectionHeader>Experience</SectionHeader>
          <SectionSplitter>
            ______________________________________________________________________________________________________________________
          </SectionSplitter>
          {workNodes.map(({ node }) => {
            const {
              name,
              position,
              startdate,
              enddate,
              city,
              state,
              details,
              tags,
            } = node;
            return (
              <WorkPdfBlock
                name={name}
                position={position}
                startdate={startdate}
                enddate={enddate}
                city={city}
                state={state}
                details={details}
                tags={tags}
              />
            );
          })}
          <SectionHeader>Skills</SectionHeader>
          <SectionSplitter>
            ______________________________________________________________________________________________________________________
          </SectionSplitter>
          <SkillsPdfBlock allSkills={allSkills} />
          <SectionHeader>Projects</SectionHeader>
          <SectionSplitter>
            ______________________________________________________________________________________________________________________
          </SectionSplitter>
          {projNodes.map(({ node }) => {
            const { name, details, tags, link, githublink } = node;
            return (
              <ProjPdfBlock
                name={name}
                details={details}
                tags={tags}
                link={link}
                githublink={githublink}
              />
            );
          })}
          <SectionHeader>Education</SectionHeader>
          <SectionSplitter>
            ______________________________________________________________________________________________________________________
          </SectionSplitter>
          {eduNodes.map(({ node }) => {
            const {
              name,
              position,
              startdate,
              enddate,
              city,
              state,
              tags,
              details,
            } = node;
            return (
              <EduPdfBlock
                name={name}
                position={position}
                startdate={startdate}
                enddate={enddate}
                city={city}
                state={state}
                tags={tags}
                details={details}
              />
            );
          })}
        </View>
      </PageWrapper>
    </Document>
  );
};

export default PdfDocument;
