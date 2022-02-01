import React from 'react';
import {StyleSheet, Modal, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const ModalV = ({visible}) => {
  return (
    <Modal visible={visible} style={styles.container}>
      <Image style={styles.icon} source={require('../src/assets/cross.png')} />
      <Text style={styles.text}>{'June 21,2021'}</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    alignSelf: 'center',
    width: responsiveWidth(19),
    resizeMode: 'contain',
    margin: responsiveWidth(2),
  },
  text: {
    position: 'absolute',
    left: responsiveWidth(2),
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

export default ModalV;
