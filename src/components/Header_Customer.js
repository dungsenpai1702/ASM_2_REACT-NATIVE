import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES } from '../constants/theme'
export default function Header_Customer({ title, avatar, showAvatar, navigation, shadow, showLeft, icon, onPressRight, navigate }) {

    return (
        <View style={[{ width: '100%', height: '8%', paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, shadow ? st.shadow : '']}>
            <TouchableOpacity style={{ width: '20%' }} onPress={() => {
                if (navigate) {
                    navigation.navigate(navigate)
                } else {
                    navigation.goBack()
                }
            }}>
                {showLeft == undefined ? (
                    <FontAwesomeIcon icon={faChevronLeft} color='black' size={34} />
                ) : (
                    <></>
                )}
            </TouchableOpacity>
            <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 26, fontWeight: '400', textAlign: 'center' }}>{title}</Text>
            </View>
            <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center' }}
                onPress={onPressRight}
            >
                {showAvatar && (!avatar ? (
                    <FontAwesomeIcon icon={icon} size={SIZES.h1} color='black' />
                ) : (
                    <Image />
                ))}
            </TouchableOpacity>
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