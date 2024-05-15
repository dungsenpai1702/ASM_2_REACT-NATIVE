import React from 'react'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Home_screen, Notification_screen, Profile_screen, Search_screen } from '../screen/index.screen';
import { Iconify } from 'react-native-iconify';
import { StyleSheet, View } from 'react-native';
import { COLORS, H, W } from '../constants/theme';
import HomeIcon from '../assets/svg/home.svg'
import SearchIcon from '../assets/svg/search.svg'
import BellIcon from '../assets/svg/bell.svg'
import UserIcon from '../assets/svg/user.svg'
import BottomTabBarCustomer from '../components/TabBarBottom_Customer';
import { TransitionSpecs } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();



export default function Home_Navigation() {
    const sizeIcon = 34;

    // enableScreen(false)
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,

                tabBarHideOnKeyboard: true,
            })}

            tabBar={(props) => {
                return (
                    <BottomTabBarCustomer descriptors={props.descriptors} state={props.state} navigation={props.navigation} />
                )
            }}

        >
            <Tab.Screen name='home' component={Home_screen} />
            <Tab.Screen name='search' component={Search_screen} />
            <Tab.Screen name='notification' component={Notification_screen} />
            <Tab.Screen name='profile' component={Profile_screen} />
        </Tab.Navigator>
    )
}

const st = StyleSheet.create({
    containerForcused: {
        borderRadius: 50,
        // backgroundColor: '#d6f5d6'
        backgroundColor: COLORS.white
    }
})