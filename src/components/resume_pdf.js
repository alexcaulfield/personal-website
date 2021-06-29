import React from "react";
import { Font, View, Document } from "@react-pdf/renderer";
import HeaderPdf from "../components/pdf_components/header";
import WorkPdfBlock from "../components/pdf_components/work_pdf_block";
import EduPdfBlock from "../components/pdf_components/edu_pdf_block";
import ProjPdfBlock from "../components/pdf_components/proj_pdf_block";
import SkillsPdfBlock from "../components/pdf_components/skills_pdf_block";
import styled from "@react-pdf/styled-components";
import LatoRegular from "../../fonts/LatoRegular.ttf";
import LatoBold from "../../fonts/LatoBold.ttf";
import LatoItalic from "../../fonts/LatoItalic.ttf";

// https://fonts.googleapis.com/css?family=Lato
Font.register({
  src: LatoRegular,
  family: "LatoRegular",
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  src: LatoBold,
  family: "LatoBold",
  fontStyle: "normal",
  fontWeight: "bold",
});
Font.register({
  src: LatoItalic,
  family: "LatoItalic",
  fontStyle: "normal",
  fontWeight: "normal",
});

const PageWrapper = styled.Page`
  padding: 24px 36px;
  font-size: 12px;
  font-family: LatoRegular;
`;

const SectionHeader = styled.Text`
  font-size: 12px;
  font-family: LatoBold;
  margin-top: 0px;
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
            ________________________________________________________________________________________________________________
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
            ________________________________________________________________________________________________________________
          </SectionSplitter>
          <SkillsPdfBlock allSkills={allSkills} />
          <SectionHeader>Projects</SectionHeader>
          <SectionSplitter>
            ________________________________________________________________________________________________________________
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
            ________________________________________________________________________________________________________________
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
