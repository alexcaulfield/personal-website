import React from 'react'
import { Text, Image, View, StyleSheet } from '@react-pdf/renderer'

const HeaderPdf = ({
  name,
  address,
  email,
  phone,
  website,
}) => {
  return (
    <View fixed>
      <Text>{name}</Text>
      <View>
        <Text>{address}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>{website}</Text>
      </View>
    </View>
  )
}

export default HeaderPdf