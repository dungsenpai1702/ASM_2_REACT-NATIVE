import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header_Customer from '../../components/Header_Customer'
import Input_Customer from '../../components/Input_Components'
import Button_Customer from '../../components/Button_Customer'
import CheckBox_Customer from '../../components/CheckBox_Customer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Iconify } from 'react-native-iconify'
// import { FIREBASE_AUTH } from '../../../auth/auth.config'
// import { signInWithEmailAndPassword, } from 'firebase/auth'
import { useUserLogin } from '../../context/index.context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth'
import { W } from '../../constants/theme'
import LottieView from 'lottie-react-native'
import { storage } from '../../utils/storage'


export default function Signin_screen({ navigation }) {

    // const auth = FIREBASE_AUTH;

    const { userLogin, setUserLogin, setUserAuth } = useUserLogin()


    const [email, setMail] = useState('')
    const [pass, setPass] = useState('')

    // validation input
    const [errMail, setErrMail] = useState(false)
    const [errPass, setErrPass] = useState(false)

    // content validation
    const [errContentMail, setErrContentMail] = useState('');
    const [errContentPass, setErrContentPass] = useState('');

    const [check, setCheck] = useState(false);

    const [loading, setLoading] = useState(false);

    const [autoLogin, setAutoLogin] = useState(true)


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



        const getData = async () => {
            const checkLogin = await storage.getData("checkLogin");

            if (checkLogin) {
                setAutoLogin(checkLogin);
            } else {
                setAutoLogin(false)
            }

            // console.log(mailStorage, passStorage);

        }
        getData()

    }, [])
    useEffect(() => {
        const loginAuto = async () => {
            const mailStorage = await storage.getData("mail");
            const passStorage = await storage.getData("pass");
            auth().signInWithEmailAndPassword(mailStorage.trim(), passStorage.trim())
                .then((response) => {
                    console.log("response.user: ", response.user);
                    const user = response.user;
                    console.log(user);
                    setUserAuth(user)
                    const dataLogin = {
                        name: user.displayName,
                        mail: user.email,
                        uid: user.uid,
                        img: user.photoURL
                    }
                    setUserLogin(dataLogin);
                    navigation.navigate('HomeUser');
                    console.log(autoLogin);
                }).catch((error) => {
                    console.log("Lỗi: ", error);
                    setAutoLogin(false)
                }).finally(() => {
                    setLoading(false)

                })
        }
        if (autoLogin) {
            loginAuto()
        }
    }, [autoLogin])

    const signin = async () => {
        const validation = !errPass && !errMail;
        if (!validation) {
            return;
        }

        setLoading(true);



        auth().signInWithEmailAndPassword(email.trim(), pass.trim())
            .then((response) => {
                console.log(response.user);
                const user = response.user;
                console.log(user);
                setUserAuth(user)
                const dataLogin = {
                    name: user.displayName,
                    mail: user.email,
                    uid: user.uid,
                    img: user.photoURL
                }

                setUserLogin(dataLogin);
                if (check == true || autoLogin == true) {
                    storage.storeData("mail", user.email.trim());
                    storage.storeData("pass", pass.trim())
                } else {
                    storage.removeData("mail");
                    storage.removeData("pass")
                }


                storage.storeData("checkLogin", check)

                navigation.navigate('HomeUser');
            }).catch(() => {
                console.log("Lỗi: ", error);
            }).finally(() => {
                setLoading(false)
            })


        // console.log(dataLogin);

    }



    if (autoLogin) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

                <LottieView source={require('../../assets/img_login/run.json')} autoPlay loop style={{ width: 300, height: 300 }} />

            </SafeAreaView>
        )
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Header_Customer navigation={navigation} navigate={'splash'} />
                <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/img_login/signin.png')} style={{ width: '100%', height: 250, objectFit: 'contain' }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', paddingVertical: 20 }}>
                    <Input_Customer typeValidation={'mail'} value={email} onChangeText={setMail} title={'Email'} placeholder={"email"} marginV={25} error={errMail} setError={setErrMail} setErorContent={setErrContentMail} errContent={errContentMail} />
                    <Input_Customer title={'Pass word'} value={pass} onChangeText={setPass} placeholder={"pass"} marginV={5} pass={true} error={errPass} setError={setErrContentPass} setErorContent={setErrContentPass} errContent={errContentPass} />
                </View>
                <View style={{ width: '90%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox_Customer check={check} setCheck={setCheck} />
                        <Text style={{ marginStart: 10 }}>Nhớ tài khoản</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('forgot') }}>
                        <Text style={{ color: 'rgba(0, 146, 69, 1)' }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 15 }}>
                    {
                        loading ? (
                            <>
                                <ActivityIndicator size={34} color={'red'} />
                            </>
                        ) : (<Button_Customer lable={"Sign In"} height={70} backgoundColor={['rgba(0, 117, 55, 1)', 'rgba(76, 175, 80, 0.7)']} onPress={signin} />)
                    }
                </View>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '10' }}>
                    <View style={{ width: '43%', height: 1, backgroundColor: 'rgba(76, 175, 80, 1)' }}></View>
                    <Text style={{ color: 'black', fontSize: 18 }}>Hoặc</Text>
                    <View style={{ width: '43%', height: 1, backgroundColor: 'rgba(76, 175, 80, 1)' }}></View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <TouchableOpacity style={{ marginHorizontal: 15 }}>
                        <Iconify icon='flat-color-icons:google' size={46} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 15 }}>
                        <Iconify icon='logos:facebook' size={42} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ color: 'black', marginEnd: 5 }}>Bạn không có tài khoản</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('signup') }}
                    >
                        <Text style={{ color: 'rgba(76, 175, 80, 1)' }}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>

            </View>)
    }
}

const styles = StyleSheet.create({})