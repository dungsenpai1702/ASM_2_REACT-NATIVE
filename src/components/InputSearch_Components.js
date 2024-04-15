import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import IconShearch from '../assets/svg/search.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function InputSearch_Components({ value, onChangeText }) {
    return (
        <View style={{ width: '100%', height: '40', marginTop: 30, borderBottomWidth: 2, borderColor: 'black', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
            <TextInput placeholder='Tìm kiếm' style={{ width: '80%', fontSize: 24 }} value={value} onChangeText={onChangeText} />
            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                <IconShearch width={24} height={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})