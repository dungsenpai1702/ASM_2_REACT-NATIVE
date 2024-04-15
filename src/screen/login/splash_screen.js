import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button_Customer from '../../components/Button_Customer'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Header_Customer from '../../components/Header_Customer'

export default function Splash_screen({ navigation }) {
    const signIn = () => {
        navigation.navigate('signin');
    }
    const signUp = () => {
        navigation.navigate('signup');
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: '90%', width: '100%', alignItems: 'center', justifyContent: 'space-around' }} >
                <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <Image source={require('../../assets/img_login/welcome.png')} style={{ objectFit: 'contain', width: '90%', height: 250 }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Button_Customer marginV={20} width={90} height={70} borderRadius={true} lable={'Sign In'} backgoundColor={['rgba(0, 117, 55, 1)', 'rgba(76, 175, 80, 0.7)']} onPress={signIn} />
                    <Button_Customer marginV={20} width={90} height={70} borderRadius={true} lable={'Sign Up'} backgoundColor={['#99cc00', 'rgba(76, 175, 80, 0.7)']} onPress={signUp} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})