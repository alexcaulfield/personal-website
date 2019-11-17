import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

// Create Document Component
const PdfDocument = ({work, edu}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {work.map(({node}) => {
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