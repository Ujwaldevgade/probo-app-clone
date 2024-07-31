// screens/ShowMorePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowMorePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Show More Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ShowMorePage;
