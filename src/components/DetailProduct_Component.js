import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import CouterProduct_Component from './CouterProduct_Component'

export default function DetailProduct_Component({ item }) {
    useEffect(() => {
    }, [item])
    return (
        <View style={{ width: '80%' }}>
            <Text style={{ fontSize: SIZES.h2, borderBottomWidth: 2, borderColor: 'black', marginBottom: 20, color: 'black' }}>Chi tiết sản phẩm</Text>
            <View style={{ borderBottomWidth: 0.5, borderColor: COLORS.black, width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
                <Text style={[st.content]}>Kích cỡ</Text>
                <Text style={[st.content]}>Size</Text>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderColor: COLORS.black, width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
                <Text style={[st.content]}>Xuất xứ</Text>
                <Text style={[st.content]}>{item.origin}</Text>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderColor: COLORS.black, width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
                <Text style={[{ fontSize: SIZES.h4 }, st.content]}>Tình trạng</Text>
                <Text style={{ fontSize: SIZES.h4, color: COLORS.DeepSkyBlue }}>Còn {item.quantity} sản phẩm</Text>
            </View>

        </View>
    )
}

const st = StyleSheet.create({
    content: {
        fontSize: SIZES.h4,
        color: COLORS.black
    }
})