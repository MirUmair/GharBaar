import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const AddButton = ({}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../src/assets/icon.png')} />
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(28),
          marginRight: responsiveWidth(6),
        }}>
        <Image style={styles.icon} source={require('../src/assets/bell.png')} />
        <Image
          style={styles.icon}
          source={require('../src/assets/placeholder.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(12),
    backgroundColor: '#F9F9F9',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    flexDirection: 'row',
    width: responsiveWidth(100),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: responsiveWidth(18),
    resizeMode: 'contain',
  },
});

export default AddButton;
