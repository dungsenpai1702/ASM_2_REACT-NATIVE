import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import IconLeftArrow from '../assets/svg/arrow-left.svg'

export default function HeaderItemDetail_Component({ title, navigation, IconRight, onPressIconRight, showLeft }) {
    const sizeIcon = 34;
    return (
        <View style={[{ width: '100%', backgroundColor: COLORS.white, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '5%', flexDirection: 'row', paddingVertical: 10 }]}>
            <TouchableOpacity style={[st.containerIcon]}
                onPress={() => { navigation.goBack() }}
            >
                {showLeft == undefined ? (
                    <IconLeftArrow width={sizeIcon} height={sizeIcon} />
                ) : (
                    <></>
                )}
            </TouchableOpacity>
            <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: SIZES.h2, color: COLORS.black, fontWeight: 'bold' }}>{title}</Text>
            </View>
            <TouchableOpacity style={[st.containerIcon]}
                onPress={onPressIconRight}
            >
                {IconRight && (
                    <IconRight width={sizeIcon} height={sizeIcon} />
                )}
            </TouchableOpacity>
        </View>
    )
}

const st = StyleSheet.create({
    containerIcon: {
        width: '10%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})