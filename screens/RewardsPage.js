// screens/RewardsPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Clipboard } from 'react-native';

// Import the image
import image1 from '../assets/image1.jpg'; // Make sure the path is correct

const RewardsPage = () => {
  const handleCopyReferralId = () => {
    Clipboard.setString('YOUR_REFERRAL_ID_HERE');
    alert('Referral ID copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      {/* Invite Section */}
      <View style={styles.inviteSection}>
        <Text style={styles.sectionTitle}>Invite Your Friends and Earn Up to ₹200 Per Invite</Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.image} />
      </View>

      {/* Referral ID Section */}
      <View style={styles.referralSection}>
        <Text style={styles.referralTitle}>Copy Referral ID</Text>
        <TouchableOpacity style={styles.copyButton} onPress={handleCopyReferralId}>
          <Text style={styles.buttonText}>Copy Referral ID</Text>
        </TouchableOpacity>
      </View>

      {/* How It Works Section */}
      <View style={styles.howItWorksSection}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        <Text style={styles.description}>Invite your friends to Probo and earn 1% profit share every time. Earn up to ₹200 per invite.</Text>
      </View>

      {/* Other Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.buttonText}>Invite Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.buttonText}>Other Options</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inviteSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  advertisementContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  advertisementText: {
    fontSize: 16,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  referralSection: {
    marginBottom: 20,
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  howItWorksSection: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
});

export default RewardsPage;
