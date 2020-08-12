import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';

const secondaryColor = '#2185D0'

const Header = styled.View`
  text-align: center;
  margin-bottom: 8px;
`;

const Name = styled.Text`
  font-size: 24px;
  font-family: LatoBold;
`;

const Subheader = styled.Text`
  font-size: 10px;
  color: ${props => props.color};
  margin-bottom: 4px;
`;

const HeaderPdf = ({
  name,
  address,
  email,
  phone,
  website,
}) => {
  return (
    <Header fixed>
      <Name>{name}</Name>
      <View>
        <Subheader color={secondaryColor}>Software Engineer based in {address}</Subheader>
        <Subheader style='black'>{email}   |   {website}   |   {phone}</Subheader>
      </View>
    </Header>
  )
}

export default HeaderPdf