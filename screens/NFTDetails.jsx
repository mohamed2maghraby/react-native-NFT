import { View, Text, SafeAreaView, StyleSheet, Animated } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import NFTImage from './../components/NFTImage';
import NFTAvatars from './../components/NFTAvatars';
import NTFTitle from './../components/NTFTitle';
import NTFInfo from './../components/NTFInfo';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button';


const NFTDetails = ({route, navigation}) => {
  const {NFTData} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <NFTImage image={NFTData} imageStyles={styles.imageStyles}/>
      </View> 
    </SafeAreaView>
  )
}

export default NFTDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  imageStyles: {
    width: '100%',
    height: 400,
    borderRadius: 20
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16
  }
})