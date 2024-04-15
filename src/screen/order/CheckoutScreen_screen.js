import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header_Customer from '../../components/Header_Customer'
import { ScrollView } from 'react-native-gesture-handler';
import { TextTitleOrder_Component } from '../../components/ItemOrder_Component';

export default function CheckoutScreen_screen({ navigation, route }) {
    const { listID } = route.params;


    return (
        <View style={{ flex: 1 }}>
            <Header_Customer title={'THANH TOÁN'} navigation={navigation} />
            <ScrollView style={{ width: '100%', height: '70%' }}>
                <View style={{ width: '100%', minHeight: '100%', alignItems: 'center' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TextTitleOrder_Component />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})