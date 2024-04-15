import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import ArrowDownIcon from '../assets/svg/arrow-down-svgrepo-com.svg'
import ArrowDownUpIcon from '../assets/svg/arrow-down-up-in-svgrepo-com.svg'
import { useSelector } from 'react-redux'
import { selectCartByUid, selectCartForOrder, selectCartItem, selectProduct } from '../redux/selector'
import { useUserLogin } from '../context/index.context'
import { FlatList } from 'react-native-gesture-handler'
export default function ItemOrderHistory_Component({ item }) {

    const { userLogin } = useUserLogin();

    const listCart = useSelector((state) => selectCartByUid(state, userLogin.uid))

    const [data, setData] = useState([])
    const listProduct = useSelector(selectProduct);

    useEffect(() => {
        const getData = () => {
            // console.log("listCart", listCart);
            console.log("List ID: ", item.listCart.lenght)
            const list = listCart.filter(cart => item.listCart.map(i => i == cart.id));
            // console.log("list: ", list);
            setData(list)
        }

        getData()


    }, [])
    const [showItem, setShowItem] = useState(false)
    const formatTime = (time) => {
        const date = new Date(time)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // Thêm số 0 vào trước nếu cần
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        // Trả về chuỗi đã được định dạng
        return formattedDay + '/' + formattedMonth + '/' + year + ' ' + formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    }

    const toPriceVN = (number) => {
        return number.toLocaleString('vi-VN');
    }
    return (
        <View style={[{
            width: '100%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 10
        }, st.shadow]}>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ width: '80%' }}>
                    <Text style={{ fontSize: SIZES.h4, color: 'black' }}><Text style={{ color: COLORS.black }}>Đơn hàng:</Text> {item.id}</Text>
                    <Text style={{ marginVertical: 5 }}>Số tiền thanh toán: {toPriceVN(item.sumPrice)}đ</Text>
                    <Text>{formatTime(item.timeOrder)}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { setShowItem(!showItem) }}
                >
                    {showItem == true ? (
                        <ArrowDownUpIcon width={26} height={26} />
                    ) : (
                        <ArrowDownIcon width={26} height={26} />
                    )}
                </TouchableOpacity>
            </View>

            {showItem && (
                <View style={{ width: '90%', height: '200' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            const product = listProduct.find(p => p._id == item.id_product);
                            // console.log("product: ", product)
                            return (
                                <View style={[{
                                    width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',

                                }, st.shadow]}>
                                    <Image source={product.image[0]} style={{ width: 70, height: 70 }} />
                                    <View>
                                        <Text>Tên mặt hàng{product.name}</Text>
                                        <Text>Số lượng mua: {item.quantity}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />

                </View>
            )}
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: '#8c8c8c',
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})