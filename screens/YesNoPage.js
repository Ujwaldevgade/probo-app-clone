// screens/YesNoPage.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const YesNoPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Yes/No Page</Text>
    <Button
      title="Go to Question Page"
      onPress={() => navigation.navigate('Question')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default YesNoPage;
