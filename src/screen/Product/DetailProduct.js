import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderItemDetail_Component from '../../components/HeaderItemDetail_Component';
import IconCart from '../../assets/svg/cart.svg'
import SliderImaeShow_Component from '../../components/SliderImaeShow_Component';
import { COLORS, SIZES } from '../../constants/theme';
import DetailProduct_Component from '../../components/DetailProduct_Component';
import CouterProduct_Component from '../../components/CouterProduct_Component';
import Button_Customer from '../../components/Button_Customer';
import { useUserLogin } from '../../context/index.context';
import { useDispatch, useSelector } from 'react-redux';
import { shopingCartSlice } from '../../redux/shopingCartSlice/shopingCartSlice';
import { selectCartItem, selectCartItemById, selectOneProduct, selectSumPrice } from '../../redux/selector';
import uuid from 'react-native-uuid'


export default function DetailProduct({ route, navigation }) {
    const dispastch = useDispatch();
    const { userLogin, setUserLogin, setUserAuth } = useUserLogin()
    const { product } = route.params;
    const item = useSelector((state) => selectOneProduct(state, product._id))
    const [cart, setCart] = useState();
    const [counter, setCounter] = useState(1)
    const listCart = useSelector(selectCartItem)

    // const cartFind = useSelector((state)=>selectCartItemById(state, item._id, userLogin.uid))

    // useEffect(() => {
    //     const finCart = listCart.find(cart => {
    //         return cart.id_product == item._id && cart.uid == userLogin.uid;
    //     })
    //     setCart(finCart)
    //     console.log(listCart, listCart.length);

    // }, [listCart]);

    useEffect(() => {

        const finCart = listCart.find(cart => {
            return cart.id_product == item._id && cart.uid == userLogin.uid;
        })
        setCart(finCart)
        console.log(listCart);
        // finCart != undefined ? setCounter(finCart.quantity) : 0
        // console.log(cart);
    }, [])

    // console.log(item);

    const toPriceVN = (number) => {
        return number.toLocaleString('vi-VN');
    }

    const enabledClick = () => {
        Alert.alert("Warning", "Vui lòng chọn số lượng sản phẩm!",
            [
                {
                    text: 'ok',
                    style: 'cancel'
                }
            ]
        )
    }



    const addItemCart = () => {
        const finCart = listCart.find(cart => {
            return cart.id_product == item._id && cart.uid == userLogin.uid && cart.status == false;
        })
        console.log(finCart);
        if (finCart != undefined) {
            // console.log(ca);
            if (item.quantity < counter + finCart.quantity) {
                Alert.alert("Error", "Sản phẩm trong kho không đủ", [
                    {
                        text: 'ok',
                        style: 'cancel'
                    }
                ])
                return
            }
            dispastch(shopingCartSlice.actions.updateCart({
                id: finCart.id_cart,
                quantity: counter + finCart.quantity
            }))
            nextShopCart()
            return;
        }
        const newCart = {
            uid: userLogin.uid,
            id_cart: uuid.v4(),
            id_product: item._id,
            quantity: counter,
            checkBox: false,
            status: false,
            id_order: ""
        }
        dispastch(shopingCartSlice.actions.addCart(newCart))
        nextShopCart()


    }

    const nextShopCart = () => {
        navigation.navigate('cart')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }} >
            <HeaderItemDetail_Component navigation={navigation} IconRight={IconCart} title={item.name} onPressIconRight={nextShopCart} />
            <SliderImaeShow_Component listImg={item.image} />
            <View style={{ width: '80%', paddingVertical: 10, flexDirection: 'row' }}>
                <Text style={[st.titleType, { marginEnd: 20 }]}>{item.type}</Text>
                {item.plantType != null && <Text style={[st.titleType]}>{item.plantType}</Text>}
            </View>
            <Text style={{ width: '80%', color: COLORS.DeepSkyBlue, fontSize: SIZES.h0, marginBottom: 30 }}>{toPriceVN(item.price)}VND</Text>
            <DetailProduct_Component item={item} />
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ marginVertical: 10 }}>Đã chọn {counter} sản phẩm</Text>
                    <CouterProduct_Component counter={counter} setCounter={setCounter} quantity={item.quantity} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ marginVertical: 10 }}>Tạm tính</Text>
                    <Text>{toPriceVN(counter * item.price)}đ</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 70, position: "absolute", bottom: 30, alignItems: 'center' }}>
                <Button_Customer lable={"Chọn mua"} height={70} backgoundColor={counter == 0 ? ['#ABABAB', '#ABABAB'] : [COLORS.DeepSkyBlue, COLORS.DeepSkyBule05]} borderRadius={10}
                    onPress={counter == 0 ? enabledClick : addItemCart}
                />
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    titleType: {
        paddingHorizontal: 10, backgroundColor: COLORS.DeepSkyBlue, color: COLORS.white, maxWidth: 100, paddingVertical: 5, textAlign: 'center',
        borderRadius: 5
    }
})