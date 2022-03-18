import React from 'react'
import { StatusBar, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './src/navigation/tabs'

const Stack = createStackNavigator()

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator initialRouteName="MainView">
        <Stack.Screen name="MainView" component={Tabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App