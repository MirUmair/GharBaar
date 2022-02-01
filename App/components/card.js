import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const AddButton = item => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../src/assets/background.png')}
      />
      <Text style={styles.text}>{'June 21,2021'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 0.1,
    borderRadius: responsiveWidth(0.5),
    elevation: 1,
  },
  icon: {
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
    width: responsiveWidth(76),
    marginHorizontal: responsiveWidth(1),
  },
  text: {
    position: 'absolute',
    left: responsiveWidth(2.5),
    textAlignVertical: 'center',
    top: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(2.8),
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: '#000',
    fontSize: responsiveFontSize(1.5),
    color: 'white',
  },
});

export default AddButton;
