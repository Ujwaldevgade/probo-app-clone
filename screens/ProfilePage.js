// screens/ProfilePage.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Import local profile icon
import ProfileIcon from '../assets/profile-icon.png'; // Adjust the path as necessary

const ProfilePage = () => (
  <View style={styles.container}>
    {/* Profile Section */}
    <View style={styles.profileSection}>
      <Image source={ProfileIcon} style={styles.profileImage} />
      <Text style={styles.name}>Ujwal Devgade</Text>
      <View style={styles.followContainer}>
        <Text style={styles.followText1}>Followers: 100</Text>
        <Text style={styles.followText2}>Following: 50</Text>
      </View>
      <Text style={styles.balanceText}>Available Balance: ₹500</Text>
      <Text style={styles.levelText}>Level: Beginner</Text>
    </View>

    {/* Options Section */}
    <View style={styles.optionsContainer}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Invite and Earn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Probo Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Rate Probo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>App Language</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
  followText1: {
    fontSize: 16,
    paddingRight: 50,
  },

  followText2: {
    fontSize: 16,
  },

  balanceText: {
    fontSize: 16,
    marginBottom: 5,
  },
  levelText: {
    fontSize: 16,
    marginBottom: 20,
  },
  optionsContainer: {
    flex: 1,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
});

export default ProfilePage;
