import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header from '../components/header';

const AddButton = ({onPress}) => {
  const DATA = [
    {
      id: '1',
      key: 'Floor',
      value: '7th floor',
    },
    {
      id: '2',
      key: 'Unit NO',
      value: 'FC-335',
    },
    {
      id: '3',
      key: 'Size',
      value: '1020 sq. ft,',
    },
    {
      id: '4',
      key: 'Purchase Rate',
      value: '9000 sq. ft,',
    },
    {
      id: '5',
      key: 'Price',
      value: '9,230,405',
    },
    {
      id: '6',
      key: 'Floor',
      value: '09/12/2021',
    },
  ];
  const Item = ({item}) => (
    <View style={styles.text}>
      <Text style={styles.textDark}>{item.key + ':'}</Text>
      <Text style={styles.textLight}>{item.value}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Header />
      <View>
        <View style={styles.bar}>
          <Text style={styles.headingText}>{'Unit Details'}</Text>

          <FlatList
            style={styles.flatlist}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity>
            <Text style={styles.button1}>{'Food Court Shops'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button2}>{'Residential Apartments'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button2}>{'Retail Shops'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    flexDirection: 'row',

    marginRight: responsiveWidth(5),
  },
  headingText: {
    color: '#000',
    marginTop: responsiveHeight(1.5),
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Poppins-SemiBold',
  },
  bar: {
    marginTop: responsiveHeight(2),
    backgroundColor: '#F9F9F9',
    alignSelf: 'center',
    borderRadius: responsiveWidth(1),
    padding: responsiveWidth(2),
    width: responsiveWidth(95),
  },
  text: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  textLight: {
    color: 'gray',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(1.4),
    width: responsiveWidth(25),
    marginTop: responsiveHeight(1),
  },
  textDark: {
    color: '#000',
    width: responsiveWidth(25),
    fontFamily: 'Poppins-SemiBold',
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.4),
  },
  buttonView: {
    backgroundColor: '#F4F5F9',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  button1: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1),
  },
  button2: {
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1),
    padding: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
  },
});

export default AddButton;
