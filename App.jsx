import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Intro_screen from './src/screen/intro/intro_screen'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Context from './src/context/index.context'
export default function App() {
  // console.disableYellowBox = true;
  console.warn = () => { };
  return (
    <Context>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Context>
  )
}

const styles = StyleSheet.create({})