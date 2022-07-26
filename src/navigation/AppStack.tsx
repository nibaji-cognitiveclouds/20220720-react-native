import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Page2 from '../components/Page2';

const AppStack = () => {

 const {Navigator, Screen} = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Navigator>
            <Screen component={Home} name="Home" />
            <Screen component={Page2} name="Page2" />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppStack