import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'


const NTFDate = ({date}) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  )
}

export default NTFDate

const styles = StyleSheet.create({
    textDate: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
});