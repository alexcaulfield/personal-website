import React from 'react'
import { Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import HeaderPdf from '../components/pdf_components/header'
import WorkPdfBlock from '../components/pdf_components/work_pdf_block'
import EduPdfBlock from '../components/pdf_components/edu_pdf_block'
import ProjPdfBlock from '../components/pdf_components/proj_pdf_block'

// https://fonts.googleapis.com/css?family=Lato
Font.register({src: 'https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWyWtFCc.ttf', family: 'LatoRegular', fontStyle: 'normal', fontWeight:'normal'})
Font.register({src: 'https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA3q5d0.ttf', family: 'LatoBold', fontStyle: 'normal', fontWeight:'bold'})
Font.register({src: 'https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-vNiXg7Q.ttf', family: 'LatoItalic', fontStyle: 'normal', fontWeight:'normal'})

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 12,
    fontFamily: 'LatoRegular',
  },
  section: {
    margin: 10,
  },
  header: {
    fontSize: 14,
    fontFamily: 'LatoBold',
    paddingTop: 4,
    paddingBottom: 6,
  }
})

// Create Document Component
const PdfDocument = ({    
  headerNodes,
  workNodes,
  eduNodes,
  projNodes,
}) => {
  return (
    <Document
      title="Alex Caulfield's Resume"
      author="Alex Caulfield"
      subject="Resume"
      creator="Alex Caulfield"
    >
      <Page size="A4" style={styles.page} wrap={false}>
        <View style={styles.section}>
          {headerNodes[0] &&
            <HeaderPdf {...headerNodes[0].node} />
          }
          <Text style={styles.header}>Experience</Text>
          {workNodes.map(({node}) => {
            const {
              name,
              position,
              startdate,
              enddate,
              city,
              state,
              details,
              tags,
            } = node
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
            )
          })}
          <Text style={styles.header}>Education</Text>
          {eduNodes.map(({node}) => {
            const {
              name,
              position,
              startdate,
              enddate,
              city,
              state,
              tags,
            } = node
              return (
                <EduPdfBlock
                  name={name}
                  position={position}
                  startdate={startdate}
                  enddate={enddate}
                  city={city}
                  state={state}
                  tags={tags}
                />
              )
          })}
          <Text style={styles.header}>Projects</Text>
          {projNodes.map(({node}) => {
            const {
              name,
              details,
              tags,
            } = node
              return (
                <ProjPdfBlock
                  name={name}
                  details={details}
                  tags={tags}
                />
              )
          })}
        </View>
      </Page>
    </Document>
  )
};

export default PdfDocument