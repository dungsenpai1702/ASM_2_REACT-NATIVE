import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dataMenuHome } from '../data/data_home/dataMenuHome'
import { COLORS } from '../constants/theme'


export default function MenuHome_Component({ focuse, setFocuse }) {

    return (
        <View style={[st.container]}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            >
                {dataMenuHome.map((item, i) => {
                    const Icon = item
                    return (
                        <TouchableOpacity key={i} style={[st.item, { backgroundColor: focuse == i ? 'white' : COLORS.DeepSkyBlue }, focuse == i ? st.shadow : '']}
                            onPress={() => { setFocuse(i) }}
                        >
                            <Icon width={44} height={44} fill={focuse == i ? COLORS.DeepSkyBlue : 'white'} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        width: '90%',
        height: 90
    },
    item: {
        width: 60,
        height: 60,
        marginHorizontal: 15,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        // backgroundColor: 'black'
    },
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})