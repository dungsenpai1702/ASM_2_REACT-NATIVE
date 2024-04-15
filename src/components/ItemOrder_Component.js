

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, W } from '../constants/theme'


export const InputOrder_Component = () => {


    return (
        <View style={{ width: W * 0.9, borderBottomWidth: 1, borderColor: '#7D7B7B' }}>
            <Text style={[st.title]}>Nguyễn Văn Dũng</Text>
        </View>
    )
}

export const TextTitleOrder_Component = ({ content }) => {


    return (
        <View style={{ width: W * 0.9, borderBottomWidth: 1, borderColor: 'black' }}>
            <Text style={[st.title]}>Thông tin khách hàng</Text>
        </View>
    )
}


const st = StyleSheet.create({
    title: {
        fontSize: SIZES.h4,
        color: COLORS.black,
        fontWeight: '500',
        marginBottom: 5
    },
    content: {
        fontSize: SIZES.h5,
        color: '#7D7B7B'
    }
})