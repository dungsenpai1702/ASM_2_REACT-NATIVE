import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export default function ItemProduct_Components({ name, plantType, price, img, item, navigation }) {
    // console.log("data: ", name, plantType, price, key, img);


    const goDetail = () => {
        navigation.navigate('detailProduct', { product: item })
    }
    return (
        <TouchableOpacity style={[{ width: "45%", height: 220, marginBottom: 30, marginTop: 10, flexDirection: 'column', borderRadius: 10 }, st.shadow]}
            onPress={goDetail}
        >
            <View style={[{ width: '90%', borderRadius: 10 }]}>
                <Image source={img} style={{ width: '100%', objectFit: 'contain' }} />
            </View>
            <View style={{ marginStart: 10 }}>
                <Text style={{ fontSize: SIZES.h4, fontWeight: '600', marginTop: 5 }}>{name}</Text>
                {plantType != null && <Text style={{ color: '#7D7B7B', fontSize: SIZES.h5, marginVertical: 5 }}>{plantType}</Text>}
                <Text style={{ color: COLORS.DeepSkyBlue, fontSize: SIZES.h4, }}>{price}đ</Text>
            </View>

        </TouchableOpacity>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})