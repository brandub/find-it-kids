import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent'; 



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeSelector from './components/ThemeSelector';
import GamePlayGrid from './components/GamePlayGrid';
import CreateTheme from './components/CreateTheme';
import Camera from './components/Camera';


const Stack = createStackNavigator();



function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Theme" component={ThemeSelector} />
        <Stack.Screen name="Game Play" component={GamePlayGrid} />
        <Stack.Screen name="Create Theme" component={CreateTheme} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
