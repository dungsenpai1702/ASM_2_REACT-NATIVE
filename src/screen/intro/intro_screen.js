import { ActivityIndicator, Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { sliders } from '../../data/data_intro/data_intro'
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('screen');

export default function Intro_screen({ navigation }) {
    const [loading, setLoading] = useState(true)
    const storage = {
        storeData: async (key, value) => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(error);
            }
        },

        getData: async (key) => {
            try {
                const value = await AsyncStorage.getItem(key);
                if (value) {
                    return JSON.parse(value);
                } else {
                    return null;
                }
            } catch (error) {
                console.error(error);
            }
        },

        removeData: async (key) => {
            try {
                await AsyncStorage.removeItem(key);
                console.log(`Data with key "${key}" has been removed.`);
            } catch (error) {
                console.error(`Failed to remove data with key "${key}": ${error}`);
            }
        }
    }

    useEffect(() => {
        const checkOnboard = async () => {
            try {
                const value = await storage.getData('completedOnboarding');
                if (value != undefined || value != false) {

                    navigation.replace('signin');
                } else {
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkOnboard()
    }, [])

    const finishOboard = async () => {
        await storage.storeData("completedOnboarding", true);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <>
                    <ActivityIndicator size={'large'} color={'red'} style={{ width: 40, height: 40 }} />
                </>
            ) : (
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
                        finishOboard();
                        navigation.navigate('splash')
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({})