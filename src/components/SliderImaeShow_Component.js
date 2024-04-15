import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProduct } from '../redux/selector';
import { COLORS, W } from '../constants/theme';
import IconLeftArrow from '../assets/svg/arrow-left.svg'
import IconRightArrow from '../assets/svg/arrow-right.svg'


export default function SliderImaeShow_Component({ listImg }) {
    const scrollViewRef = useRef(null);

    const listProduct = useSelector(selectProduct);

    const [dostFocuse, setDostFocuse] = useState(0)

    const renderDost = () => {
        return listProduct[0].image.map((item, i) => {
            return (
                <View key={i} style={{ width: dostFocuse == i ? 25 : 10, height: 10, backgroundColor: dostFocuse == i ? COLORS.DeepSkyBlue : 'black', marginHorizontal: 5, borderRadius: 10 }}>

                </View>
            )
        })
    }

    

    const showImg = () => {
        return listProduct[0].image.map((item, i) => {
            // console.log(item);
            return (
                <View key={i} style={{ width: W, height: 230, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item} style={{ width: '70%', height: '90%', objectFit: 'contain' }} />
                    {/* <Text>hiem</Text> */}

                </View>
            )
        })
    }

    const nextSlider = () => {

        newDost = ((dostFocuse) + 1) % listProduct[0].image.length;
        setDostFocuse(newDost);
        scrollViewRef.current.scrollTo({
            x: newDost * W,
        });

    }
    const backSlider = () => {

        newDost = (dostFocuse - 1 + listProduct[0].image.length) % listProduct[0].image.length;

        setDostFocuse(newDost)
        scrollViewRef.current.scrollTo({
            x: newDost * W,
        });
    }


    // useEffect(() => {
    //     console.log("dostFocuse: ", dostFocuse + 1);
    // }, [dostFocuse])


    return (
        <View style={{ width: '100%', height: 260, alignItems: 'center', backgroundColor: '#d9d9d9' }}>
            <ScrollView
                ref={scrollViewRef}
                style={{ width: '100%', height: '100%' }}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
            >
                {showImg()}
            </ScrollView>
            <TouchableOpacity style={[{ position: 'absolute', top: '50%', left: 10, backgroundColor: COLORS.white, borderRadius: 5, padding: 5 }, st.shadow]}
                onPress={backSlider}
            >
                <IconLeftArrow width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={[{ position: 'absolute', top: '50%', right: 10, backgroundColor: COLORS.white, borderRadius: 5, padding: 5 }, st.shadow]}
                onPress={nextSlider}
            >
                <IconLeftArrow width={30} height={30} style={{ transform: [{ rotate: '180deg' }] }} />
            </TouchableOpacity>
            <View style={{ width: W, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                {renderDost()}
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    },
})