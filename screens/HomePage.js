import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Modal, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const images = [
  require('../assets/image1.jpg'), // Replace with your local image paths
  require('../assets/image2.jpg'),
  require('../assets/image3.jpg'),
];

const HomePage = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'yes' or 'no'
  const [sliderValue, setSliderValue] = useState(50);
  const [availableBalance, setAvailableBalance] = useState(500); // Example balance
  const slideAnim = useState(new Animated.Value(-Dimensions.get('window').height))[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleNavigate = (page) => {
    navigation.navigate(page);
  };

  const showModal = (type) => {
    setModalType(type);
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').height,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Ionicons name="wallet" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Section for Pages */}
        <View style={styles.pageContainer}>
          <TouchableOpacity style={styles.pageBox} onPress={() => handleNavigate('Cricket')}>
            <Ionicons name="football" size={30} color="#FF5733" />
            <Text style={styles.pageText}>Cricket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageBox} onPress={() => handleNavigate('Crypto')}>
            <Ionicons name="cash" size={30} color="#33FF57" />
            <Text style={styles.pageText}>Crypto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageBox} onPress={() => handleNavigate('Economy')}>
            <Ionicons name="stats-chart" size={30} color="#3399FF" />
            <Text style={styles.pageText}>Economy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageBox} onPress={() => handleNavigate('ShowMore')}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#FF33A1" />
            <Text style={styles.pageText}>Show More</Text>
          </TouchableOpacity>
        </View>

        {/* Advertisement Image */}
        <View style={styles.adContainer}>
          <Image
            source={images[currentImageIndex]} // Use the current image index
            style={styles.adImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.trendingTitle}>Trending Now</Text>

            {/* Trending Now Section */}
            <View style={styles.trendingSection}>
          <View style={styles.trendingContainer}>
            <View style={styles.trendingBox}>
              <Ionicons name="logo-bitcoin" size={30} color="#f7931a" />
              <Text style={styles.trendingText}>Bitcoin</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="logo-youtube" size={30} color="#ff0000" />
              <Text style={styles.trendingText}>YouTube</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="medal" size={30} color="#ffd700" />
              <Text style={styles.trendingText}>Olympics</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="ios-sports" size={30} color="#00bfff" />
              <Text style={styles.trendingText}>Sports News</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="logo-ethereum" size={30} color="#3c3c3b" />
              <Text style={styles.trendingText}>Ethereum</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="trending-up" size={30} color="#28a745" />
              <Text style={styles.trendingText}>Growth</Text>
            </View>
            <View style={styles.trendingBox}>
              <Ionicons name="timer" size={30} color="#ff5722" />
              <Text style={styles.trendingText}>Expiring Soon</Text>
            </View>
          </View>
        </View>

        {/* New Section for Rectangular Containers */}
        <View style={styles.rectangularContainerWrapper}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={styles.rectangularContainer}>
              <Text style={styles.mainText}>Bitcoin to be priced at 67644.01 USDT or more at 12:00 AM? {item}</Text>
              <Text style={styles.subText}>Bitcoin open price at 10:00 PM was 67644.01 USDT.{item}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.yesButton} onPress={() => showModal('yes')}>
                  <Text style={styles.buttonText}>Yes ₹100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => showModal('no')}>
                  <Text style={styles.buttonText}>No ₹50</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Modal for Yes/No Option */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="none"
          onRequestClose={hideModal}
        >
          <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirm Your Choice</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: '#007bff' }]}
                  onPress={() => {
                    hideModal();
                    // Handle Yes action here
                  }}
                >
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: '#dc3545' }]}
                  onPress={() => {
                    hideModal();
                    // Handle No action here
                  }}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boxContainer}>
                <View style={styles.infoBox}>
                  <Text style={styles.boxText}>Chance to Win: 60%</Text>
                  <Text style={styles.boxText}>Chance to Lose: 40%</Text>
                  <View style={styles.amountContainer}>
                    <Text style={styles.boxAmount}>₹100</Text>
                    <Text style={styles.boxAmount}>₹50</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sliderContainer}>
                <Text style={styles.sliderLabel}>{modalType === 'yes' ? 'Slide for Yes' : 'Slide for No'}</Text>
                <View style={styles.sliderWrapper}>
                  <TouchableOpacity
                    style={[styles.slider, { backgroundColor: sliderValue >= 50 ? '#007bff' : '#dc3545' }]}
                    onPress={() => setSliderValue(sliderValue >= 50 ? 0 : 100)}
                  >
                    <Text style={styles.sliderText}>{sliderValue >= 50 ? 'Yes' : 'No'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  hideModal();
                  // Handle Confirm action here
                }}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  mainContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  pageBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  pageText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333333',
  },
  adContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  adImage: {
    width: '100%',
    height: 200,
  },
  trendingSection: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: -1,
    textAlign: 'left',
    width: '100%',
  },
  trendingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping to new line on smaller screens
    justifyContent: 'flex-start',
  },
  trendingBox: {
    flexDirection: 'row', // Align items horizontally
    width: 100,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  trendingText: {
    marginLeft: 4, // Add some space between icon and text
    fontSize: 12, // Adjust font size as needed
    fontWeight: 'bold',
  },
  rectangularContainerWrapper: {
    marginVertical: 10,
  },
  rectangularContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  subText: {
    fontSize: 14,
    color: '#666666',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  yesButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  noButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  boxContainer: {
    marginVertical: 10,
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
  boxText: {
    fontSize: 14,
    color: '#333333',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  boxAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  sliderContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  sliderWrapper: {
    width: '80%',
    marginVertical: 10,
  },
  slider: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  sliderText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 5,
    fontSize: 12,
    color: '#007bff',
  },
});

export default HomePage;
