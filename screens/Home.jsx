import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import NFTCard from '../components/NFTCard';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  const [nftData, setNftData] = useState(DATA);

  const searchHandler = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <HomeHeader searchHandler={searchHandler} />
        <FlatList 
          data={nftData}
          renderItem={({item}) => <NFTCard NFTData={item}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.xLarge
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge
  }
});