import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderItemDetail_Component from '../../components/HeaderItemDetail_Component'
import IconDelete from '../../assets/svg/delete-2.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItem, selectSumPrice } from '../../redux/selector';
import { COLORS, SIZES, W } from '../../constants/theme';
import ItemCart_Component from '../../components/ItemCart_Component';
import { shopingCartSlice } from '../../redux/shopingCartSlice/shopingCartSlice';
import Button_Customer from '../../components/Button_Customer';
import IconArrowRight from '../../assets/svg/arrow-right.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { useUserLogin } from '../../context/index.context';
import uuid from 'react-native-uuid'
import { orderSlice } from '../../redux/orderSlice/orderSlice';
import { productSlice } from '../../redux/productSlice/ProductSlice';
import { notificationSlice } from '../../redux/notificationSlice/notificationSlice';

export default function Cart_screen({ navigation }) {
    // const [iconRight, setIconRight] = useState(Delete);
    const { userLogin } = useUserLogin();
    const sumPrice = useSelector((state) => selectSumPrice(state, userLogin.uid))

    const listCart = useSelector((state) => selectCartItem(state, userLogin.uid));
    // console.log("listCart", listCart);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("sumPrice: ", sumPrice);
    }, [sumPrice])
    const deleteAlllCart = () => {
        dispatch(shopingCartSlice.actions.deleteAll())
    }

    const toPriceVN = (number) => {
        return number.toLocaleString('vi-VN');
    }

    const order = () => {

        let listIdCart = [];
        listIdCart = listCart.filter((item) => item.checkBox).map((item) => item.id_cart)
        dispatch(shopingCartSlice.actions.updateCartSatus(listIdCart))


        // navigation.navigate('checkOut', { listID: listIdCart });
        // console.log("listIdCart: ", listIdCart);
        const timeOrder = new Date().toISOString();
        const orderItem = {
            listCart: listIdCart,
            id: uuid.v4(),
            timeOrder: timeOrder,
            sumPrice: sumPrice,
            uid: userLogin.uid
        }
        listCart.forEach(item => {
            if (item.checkBox && item.status == false) {
                dispatch(productSlice.actions.updateQuantityProduct({
                    id: item.id_product,
                    quantity: item.quantity
                }))
            }
        });

        dispatch(orderSlice.actions.addOrderItem(orderItem));
        dispatch(notificationSlice.actions.addNotification({
            status: false,
            id_order: orderItem.id,
            id: uuid.v4(),
            message: "Đặt hàng thành công!",
            time: timeOrder,
            uid: userLogin.uid
        }))

    }

    // console.log(listCart.length);
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }}>
            <HeaderItemDetail_Component onPressIconRight={deleteAlllCart} title={'Cart'} navigation={navigation} IconRight={listCart.length > 0 ? IconDelete : false} />

            {listCart && listCart.length == 0 ? (
                <>
                    <View style={{ width: '100%', marginTop: 100, alignItems: 'center' }}>
                        <Text style={{ color: COLORS.black, fontSize: SIZES.h2 }}>Giỏ hàng hiện tại đang trống</Text>
                    </View>
                </>
            ) : (
                <>
                    <FlatList
                        data={listCart}
                        renderItem={({ item, index }) => {
                            if (item.status == false) {
                                return <ItemCart_Component data={item} />
                            }
                        }}
                        style={{ width: '100%' }}
                    />
                </>
            )}

            {sumPrice && listCart && listCart.length != 0 ? (
                <View style={{ width: '100%', justifyContent: 'center', paddingHorizontal: W * 0.1 / 2 }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>
                            Tạm tính
                        </Text>
                        <Text style={{ color: COLORS.black }}>{toPriceVN(sumPrice)}đ</Text>
                    </View>
                    <Button_Customer onPress={order} lable={'Thanh toán'} icon={faArrowRight} backgoundColor={['black', 'white']} height={70} />
                </View>
            ) : (
                <></>
            )}
        </View>
    )
}

const styles = StyleSheet.create({})