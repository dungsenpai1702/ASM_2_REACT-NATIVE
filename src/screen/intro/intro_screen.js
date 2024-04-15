import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { sliders } from '../../data/data_intro/data_intro'

const { width, height } = Dimensions.get('screen');

export default function Intro_screen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                style={{ flex: 1, backgroundColor: 'black' }}
                dotStyle={{ width: 10, height: 10, backgroundColor: 'white' }}
                activeDotStyle={{ width: 20, height: 10, backgroundColor: 'orange' }}
                data={sliders}
                renderItem={({ item }) => {
                    return (
                        <View key={item.id} style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around', width: width, height: height * 0.7, marginTop: 50 }}>
                            <Image source={item.img} style={{ width: width - 80, height: 400, objectFit: 'contain' }} resizeMode='contain' />
                            <View style={{ width: width - 80, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 26, textAlign: 'center', width: '85%', fontWeight: '600', marginVertical: 15 }}>{item.title}</Text>
                                <Text style={{ color: 'white', fontSize: 18, }}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
                showSkipButton
                onDone={() => {
                    navigation.navigate('splash')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})