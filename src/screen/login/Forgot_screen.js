import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header_Customer from '../../components/Header_Customer'
import Input_Customer from '../../components/Input_Components'
import Button_Customer from '../../components/Button_Customer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/theme'
import { FIREBASE_AUTH } from '../../../auth/auth.config'
import { sendPasswordResetEmailS } from 'firebase/auth'


export default function Forgot_screen({ navigation }) {
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [errContentMail, setErrContentMail] = useState('');
  const [errMail, setErrMail] = useState(false)
  const forgot = async () => {
    setLoading(true);
    try {

      await sendPasswordResetEmailS(auth, email);
      // Alert.alert("Send thành công!", "vui lòng check mail!", [
      //   {
      //     'text': 'Ok',
      //     style: 'cancel'
      //   }
      // ])
      // console.log("địt mẹ mày");

    } catch (error) {
      console.log("error: ", setError);
      Alert.alert("Send fail!", "vui lòng thử lại hoặc liên hệ hỗ trợ!", [
        {
          'text': 'Ok',
          style: 'cancel'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header_Customer navigation={navigation} />
      <Image source={require('../../assets/img_login/forgot.png')} style={{ width: '100%', height: 350, objectFit: 'contain' }} />

      <Input_Customer typeValidation={'mail'} value={email} onChangeText={setEmail} error={errMail} setError={setErrMail} errContent={errContentMail} setErorContent={setErrContentMail} title={'E-mail:'} placeholder={'enter your e-mail'} marginV={60} />

      {
        loading ? (
          <>
            <ActivityIndicator size={34} color={'white'} />
          </>
        ) : (
          <Button_Customer backgoundColor={['rgba(0, 204, 0, 0.6)', 'rgba(255, 204, 153, 0.7)']} height={60} lable={'Forgot'} onPress={forgot} />
        )
      }

      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 30 }}>
        <Text style={{ color: 'black', fontSize: 16 }}>
          Đã có mật khẩu,

        </Text>
        <TouchableOpacity style={{ justifyContent: 'center', marginHorizontal: 5 }}
          onPress={() => { navigation.navigate('signin') }}
        >
          <Text style={{ color: COLORS.deepGreen, fontSize: 16 }}>
            Login now!!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})