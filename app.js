import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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