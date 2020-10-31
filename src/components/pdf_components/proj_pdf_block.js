import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import {styles} from "./work_pdf_block";

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
        <Text style={styles.company}><Link src={link}>{name}</Link></Text>
        <Text>&#183;{' '}</Text>
        <Text style={styles.name}><Link src={githublink}>GitHub</Link></Text>
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