import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeIcon from '../assets/svg/home.svg'
import SearchIcon from '../assets/svg/search.svg'
import BellIcon from '../assets/svg/bell.svg'
import UserIcon from '../assets/svg/user.svg'
import { COLORS } from '../constants/theme'

export default function BottomTabIcon({ route, focused }) {
    const sizeIcon = 34;
    const colorFocused = COLORS.DeepSkyBlue;
    const colorFocusedNull = COLORS.white;
    const RenderIcon = () => {
        switch (route) {
            case "home":
                return <HomeIcon width={sizeIcon} height={sizeIcon} fill={focused ? colorFocused : colorFocusedNull} />
                break;
            case "search":
                return <SearchIcon width={sizeIcon} height={sizeIcon} fill={focused ? colorFocused : colorFocusedNull} />
                break;
            case "notification":
                return <BellIcon width={sizeIcon} height={sizeIcon} fill={focused ? colorFocused : colorFocusedNull} />
                break;
            case "profile":
                return <UserIcon width={sizeIcon} height={sizeIcon} fill={focused ? colorFocused : colorFocusedNull} />
                break;
            default:
                break;
        }
    }

    return (
        <RenderIcon />
    )
}

const styles = StyleSheet.create({})