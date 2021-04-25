import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  workBlock: {
    paddingBottom: 8,
  },
  headline: {
    fontSize: 11,
    color: "#b20000",
    flexDirection: "row",
    paddingBottom: 4,
  },
  company: {
    fontFamily: "LatoBold",
    marginRight: 4,
  },
  name: {
    flex: 1,
    fontFamily: "LatoItalic",
    marginRight: 4,
  },
  location: {
    flex: 1,
    marginLeft: "auto",
    marginRight: 4,
    fontFamily: "LatoRegular",
  },
  date: {
    color: "#000",
    justifyContent: "flex-end",
  },
  detail: {
    marginBottom: 4,
  },
  detailsBlock: {
    fontSize: 10,
    marginLeft: 8,
  },
  skills: {
    flexDirection: "row",
    fontSize: 10,
    fontFamily: "LatoBold",
  },
  skillsLabel: {
    marginRight: 4,
  },
  skillsList: {
    flex: 1,
    fontFamily: "LatoRegular",
  },
});

const WorkPdfBlock = ({
  name,
  position,
  startdate,
  enddate,
  city,
  state,
  details,
  tags,
}) => {
  const detailsArray = details ? details.split(/\n/g) : [];
  return (
    <View style={styles.workBlock} fixed>
      <View style={styles.headline}>
        <Text style={styles.company}>{name}</Text>
        <Text style={styles.name}>
          {position}{" "}
          <Text style={styles.location}>
            &#183; {city}, {state}
          </Text>
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
      {tags && (
        <View style={styles.skills}>
          <Text style={styles.skillsLabel}>Relevant Skills:</Text>
          <Text style={styles.skillsList}>{tags}</Text>
        </View>
      )}
    </View>
  );
};

export default WorkPdfBlock;
