import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Cart_screen, CheckoutScreen_screen, DetailProduct, Forgot_screen, Intro_screen, OrderHistory_screen, Payment_screen, Signin_screen, Signup_screen, Splash_screen } from '../screen/index.screen';
import Home_Navigation from './Home_Navigation';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name='intro' component={Intro_screen} />
                <Stack.Screen name='splash' component={Splash_screen} />
                <Stack.Screen name='signin' component={Signin_screen} />
                <Stack.Screen name='signup' component={Signup_screen} />
                <Stack.Screen name='forgot' component={Forgot_screen} />

                <Stack.Screen name='HomeUser' component={Home_Navigation} />
                <Stack.Screen name='detailProduct' component={DetailProduct} />
                <Stack.Screen name='cart' component={Cart_screen} />

                <Stack.Screen name='checkOut' component={CheckoutScreen_screen} />
                <Stack.Screen name='payment' component={Payment_screen} />

                <Stack.Screen name="orderHistory" component={OrderHistory_screen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
