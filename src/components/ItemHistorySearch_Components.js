import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import TimeIcon from '../assets/svg/time_svg.svg'
import DeleteIcon from '../assets/svg/delete_svg.svg'
import { COLORS, SIZES } from '../constants/theme'
export default function ItemHistorySearch_Components({ content }) {
    return (
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '85%' }}>
                <TimeIcon width={18} height={18} />
                <Text style={{ marginStart: 10, color: COLORS.black, fontSize: SIZES.h4, }}>{content}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <DeleteIcon width={18} height={18} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})