import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CommandsScreen from "../screens/CommandsScreen";
import CreateAppScreen from "../screens/CreateAppScreen";
import CreateCommandScreen from "../screens/CreateCommandScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favoritos"
        component={FavoritesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeTabStack = createStackNavigator();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeTabStack.Screen
        name="CommandsScreen"
        component={CommandsScreen}
      />
      <HomeTabStack.Screen
        name="CreateAppScreen"
        component={CreateAppScreen}
      />
      <HomeTabStack.Screen
        name="CreateCommandScreen"
        component={CreateCommandScreen}
      />
    </HomeTabStack.Navigator>
  );
}

const FavoritesTabStack = createStackNavigator();

function FavoritesTabNavigator() {
  return (
    <FavoritesTabStack.Navigator>
      <FavoritesTabStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favoritos' }}
      />
    </FavoritesTabStack.Navigator>
  );
}
