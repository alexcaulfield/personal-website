import React from 'react'
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  workBlock: {
    paddingBottom: 8,
  },
  headline: {
    color: '#b20000',
    flexDirection: 'row',
    paddingBottom: 4,
  },
  name: {
    fontSize: 12,
    fontFamily: 'LatoBold',
    marginRight: 4,
  },
  company: {
    flex: 1,
    fontFamily: 'LatoItalic',
    marginRight: 4,
  },
  location: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 4,
    fontFamily: 'LatoRegular',
  },
  date: {
    color: '#000',
    justifyContent: "flex-end"
  },
  detail: {
    marginBottom: 4,
  },
  detailsBlock: {
    fontSize: 11,
    marginLeft: 8,
  },
  skills: {
    flexDirection: 'row',
    fontSize: 10,
    fontFamily: 'LatoBold',
  },
  skillsLabel: {
    marginRight: 4,
  },
  skillsList: {
    flex: 1,
    fontFamily: 'LatoRegular',
  },
})

const ProjPdfBlock = ({
  name,
  details,
  tags,
  link,
  githublink,
}) => {
  const detailsArray = details.split(/\n/g)
  return (
    <View style={styles.workBlock} fixed>
      <View style={styles.headline}>
        <Text style={styles.name}><Link src={link}>{name}</Link> </Text>
        <Text style={styles.company}><Link src={githublink}>GitHub</Link></Text>
      </View>
      <View style={styles.detailsBlock}>
        {detailsArray.map(detail => {
          return <Text style={styles.detail}>{detail}</Text>
        })}
      </View>
      {tags &&
        <View style={styles.skills}>
          <Text style={styles.skillsLabel}>Relevant Skills:</Text>
          <Text style={styles.skillsList}>{tags}</Text>
        </View>
      }
    </View>
  )
}

export default ProjPdfBlock