import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import RemoveIcon from '../assets/svg/remove.svg'
import PlusIcon from '../assets/svg/add-plus.svg'
export default function CouterProduct_Component({ counter, setCounter, quantity }) {

    const updateCouter = () => {
        
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{ width: 20, height: 20, borderWidth: 1, borderColor: COLORS.black, justifyContent: 'center', alignItems: 'center', }}
                onPress={() => {

                    if (counter > 0) {
                        setCounter(counter - 1)
                    }
                }}
            >
                <RemoveIcon width={18} height={18} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 20 }}><Text style={{ color: COLORS.black, fontSize: SIZES.h4 }}>{counter}</Text></View>
            <TouchableOpacity
                style={{ width: 20, height: 20, borderWidth: 1, borderColor: COLORS.black, justifyContent: 'center', alignItems: 'center', }}
                onPress={() => {
                    if (counter < quantity) {
                        setCounter(counter + 1)
                    } else if (counter >= quantity) {
                        setCounter(quantity)
                    }
                }}
            >
                <PlusIcon width={18} height={18} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})