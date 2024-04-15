import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header_Customer from '../../components/Header_Customer'
import InputSearch_Components from '../../components/InputSearch_Components'
import ItemHistorySearch_Components from '../../components/ItemHistorySearch_Components'
import ItemSearch_Components from '../../components/ItemSearch_Components'
import { useSelector } from 'react-redux'
import { selectProduct } from '../../redux/selector'


export default function Search_screen({ navigation }) {
    const [search, setSearch] = useState('');
    const listProducts = useSelector(selectProduct);

    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        setListSearch(listProducts.filter(item => item.name.includes(search)))
    }, [search]);

    const showHistory = () => {

        if (search.trim() == '') {
            return (
                <>
                    <Text>Tìm kiếm gần đây</Text>
                    <ItemHistorySearch_Components content={'Spider Plant'} />
                    <ItemHistorySearch_Components content={'Song of India'} />
                </>
            )
        } else {
            return (
                <FlatList
                    data={listSearch}
                    renderItem={({ item }) => {
                        return (
                            <ItemSearch_Components navigation={navigation} item={item} title={item.name} price={item.price} quantity={item.quantity} key={item._id} />
                        )
                    }}
                />
            )
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <Header_Customer navigation={navigation} title={'Tìm kiếm'} showLeft={true} shadow={true} />
            <View style={{ width: '80%', height: '80%' }}>
                <InputSearch_Components value={search} onChangeText={setSearch} />

                {showHistory()}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})