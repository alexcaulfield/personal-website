import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  skills: {
    flexDirection: "row",
    fontSize: 10,
    width: "100%",
    flexWrap: "wrap",
  },
  skillsLabel: {
    fontFamily: "LatoBold",
    marginRight: 2,
  },
  skillsList: {
    fontFamily: "LatoRegular",
    marginRight: 4,
  },
});

const SkillsPdfBlock = ({ allSkills }) => {
  return (
    <View style={styles.workBlock} fixed>
      <View style={styles.skills}>
        {Object.keys(allSkills).map(skillType => (
          <>
            <Text style={styles.skillsLabel}>{skillType}: </Text>
            <Text style={styles.skillsList}>
              {allSkills[skillType].map((skill, index) => (
                <>
                  <Text>{skill}</Text>
                  {index !== allSkills[skillType].length - 1 && <Text>, </Text>}
                </>
              ))}
            </Text>
          </>
        ))}
      </View>
    </View>
  );
};

export default SkillsPdfBlock;
