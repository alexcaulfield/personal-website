import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  workBlock: {
    paddingBottom: 8,
  },
  headline: {
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
    justifyContent: "flex-end"
  },
  detail: {
    marginBottom: 4,
  },
  detailsBlock: {
    fontSize: 11
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

const EduPdfBlock = ({
    name,
    position,
    startdate,
    enddate,
    city,
    state,
    tags,
}) => {
  const shouldShowLocation = (((position && name)) ? (position.length + name.length) < 40 : false) || !position
  const shouldShowPosition = !!position
  const shouldShowSkills = !!tags
  return (
    <View style={styles.workBlock} fixed>
      <View style={styles.headline}>
        {shouldShowPosition && <Text style={styles.name}>{position}</Text>}
        <Text style={styles.company}>{name} {shouldShowLocation && <Text style={styles.location}>&#183; {city}, {state}</Text>}</Text>
        <Text style={styles.date}>{startdate} - {enddate ? enddate : 'Present'}</Text>
      </View>
      {shouldShowSkills && 
      <View style={styles.skills}>
        <Text style={styles.skillsLabel}>Relevant Skills:</Text>
        <Text style={styles.skillsList}>{tags}</Text>
      </View>
      }
    </View>
  )
}

export default EduPdfBlock