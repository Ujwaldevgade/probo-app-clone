// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
import PortfolioPage from '../screens/PortfolioPage';
import RewardsPage from '../screens/RewardsPage';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Search') {
          iconName = 'search';
        } else if (route.name === 'Portfolio') {
          iconName = 'briefcase';
        } else if (route.name === 'Rewards') {
          iconName = 'gift';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarLabel: ({ color }) => (
        <Text style={{ color }}>{route.name}</Text>
      ),
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Search" component={SearchPage} />
    <Tab.Screen name="Portfolio" component={PortfolioPage} />
    <Tab.Screen name="Rewards" component={RewardsPage} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
