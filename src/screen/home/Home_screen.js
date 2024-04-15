import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Iconify } from 'react-native-iconify'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES, W } from '../../constants/theme'
import ItemProduct_Components from '../../components/ItemProduct_Components'
import HeaderHome_Components from '../../components/HeaderHome_Components'
import MenuHome_Component from '../../components/MenuHome_Component'
import { useSelector } from 'react-redux'
import { selectProduct } from '../../redux/selector'


export default function Home_screen({ navigation }) {
  const [focuse, setFocuse] = useState(0);
  const listProduct = useSelector(selectProduct);
  // console.log(listProduct);

  const renderItem = (type) => {

    const listRender = listProduct.filter(item => item.type == type)


    return listRender.map((item, i) => {
      const { price, name, plantType, image } = item;
      // console.log(price, name, plantType, image);
      if (item.type == type && i < 4) {
        return <ItemProduct_Components price={price} name={name} plantType={plantType} key={i} img={image[0]} item={item} navigation={navigation} />
      }
    })
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={[{ width: 50, height: 50, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 50, right: 30, zIndex: 100 }, st.shadow]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cart')
          }}
        >
          <Iconify icon='mdi:cart-outline' color={COLORS.DeepSkyBlue} size={34} />
        </TouchableOpacity>
      </View>


      <ScrollView style={{ width: '100%', height: '100%', zIndex: 0 }}

      >
        <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={{ width: W, alignItems: 'center' }}>
            <HeaderHome_Components />
          </View>
          {/* source={require('../../assets/img_home/homebackground.png')} */}
          <View style={[st.whatNew, st.shadow]} >
            <View style={{ width: '55%', justifyContent: 'center' }}>
              <Text style={{ color: COLORS.DeepSkyBlue, fontSize: SIZES.h2, width: '100%', fontWeight: '500' }}>Planta - toả sáng không gian nhà bạn</Text>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ color: COLORS.DeepSkyBlue, fontSize: SIZES.h3, marginEnd: 10 }}>Xem hàng mới về</Text>
                <Iconify icon='solar:arrow-right-outline' color={COLORS.DeepSkyBlue} size={24} />
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', height: '100%' }}>
              <Image source={require('../../assets/img_home/img_what-new.png')} style={{ height: '100%', width: '100', objectFit: 'contain' }} />
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <MenuHome_Component setFocuse={setFocuse} focuse={focuse} />
          </View>

          <View style={{ width: '90%', marginTop: 20 }}>
            <Text style={[st.textTitle]}>Cây trồng</Text>
            <View style={{ width: "100%", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

              {renderItem('Cây Trồng')}
            </View>
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
              <TouchableOpacity>
                <Text style={{ textAlign: 'right', fontSize: SIZES.h4, color: COLORS.black, textDecorationLine: 'underline' }}>Xem thêm Cây trồng</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: '90%', marginTop: 50 }}>
            <Text style={[st.textTitle]}>Chậu cây trồng</Text>
            <View style={{ width: "100%", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {renderItem("Chậu Cây")}
            </View>
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
              <TouchableOpacity>
                <Text style={{ textAlign: 'right', fontSize: SIZES.h4, color: COLORS.black, textDecorationLine: 'underline' }}>Xem thêm Chậu cây trồng</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: '90%', marginTop: 50, }}>
            <Text style={[st.textTitle]}>Dụng cụ trồng cây</Text>
            <View style={{ width: "100%", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {renderItem("Dụng Cụ Chăm Sóc")}
            </View>
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
              <TouchableOpacity>
                <Text style={{ textAlign: 'right', fontSize: SIZES.h4, color: COLORS.black, textDecorationLine: 'underline' }}>Xem thêm Dụng cụ trồng cây</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[{ marginBottom: 110, width: '90%', marginTop: 50, }]}>
            <Text style={[st.textTitle, { marginBottom: 10 }]}>Combo chăm sóc (mới)</Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F6F6F6', height: 134, borderRadius: 8, overflow: 'hidden' }}>
              <View style={{ width: '65%', height: '100%', padding: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: SIZES.h4, fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Lemon Balm Grow Kit </Text>
                <Text style={{ fontSize: SIZES.h5 }}>
                  Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...
                </Text>
              </View>
              <View style={{ width: '35%', height: '100%' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/img_home/imgBottom.png')} />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
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
  textTitle: {
    color: COLORS.black,
    fontSize: SIZES.h0,
    fontWeight: '600',
    fontFamily: 'lato',

  },
  whatNew: {
    width: W * 0.9,
    height: 150,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginTop: -30,
    flexDirection: 'row'
  }
})