import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckIcon from '../assets/svg/check.svg'
import { COLORS, W } from '../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItem, selectProduct } from '../redux/selector';
import CouterProduct_Component from './CouterProduct_Component';
import { shopingCartSlice } from '../redux/shopingCartSlice/shopingCartSlice';
import { Swipeable } from 'react-native-gesture-handler';
import RemoveIcon from '../assets/svg/remove_item.svg'
export default function ItemCart_Component({ data }) {

    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const listCart = useSelector(selectProduct);
    const [counter, setCounter] = useState(data.quantity)
    const findProduct = () => {
        const find = listCart.find(item => item._id == data.id_product)
        // console.log(find);
        return find

    }

    const toPriceVN = (number) => {
        return number.toLocaleString('vi-VN');
    }

    useEffect(() => {
        if (counter == 0) {
            dispatch(shopingCartSlice.actions.deleteCart(data.id_cart))
        } else {
            dispatch(shopingCartSlice.actions.updateCart({
                id: data.id_cart,
                quantity: counter
            }))
        }
    }, [counter])

    useEffect(() => {
        const find = listCart.find(item => item._id == data.id_product)
        setProduct(find);
    }, [])
    const [check, setCheck] = useState(data.checkBox);

    useEffect(() => {
        // console.log(check);
        dispatch(shopingCartSlice.actions.updateCart({
            id: data.id_cart,
            checkBox: check
        }))
    }, [check]);

    const rightView = () => {
        return (
            <TouchableOpacity style={[{ width: 70, height: 70, marginVertical: 60 / 2, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30 / 2 }, st.shadow]}
                onPress={() => {
                    dispatch(shopingCartSlice.actions.deleteCart(data.id_cart))
                }}
            >
                <RemoveIcon width={34} height={34} fill={COLORS.DeepSkyBlue} />
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable renderRightActions={rightView} containerStyle={{ justifyContent: 'center', alignItems: 'center', height: 130 }}>
            <View style={[{ width: W * 0.9, height: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 30, justifyContent: 'space-between', marginHorizontal: (W * 0.1) / 2, paddingHorizontal: 20, borderRadius: 10 }, st.shadow,]}>
                <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 2, borderColor: 'black', }}
                    onPress={() => { setCheck(!check) }}
                >
                    {check && <CheckIcon width={25} height={25} fill={'white'} color={'white'} />}
                </TouchableOpacity>
                <View style={{ width: 100, height: 90, justifyContent: 'center', backgroundColor: '#F6F6F6', borderRadius: 10 }}>
                    {product && (
                        <Image source={product.image[0]} style={{ width: 100, height: 100, objectFit: 'contain' }} />
                    )}
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                    {product && (
                        <>
                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Text>{product.name}|{product.type}</Text>
                                <Text>{toPriceVN(product.price * data.quantity)}đ</Text>
                            </View>
                        </>
                    )}
                    <CouterProduct_Component counter={counter} setCounter={setCounter} quantity={product ? product.quantity : 0} />
                </View>
            </View>
        </Swipeable>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})