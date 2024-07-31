// screens/PortfolioPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  const renderContent = () => {
    if (activeTab === 'active') {
      return (
        <View style={styles.content}>
          <Text style={styles.message}>No trading data found</Text>
        </View>
      );
    } else if (activeTab === 'closed') {
      return (
        <View style={styles.content}>
          <Text style={styles.message}>No trading data found</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs for Active and Closed */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'active' && styles.activeTab]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>Active Trades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'closed' && styles.activeTab]}
          onPress={() => setActiveTab('closed')}
        >
          <Text style={[styles.tabText, activeTab === 'closed' && styles.activeTabText]}>Closed Trades</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      {renderContent()}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '48%',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#888',
  },
 
});

export default PortfolioPage;
