import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import avatar from '../assets/images/avatars/avatar03.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeHeader = () => {
  return (
    <View>
      <Text>HomeHeader</Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        padding: SIZES.small
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 10
    },
    UserText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.xLarge
    },
    UserText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.xLarge
    },
    searchContainer: {
        width: "100%",
        borderRadius: SIZES.small,
        backgroundColor: COLORS.cardBg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 30
    }
});