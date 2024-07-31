// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ProfilePage from '../screens/ProfilePage';
import WalletPage from '../screens/WalletPage';
import NotificationPage from '../screens/NotificationPage';
import CricketPage from '../screens/CricketPage';
import CryptoPage from '../screens/CryptoPage';
import EconomyPage from '../screens/EconomyPage';
import ShowMorePage from '../screens/ShowMorePage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={ProfilePage} />
    <Stack.Screen name="Wallet" component={WalletPage} />
    <Stack.Screen name="Notification" component={NotificationPage} />
    <Stack.Screen name="Cricket" component={CricketPage} />
    <Stack.Screen name="Crypto" component={CryptoPage} />
    <Stack.Screen name="Economy" component={EconomyPage} />
    <Stack.Screen name="ShowMore" component={ShowMorePage} />
  </Stack.Navigator>
);

export default AppNavigator;
