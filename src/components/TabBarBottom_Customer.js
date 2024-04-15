import React from "react";
import { View, TouchableOpacity, Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import BottomTabIcon from "./BottomTabIcon";
import Animated, { useAnimatedStyle, withClamp, withSpring } from 'react-native-reanimated'
import { useSelector } from "react-redux";
import { selectNotificationStatus } from "../redux/selector";


function BottomTabBarCustomer({ state, descriptors, navigation }) {
    const { width } = useWindowDimensions();
    const MARGIN = 20;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / 4;

    const notificationLength = useSelector(selectNotificationStatus)

    const translateAnimation = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(TAB_WIDTH * state.index) }]
        }
    })

    return (
        <View style={[st.tabBarContainer, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
            <Animated.View style={[{ width: TAB_WIDTH }, st.slidingTabContainer, translateAnimation]}>
                <View style={[st.slidingTab]}></View>
            </Animated.View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                {/* const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name; */}

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={[{}, st.contentContainer]}>
                            <BottomTabIcon route={route.name} focused={isFocused} />
                            {/* <Text style={{ color: isFocused ? COLORS.deepGreen : COLORS.white, fontSize: 14 }}>
                                {route.name}
                            </Text> */}
                            {/* {
                                isFocused && (
                                    <Text style={{ color: COLORS.black, fontSize: 14, fontWeight: '500' }}>{route.name}</Text>
                                )
                            } */}
                            {route.name == "notification" && notificationLength.length != 0 ? (
                                <View style={[{
                                    width: 50, height: 40, backgroundColor: COLORS.white, position: 'absolute', top: -35, zIndex: 50, borderRadius: 20, borderBottomStartRadius: 0, borderTopStartRadius: 20, right: -10,
                                    borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center',
                                    borderTopEndRadius: 15
                                }, st.shadow]}>
                                    <Text style={{ color: COLORS.DeepSkyBlue, fontWeight: 'bold', fontSize: SIZES.h4 }}>{notificationLength.length}</Text>
                                </View>
                            ) : (<></>)}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

const st = StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'rgba(72, 148, 254, 1)',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        // overflow: 'hidden'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    slidingTab: {
        width: 90,
        height: 65,
        borderRadius: 50,
        backgroundColor: COLORS.white
    }, slidingTabContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: '#666666',
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    }
})

export default BottomTabBarCustomer;