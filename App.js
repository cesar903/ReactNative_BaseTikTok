import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/screens/Home"
import Likes from "./src/screens/Likes"
import Search from "./src/screens/Search"
const Stack = createNativeStackNavigator()

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  </NavigationContainer>
}