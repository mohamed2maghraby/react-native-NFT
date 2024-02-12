import React from 'react'
import { COLORS, SIZES } from '../constants';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import NFTImage from './NFTImage';
import NFTAvatars from './NFTAvatars';
import NTFTitle from './NTFTitle';
import NTFInfo from './NTFInfo';
import { useNavigation } from '@react-navigation/native';

function NFTCard({NFTData}) {
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('NFT-details', {NFTData})
    }
  return (
    <SafeAreaView style={styles.contianer}>
        <TouchableOpacity onPress={pressHandler}>
            <NFTImage image={NFTData.image} imageStyles={styles.imageStyles}/>
        </TouchableOpacity>
        <View style={styles.cardTop}>
            <NFTAvatars avatars={NFTData.avatars} />
        </View>
        <View style={styles.cardBottom}>
            <NTFTitle _name={NFTData.name} creator={NFTData.creator} date={NFTData.date}/>
            <View>
                <View style={{ marginTop:SIZES.small + 5 }}>
                    <NTFInfo
                        comments={NFTData.comments}
                        views={NFTData.views}
                        price={NFTData.price}
                        Love
                     />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NFTCard

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.xLarge,
        marginVertical: SIZES.small - 5,
        marginHorizontal: 14,
        padding: 12
    },
    cardTop: {
        width: "100%",
        paddingHorizontal: SIZES.medium,
        marginTop: -30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardBottom: { width: "100%", padding: SIZES.medium },
    imageStyles: {
        width: "100%",
        height: 300,
        borderRadius: 30
    }
});