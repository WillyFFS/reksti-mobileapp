import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home.js";
import News from "./screen/News.js";
// import “react-native-gesture-handler”;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
      name="home" 
      component={Home}
      ></Stack.Screen>
      <Stack.Screen 
      name="news" 
      component={News}
      ></Stack.Screen>
    </Stack.Navigator>
    
  );
}