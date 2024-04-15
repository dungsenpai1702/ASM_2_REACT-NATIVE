import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header_Customer from '../../components/Header_Customer'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useSelector } from 'react-redux'
import { selectListOrder } from '../../redux/selector'
import { COLORS, SIZES } from '../../constants/theme'
import ItemOrderHistory_Component from '../../components/ItemOrderHistory_Component'
import { useUserLogin } from '../../context/index.context'
export default function OrderHistory_screen({ navigation }) {

    const listOrder = useSelector(selectListOrder);
    const { userLogin } = useUserLogin();



    return (
        <View style={{
            flex: 1
        }}>
            <Header_Customer navigation={navigation} title={'Lịch sử giao dịch'} shadow={true} />

            <View style={[{
                width: '100%',
                height: '92%',
                alignItems: 'center',
                marginVertical: 20
            },]}>

                <FlatList
                    data={listOrder}
                    renderItem={({ item }) => {
                        if (item.uid == userLogin.uid) {
                            return (
                                <ItemOrderHistory_Component item={item} />
                            )
                        } 
                    }}
                />

            </View>
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: '#8c8c8c',
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})