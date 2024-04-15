import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES, W } from '../constants/theme'
import { useUserLogin } from '../context/index.context'

export default function HeaderHome_Components() {
    const { userLogin } = useUserLogin()

    const [img, setCheckImg] = useState(useUserLogin.img)
    useEffect(() => {
        async function fetchImg() {
            // setLoading(true)
            try {
                await checkImageLink(img);
                setCheckImg(true);
            } catch (error) {
                setCheckImg(false);
            } finally {
                // setLoading(false)
            }
        }
        fetchImg();
    }, [userLogin])
    return (
        <View style={[st.container, {}, st.shadow]}>

            <View style={[st.imgContainer]}>
                {userLogin.img == undefined ? (
                    <View>
                        <Image style={[st.img]} source={require('../assets/img_home/avatar_err_man.png')} />
                    </View>
                ) : (
                    <Image />
                )}
            </View>
            <View style={[]}>
                <Text style={[st.title]}>Hello</Text>
                <Text style={[st.textNameUser]}>{userLogin.name}</Text>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        width: W,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        height: 250,
        alignItems: 'center',
        backgroundColor: 'rgba(72, 148, 254, 0.9)',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 30

    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        textAlign: 'center',
    },
    imgContainer: {
        width: 100,
        height: 100
    },
    textNameUser: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h1,
        textAlign: 'center',
        marginBottom: 50

    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
    },
})