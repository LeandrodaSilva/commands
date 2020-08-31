import * as React from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NotFoundScreen from '../screens/NotFoundScreen';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigation from "./BottomTabNavigation";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen/styles";

export default function Navigation(props) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ title: 'Commands App' }}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalhes' }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Eita!' }} />
    </Stack.Navigator>
  );
}
