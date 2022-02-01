import React from 'react';
import {
  StyleSheet,
  Modal,
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const ModalV = ({visible, setVisible, type}) => {
  const DATA2 = [
    {
      id: '1',
      key: 'Down Payment',
      value: 'February 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '2',
      key: '1st Installment',
      value: 'May 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '3',
      key: '2nd Installment',
      value: 'August 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '4',
      key: '3rd Installment',
      value: 'May 3, 2021.',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '5',
      key: '4th Installment',
      value: 'November 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '6',
      key: '5th Installment',
      value: 'August 3, 2021	',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '7',
      key: '6th Installment',
      value: 'November 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '8',
      key: '7th Installment',
      value: 'February 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '9',
      key: '8th Installment',
      value: 'May 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '10',
      key: 'Remaining Amount',
      value: 'At possession	',
      value2: '30050000',
      isTrue: false,
    },
  ];
  const DATA = [
    {
      id: '1',
      key: 'Down Payment',
      value: 'February 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
    {
      id: '2',
      key: '1st Installment',
      value: 'May 3, 2021',
      value2: '761750',
      isTrue: false,
    },
    {
      id: '3',
      key: '2nd Installment',
      value: 'August 3, 2021',
      value2: '3050000',
      isTrue: true,
    },
  ];
  const renderItem = ({item}) => <Item item={item} />;
  const Item = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        height: responsiveHeight(8),
        margin: responsiveHeight(2),
      }}>
      <Image
        style={styles.icon}
        source={require('../src/assets/placeholder2.png')}
      />

      <View style={[styles.item]}>
        <Text style={styles.textLight}>
          {'A new post has been added by skypark one.'}
        </Text>
        <Text style={[styles.textDark]}>{'September 20, 2021'}</Text>
      </View>
    </View>
  );
  return null;
};

const styles = StyleSheet.create({
  container: {},
  item: {
    justifyContent: 'center',
    marginLeft: responsiveWidth(3),
  },

  icon: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    resizeMode: 'contain',
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
  textLight: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    width: responsiveWidth(60),
    textAlignVertical: 'center',

    fontSize: responsiveFontSize(1.6),
  },
  textDark: {
    color: '#075595',
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(1.3),
  },
});

export default ModalV;
