import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header_Customer from '../../components/Header_Customer'
import { COLORS, SIZES } from '../../constants/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ItemNotification_Component from '../../components/ItemNotification_Component'
import { useSelector } from 'react-redux'
import { selectNotification } from '../../redux/selector'
import { useUserLogin } from '../../context/index.context'

export default function Notification_screen({ navigation }) {
  const { userLogin } = useUserLogin();
  const data = useSelector(selectNotification);
  return (
    <View style={{ flex: 1 }}>
      <Header_Customer navigation={navigation} title={'Thông báo'} showRight={true} shadow={true} />
      <View style={{ width: '100%', alignItems: 'center', height: '92%', paddingTop: 50, height: '80%' }}>

        <FlatList
          data={[...data].reverse()}
          renderItem={({ item }) => {

            if (item.uid == userLogin.uid) {
              return <ItemNotification_Component navigation={navigation} data={item} />
            }
          }}
          style={{ width: '100%', }}
        // keyExtractor={({ item }) => item.id}
        />

      </View>
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