import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function CheckBox_Customer({check, setCheck}) {
    
    return (
        <TouchableOpacity onPress={() => { setCheck(!check) }} style={{ width: 25, height: 25, borderColor: 'black', borderRadius: 5, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
            {
                check ? (
                    <FontAwesomeIcon icon={faCheck} size={16} color='black' />
                ) : (
                    <>

                    </>
                )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})