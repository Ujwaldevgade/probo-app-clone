// navigation/ProfileStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import ProfilePage from '../screens/ProfilePage';
import WalletPage from '../screens/WalletPage';
import NotificationPage from '../screens/NotificationPage';

const Stack = createStackNavigator();

const ProfileStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Ionicons name="wallet" size={24} color="black" style={{ marginRight: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    }}
  >
    <Stack.Screen name="Profile" component={ProfilePage} options={{ title: 'Profile' }} />
    <Stack.Screen name="Wallet" component={WalletPage} options={{ title: 'Wallet' }} />
    <Stack.Screen name="Notification" component={NotificationPage} options={{ title: 'Notifications' }} />
  </Stack.Navigator>
);

export default ProfileStackNavigator;
