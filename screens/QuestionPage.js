// screens/QuestionPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionPage = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Question Page</Text>
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

export default QuestionPage;
