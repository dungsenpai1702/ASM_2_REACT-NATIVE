import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const { width } = Dimensions.get('screen')

export default function Button_Customer({ height, icon, borderRadius, lable, backgoundColor, onPress, marginV }) {
    return (
        <TouchableOpacity style={{ marginVertical: marginV ? marginV : 10 }} onPress={onPress} >
            <LinearGradient
                colors={backgoundColor}
                style={[{
                    width: width * 0.9, height: height, borderRadius: borderRadius ? 15 : 5, justifyContent: 'space-around', alignItems: 'center',
                    flexDirection: 'row'
                }]}
                start={{ x: -1, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>{lable}</Text>
                {icon && (
                    <>
                        <FontAwesomeIcon icon={icon} size={24} color='white' />
                    </>
                )}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})