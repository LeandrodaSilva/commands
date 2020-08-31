import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import CommandsScreen from "./screens/CommandsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreateAppScreen from "./screens/CreateAppScreen";
import CreateCommandScreen from "./screens/CreateCommandScreen";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen}/>
        <AppStack.Screen name="FavoritesScreen" component={FavoritesScreen}/>
        <AppStack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <AppStack.Screen name="CreateAppScreen" component={CreateAppScreen}/>
        <AppStack.Screen name="CreateCommandScreen" component={CreateCommandScreen}/>
        <AppStack.Screen name="CommandsScreen" component={CommandsScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
