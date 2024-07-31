// screens/NotificationPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationPage = () => (
  <View style={styles.container}>
    <Text style={styles.noNotificationText}>You have no notifications yet</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  noNotificationText: {
    fontSize: 18,
    color: '#888',
  },
});

export default NotificationPage;
