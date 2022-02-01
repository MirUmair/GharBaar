import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
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
          justifyContent: 'space-between',
          width: responsiveWidth(30),
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            style={styles.icon}
            source={require('../src/assets/bell.png')}
          />
          <Image
            style={[styles.dot]}
            source={require('../src/assets/dotCounter.png')}
          />
        </TouchableOpacity>
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
    height: responsiveHeight(10),
    backgroundColor: '#F9F9F9',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    flexDirection: 'row',
    width: responsiveWidth(100),
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dotView: {
    zIndex: 22,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    marginTop: responsiveHeight(-4.5),
    marginLeft: responsiveWidth(-6.5),
  },
  dot: {
    width: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(-3),
    resizeMode: 'contain',
  },
  icon: {
    width: responsiveWidth(12),
    resizeMode: 'contain',
  },
});

export default AddButton;
