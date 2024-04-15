import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header_Customer from '../../components/Header_Customer'
import { ScrollView } from 'react-native-gesture-handler'
import Input_Customer from '../../components/Input_Components'
import Button_Customer from '../../components/Button_Customer'
import { Iconify } from 'react-native-iconify'
import {

} from '@react-native-google-signin/google-signin';
// auth
import { FIREBASE_AUTH } from '../../../auth/auth.config'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile,  } from 'firebase/auth'


const auth = FIREBASE_AUTH;


export default function Signup_screen({ navigation }) {

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  // validation input
  const [errName, setErrName] = useState(false)
  const [errMail, setErrMail] = useState(false)
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [errPass, setErrPass] = useState(false)

  // content validation
  const [errContentName, setErrContentName] = useState('');
  const [errContentMail, setErrContentMail] = useState('');
  const [errContentPhoneNumber, setErrContentPhoneNumber] = useState('');
  const [errContentPass, setErrContentPass] = useState('');

  const [laoding, setLoading] = useState(false);

  // useEffect(() => {
  // const validateField = (field, value, errorSetter, errorContentSetter, validationRegex, errorMessage) => {
  //   if (!value || !validationRegex.test(value)) {
  //     errorSetter(true);
  //     errorContentSetter(errorMessage);
  //   } else {
  //     errorSetter(false);
  //     errorContentSetter('');
  //   }
  // };

  // const startValidation = () => {
  //   validateField('name', name, setErrName, setErrContentName, /^.{1,}$/, 'Please enter your name');
  //   validateField('phoneNumber', phoneNumber, setErrPhoneNumber, setErrContentPhoneNumber, /^.{1,}$/, 'Please enter your phone number');
  //   validateField('mail', mail, setErrMail, setErrContentMail, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address');
  //   validateField('pass', pass, setErrPass, setErrContentPass, /^.{6,}$/, 'Password must be at least 6 characters');
  // }
  // }, [name, phoneNumber, mail, pass]);



  const signup = async () => {
    const validation = !errPass && !errMail && !errName && !errPhoneNumber;
    if (!validation) {
      return;
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, mail.trim(), pass.trim());
      await updateProfile(response.user, {
        displayName: name,
        phoneNumber: phoneNumber.toString()
      });
      // await sendEmailVerification(response.user);
      Alert.alert('Đăng ký thành công', 'Đăng nhập ngay để đồng hành cùng chúng tôi!', [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('signin');
          }
        }
      ])

    } catch (error) {
      console.log("Lỗi: " + error.code);
      if (error.code === 'auth/email-already-in-use') {
        // Xử lý khi địa chỉ email đã được sử dụng
        setErrMail(true);
        setErrContentMail('Email đã tồn tại');
        Alert.alert('Error!', 'Email đã được sử dụng!', [
          {
            text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },])
      } else {
        // Xử lý các loại ngoại lệ khác từ Firebase
        Alert.alert('Error!', 'Vui lòng liên hệ hỗ trợ: 0346477714!', [
          {
            text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },])
      }
    } finally {
      setLoading(false)
    }


  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header_Customer navigation={navigation} />
      <Image source={require('../../assets/img_login/signup.png')} style={{ height: 250, width: '100%', objectFit: 'contain' }} />
      <ScrollView style={{ width: '100%', height: '90%' }}>
        <View style={{ width: '100%', alignItems: 'center' }}>


          <Input_Customer placeholder={"name"} title={'Name:'} marginV={15} value={name} onChangeText={setName} error={errName} setError={setErrName} errContent={errContentName} setErorContent={setErrContentName} />
          <Input_Customer typeValidation={'mail'} placeholder={"E-mail"} title={"E-mail:"} marginV={15} value={mail} onChangeText={setMail} error={errMail} setError={setErrMail} errContent={errContentMail} setErorContent={setErrContentMail} />
          <Input_Customer typeValidation={'phoneNumber'} placeholder={"Phone number"} title={"Phone number:"} marginV={15} value={phoneNumber} onChangeText={setPhoneNumber} setError={setErrPhoneNumber} error={errPhoneNumber} errContent={errContentPhoneNumber} setErorContent={setErrContentPhoneNumber} number={true} />
          <Input_Customer placeholder={"Pass word"} title={"Pass word:"} marginV={15} pass={true} value={pass} onChangeText={setPass} error={errPass} setError={setErrPass} errContent={errContentPass} setErorContent={setErrContentPass} />

          <View style={{ width: '100%', alignItems: 'center', marginVertical: 15, justifyContent: 'center' }}>
            {laoding ? (
              <>
                <ActivityIndicator size={34} color={'red'} />
              </>
            ) : (<Button_Customer lable={"Sign In"} height={70} backgoundColor={['rgba(0, 117, 55, 1)', 'rgba(76, 175, 80, 0.7)']} onPress={signup} />)}
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

          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 30 }}>
            <Text style={{ color: 'black', marginEnd: 5 }}>Bạn đã có tài khoản</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('signin') }}
            ><Text style={{ color: 'rgba(76, 175, 80, 1)' }}>Đăng nhập</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})