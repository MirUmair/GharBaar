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
        margin: responsiveHeight(2),
      }}>
      <Text
        style={[
          styles.textDark,
          {
            color: '#005FFF',
            textDecorationLine: 'underline',
            fontSize: responsiveFontSize(1.5),
          },
        ]}>
        {'SP_M_112'}
      </Text>
      <Text style={[styles.textDark]}>{'Dec 16, 2020 1:00 PM'}</Text>
      <Text style={styles.textLight}>
        {'I need payment extensions for  my commercial shop unit. '}
      </Text>
      <Text style={[styles.textDark]}>{'Status: Pending'}</Text>
    </View>
  );
  return (
    <View
      style={{
        width: responsiveWidth(100),
        backgroundColor: '#fff',
        height: responsiveHeight(100),
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        data={type === 2 ? DATA : DATA2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
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
    width: responsiveWidth(85),
    textAlignVertical: 'center',

    fontSize: responsiveFontSize(1.6),
  },
  textDark: {
    color: '#075595',
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.3),
  },
});

export default ModalV;
