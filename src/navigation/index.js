import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigation from "./BottomTabNavigation";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {isLogged_map} from "../store/authSlice";

const Stack = createStackNavigator();

export default function Navigation() {
  const isLogged = useSelector(isLogged_map);

  console.log('Logged: '+isLogged)

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DarkTheme}
    >
      {
        isLogged ? <SignedNavigation /> : <UnsignedNavigation />
      }
    </NavigationContainer>
  );
}

function UnsignedNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
    </Stack.Navigator>
  )
}

function SignedNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ title: 'Commands App' }}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalhes' }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Eita!' }} />
    </Stack.Navigator>
  )
}

