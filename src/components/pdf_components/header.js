import React from "react";
import { View, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const secondaryColor = "#2185D0";

const Header = styled.View`
  text-align: center;
  margin-bottom: 8px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-family: LatoBold;
`;

const Subheader = styled.Text`
  font-size: 10px;
  color: ${props => props.color};
  margin-bottom: 4px;
`;

const HeaderPdf = ({ name, address, email, phone, website, github, linkedin }) => {
  return (
    <Header fixed>
      <Name>{name}</Name>
      <View>
        <Subheader color={secondaryColor}>
          Software Engineer based in {address}
        </Subheader>
        <Subheader style={{ color: "black" }}>
          <Link src={website}>{website}</Link> |{" "}
          <Link src={`mailto:${email}`}>{email}</Link> |{" "}
          <Link src={github}>{github}</Link> |{" "}
          <Link src={linkedin}>{linkedin}</Link> {/* | {phone} */}
        </Subheader>
      </View>
    </Header>
  );
};

export default HeaderPdf;
