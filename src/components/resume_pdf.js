import React from 'react'
import path from 'path'
import { Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import HeaderPdf from '../components/pdf_components/header'

Font.register({src: 'http://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWyWtFCc.ttf', family: 'LatoRegular', fontStyle: 'normal', fontWeight:'normal'})

const styles = StyleSheet.create({
  page: {
    padding: 14,
    fontSize: 12,
    fontFamily: 'LatoRegular'
  },
  section: {
    margin: 10
  }
})

// Create Document Component
const PdfDocument = ({    
  headerNodes,
  workNodes,
  eduNodes,
  projNodes,
}) => {
  console.log(path.resolve(__dirname, '../components/pdf_components/fonts/Lato/Lato-Regular.ttf'))
  console.log(__dirname)
  console.log(Font.getRegisteredFontFamilies())
  console.log(Font.getRegisteredFonts())
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {headerNodes[0] &&
            <HeaderPdf {...headerNodes[0].node} />
          }
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
              <Text>{name}</Text>
            )
          })}
        </View>
      </Page>
    </Document>
  )
};

export default PdfDocument