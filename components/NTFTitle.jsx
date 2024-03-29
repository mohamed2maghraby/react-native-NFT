import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import NTFDate from './NTFDate'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NTFTitle = ({_name, creator, date}) => {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{_name}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: SIZES.small}}>
            <Text style={styles.textCreator}>{creator}</Text>
            <MaterialCommunityIcons 
                name='check-decagram'
                size={20}
                color="white"
            />
        </View>
        <NTFDate date={date}/>
      </View>
    </View>
  )
}

export default NTFTitle

const styles = StyleSheet.create({
    textName: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 20
    },
    textCreator: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: 16
    }
});