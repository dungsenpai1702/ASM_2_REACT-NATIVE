import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'
import { SIZES } from '../constants/theme'

export default function Input_Customer({ title, placeholder, value, error, setError, onChangeText, pass, errContent, marginV, setErorContent, number, typeValidation }) {
    const [isFocused, setIsFocused] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showErr, setShowErr] = useState(false)
    const handleFocus = () => {
        setIsFocused(true);
        if (typeof setError == 'function') setError(false);
    };

    const validation = (valueNew) => {
        if (typeValidation == 'noValidation') { return };


        if (valueNew.trim() == '') {
            setError(true)
            setErorContent('dữ liệu không được để trống!');
        } else if (typeValidation == 'mail') {
            const regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (!regexMail.test(valueNew)) {
                setError(true)
                setErorContent('Địa chỉ email không hợp lệ!');
            } else {
                setError(false)
            }
        } else if (typeValidation == 'phoneNumber') {
            const phonePattern = /^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/;
            if (!phonePattern.test(valueNew)) {
                setError(true)
                setErorContent('Số điện thoại không hợp lệ!');
            } else {
                setError(false)
            }
        } else {
            setError(false)
        }


    }


    const handleBlur = () => setIsFocused(false);







    return (
        <View style={{ width: '90%', height: 80, marginVertical: marginV }}>

            <Text style={[st.title]}>{title}<Text style={{ color: 'red' }}>*</Text></Text>
            <View style={[
                st.inputContainer,
                st.input,
                isFocused && st.focusedInput,
                !isFocused && value != '' && st.inputValueTrue,
                error && st.ipErr,]}>
                <TextInput placeholder={placeholder} style={{ width: '85%', height: '100%' }} placeholderTextColor={'#b3b3b3'}
                    value={value}
                    onBlur={handleBlur}
                    // onFocus={handleFocus}
                    secureTextEntry={showPass ? true : false}
                    keyboardType={number ? 'number-pad' : 'default'}
                    onChangeText={(textNew) => {

                        onChangeText(textNew);
                        // validation(value, setError, setErorContent);
                        validation(textNew)
                        // if (textNew == '') {
                        //     setError(true)
                        //     setErorContent('Dữ liệu rỗng!')
                        // } else {
                        //     setError(false)
                        // }
                    }}
                />
                {
                    pass && !error && (
                        <TouchableOpacity style={{ width: '10%', height: '100%', justifyContent: 'center' }}
                            onPress={() => { setShowPass(!showPass) }}
                        >
                            {showPass ? (
                                <FontAwesomeIcon icon={faEye} color='black' size={26} style={{ margin: 'auto' }} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} color='black' size={26} style={{ margin: 'auto' }} />
                            )}
                        </TouchableOpacity>
                    )
                }
                {
                    error && (
                        <TouchableOpacity style={{ width: '10%', height: '100%', justifyContent: 'center' }}
                            // onPress={() => { setShowPass(!showPass) }}
                            onPressIn={() => { setShowErr(true) }}
                            onPressOut={() => { setShowErr(false) }}
                        >
                            <FontAwesomeIcon icon={faExclamationCircle} color='red' size={26} style={{ margin: 'auto', position: 'relative' }}
                            />
                        </TouchableOpacity>
                    )
                }
                {
                    showErr && (
                        <View style={{ position: 'absolute', top: -30, right: 0, paddingHorizontal: 5, minHeight: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'black' }}><FontAwesomeIcon icon={faExclamationCircle} color='red' size={16} style={{ margin: 'auto', position: 'relative', paddingHorizontal: 5 }} /> {errContent}</Text>
                        </View>
                    )
                }



            </View>
        </View>
    )
}

const st = StyleSheet.create({
    inputContainer: {
        width: '100%', height: '70%',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderColor: 'black',
        backgroundColor: 'white'
    },
    focusedInput: {
        borderColor: '#0594ad',
        backgroundColor: 'rgba(230, 251, 254, 0.5)'
    },
    inputValueTrue: {
        borderColor: 'rgba(5, 148, 173, 0.2)',
        backgroundColor: 'rgba(230, 251, 254, 0.5)'
    },
    ipErr: {
        borderColor: '#b30000',
        backgroundColor: 'rgba(255, 235, 235, 0.5)'
    },
    title: {
        color: "black",
        fontSize: SIZES.h4,
        marginBottom: 5

    }
})