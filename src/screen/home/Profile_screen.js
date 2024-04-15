import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogOutIcon from '../../assets/svg/logout.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FIREBASE_AUTH } from '../../../auth/auth.config'
import { signOut } from 'firebase/auth'
import HeaderHome_Components from '../../components/HeaderHome_Components'
import Header_Customer from '../../components/Header_Customer'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import UserIcon from '../../assets/svg/user.svg'
import { COLORS, SIZES, W } from '../../constants/theme'
const auth = FIREBASE_AUTH;

export default function Profile_screen({ navigation }) {

    const logOut = async () => {
        try {
            Alert.alert("Log Out", "Bạn có chắc muốn đăng xuất?", [
                {
                    text: 'cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        signOut(auth)
                    }
                }
            ])
        } catch (error) {

        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: 'center' }}>
            <Header_Customer onPressRight={logOut} showAvatar={true} showLeft={true} navigation={navigation} title={'Profile'} icon={faRightFromBracket} />
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={[{ width: 80, height: 80, borderRadius: 50, backgroundColor: COLORS.DeepSkyBlue }, st.shadow]}>
                    <UserIcon width={80} height={80} fill={'white'} />
                </View>
                <Text style={{ color: COLORS.DeepSkyBlue, fontWeight: 'bold', fontSize: SIZES.h4, marginTop: 10 }}>Nguyễn Văn Dũng</Text>
                <Text>dungkuro4205@gmail.com</Text>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginVertical: 50 }}>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                // onPress={{}}
                >
                    <Text style={[st.titleItem]}>Chỉnh sửa thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                // onPress={{}}
                >
                    <Text style={[st.titleItem]}>Cẩm nang trồng cây</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                    onPress={() => { navigation.navigate('orderHistory') }}
                >
                    <Text style={[st.titleItem]}>Lịch sử giao dịch</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                // onPress={{}}
                >
                    <Text style={[st.titleItem]}> Q & A</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    itemContainer: {
        width: W * 0.9,
        height: 70,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    titleItem: {
        fontSize: SIZES.h3,
        color: COLORS.DeepSkyBlue
    }
})