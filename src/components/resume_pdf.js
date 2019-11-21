import React from 'react'
import path from 'path'
import { Font, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import HeaderPdf from '../components/pdf_components/header'

// https://fonts.googleapis.com/css?family=Lato
Font.register({src: 'http://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWyWtFCc.ttf', family: 'LatoRegular', fontStyle: 'normal', fontWeight:'normal'})
Font.register({src: 'http://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA3q5d0.ttf', family: 'LatoBold', fontStyle: 'normal', fontWeight:'bold'})
Font.register({src: 'http://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-vNiXg7Q.ttf', family: 'LatoItalic', fontStyle: 'normal', fontWeight:'normal'})

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
    <Document>
      <Page size="A4" style={styles.page}>
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
              <Text>{name}</Text>
            )
          })}
        </View>
      </Page>
    </Document>
  )
};

export default PdfDocument