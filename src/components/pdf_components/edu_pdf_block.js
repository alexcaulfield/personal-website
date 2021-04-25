import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./work_pdf_block";

const EduPdfBlock = ({
  name,
  position,
  startdate,
  enddate,
  city,
  state,
  tags,
  details,
}) => {
  const shouldShowLocation =
    (position && name ? position.length + name.length < 40 : false) ||
    !position;
  const shouldShowSkills = !!tags;
  const detailsArray = details.split(/\n/g);
  return (
    <View style={styles.workBlock} fixed>
      <View style={styles.headline}>
        <Text style={styles.company}>{name}</Text>
        <Text style={styles.name}>
          {position}{" "}
          {shouldShowLocation && (
            <Text style={styles.location}>
              &#183; {city}, {state}
            </Text>
          )}
        </Text>
        <Text style={styles.date}>
          {startdate} - {enddate ? enddate : "Present"}
        </Text>
      </View>
      <View style={styles.detailsBlock}>
        {detailsArray.map(detail => {
          return <Text style={styles.detail}>{detail}</Text>;
        })}
      </View>
      {shouldShowSkills && (
        <View style={styles.skills}>
          <Text style={styles.skillsLabel}>Relevant Skills:</Text>
          <Text style={styles.skillsList}>{tags}</Text>
        </View>
      )}
    </View>
  );
};

export default EduPdfBlock;
