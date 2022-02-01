import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Payment = item => {
  const DATA2 = [
    {
      id: '1',
      key: 'Total Amount',
      value: '1 crore, 1 lac and 60 thousand rupees.',
    },
    {
      id: '2',
      key: 'Amount Paid',
      value: '38 lac, 11 thousand, 7 hundred and 50 rupees.',
    },
    {
      id: '3',
      key: 'Total Left',
      value: '63 lac, 48 thousand, 2 hundred and 50 rupees.',
    },
  ];
  const renderItem2 = ({item}) => <Item2 item={item} />;
  const Item2 = ({item}) => (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../src/assets/document.png')}
      />
    </View>
  );
  return (
    <View
      style={{
        marginTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.folder}
          source={require('../src/assets/folder.png')}
        />
        <Text style={styles.text}>Documents</Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[{margin: responsiveWidth(3)}]}
        data={DATA2}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', marginTop: responsiveHeight(5)}}>
        <Image
          style={styles.folder}
          source={require('../src/assets/folder.png')}
        />
        <Text style={styles.text}>Given Receipts</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[{margin: responsiveWidth(3)}]}
        data={DATA2}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barView: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    flexDirection: 'row',
    marginTop: responsiveHeight(5),
    margin: responsiveWidth(3),
  },
  button: {
    width: responsiveWidth(94),
    borderWidth: 0.1,
    height: responsiveHeight(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
    margin: responsiveWidth(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  text: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    marginBottom: responsiveHeight(2),
  },
  icon: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    resizeMode: 'contain',
    marginLeft: responsiveWidth(2),
  },
  folder: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    resizeMode: 'contain',
    marginHorizontal: responsiveWidth(3),
  },
  leftBar: {
    width: responsiveWidth(35),
    height: responsiveHeight(6),

    justifyContent: 'center',
    backgroundColor: '#8CC540',
  },
  rightBar: {
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 167, 157, 0.17)',
  },
  textPercent: {
    marginLeft: responsiveWidth(5),
    color: '#000',
  },
  textBtn: {
    alignSelf: 'center',
    color: '#000',
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
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: 'space-between',
    width: responsiveWidth(46),
  },
  button1: {
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
    padding: responsiveWidth(1.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  button2: {
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    padding: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
  },
});

export default Payment;
