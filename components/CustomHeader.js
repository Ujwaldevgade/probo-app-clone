// components/CustomHeader.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Ionicons name="person" size={24} color="black" />
    </TouchableOpacity>
    <View style={styles.rightIcons}>
      <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
        <Ionicons name="wallet" size={24} color="black" style={{ marginRight: 20 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Ionicons name="notifications" size={24} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#fff',
  },
  rightIcons: {
    flexDirection: 'row',
  },
});

export default CustomHeader;
