import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, W } from '../constants/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { notificationSlice } from '../redux/notificationSlice/notificationSlice'

export default function ItemNotification_Component({ data, navigation }) {

    const dispatch = useDispatch();


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

    return data != undefined && (
        <TouchableOpacity style={[{ width: '90%', height: 80, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginHorizontal: W * 0.1 / 2, marginVertical: 10 }, st.shadow]}
            onPress={() => {
                dispatch(notificationSlice.actions.updateStateNotification(data.id));
                
            }}
        >
            <View style={{ width: '70%' }}>
                <Text style={{ color: COLORS.DeepSkyBlue, fontSize: SIZES.h4, fontWeight: '500' }}>
                    {data?.message}
                </Text>
                <Text style={{ color: '#7D7B7B', marginVertical: 5 }}>
                    click xem chi tiết
                </Text>
                <Text>{formatTime(data?.time)}</Text>
            </View>
            {data?.status == false && (
                <View style={{ width: 15, height: 15, backgroundColor: COLORS.DeepSkyBlue, borderRadius: 10 }}>

                </View>
            )}


        </TouchableOpacity>
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