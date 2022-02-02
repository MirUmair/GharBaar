// import React from 'react';
// import {
//   StyleSheet,
//   Modal,
//   FlatList,
//   Text,
//   Image,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// const ModalV = ({visible, setVisible, type}) => {
//   const DATA2 = [
//     {
//       id: '1',
//       key: 'Down Payment',
//       value: 'February 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '2',
//       key: '1st Installment',
//       value: 'May 3, 2021',
//       value2: '761750',
//       isTrue: false,
//     },
//     {
//       id: '3',
//       key: '2nd Installment',
//       value: 'August 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '4',
//       key: '3rd Installment',
//       value: 'May 3, 2021.',
//       value2: '761750',
//       isTrue: false,
//     },
//     {
//       id: '5',
//       key: '4th Installment',
//       value: 'November 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '6',
//       key: '5th Installment',
//       value: 'August 3, 2021	',
//       value2: '761750',
//       isTrue: false,
//     },
//     {
//       id: '7',
//       key: '6th Installment',
//       value: 'November 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '8',
//       key: '7th Installment',
//       value: 'February 3, 2021',
//       value2: '761750',
//       isTrue: false,
//     },
//     {
//       id: '9',
//       key: '8th Installment',
//       value: 'May 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '10',
//       key: 'Remaining Amount',
//       value: 'At possession	',
//       value2: '30050000',
//       isTrue: false,
//     },
//   ];
//   const DATA = [
//     {
//       id: '1',
//       key: 'Down Payment',
//       value: 'February 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//     {
//       id: '2',
//       key: '1st Installment',
//       value: 'May 3, 2021',
//       value2: '761750',
//       isTrue: false,
//     },
//     {
//       id: '3',
//       key: '2nd Installment',
//       value: 'August 3, 2021',
//       value2: '3050000',
//       isTrue: true,
//     },
//   ];
//   const renderItem = ({item}) => <Item item={item} />;
//   const Item = ({item, index}) => (
//     <View
//       style={{
//         flexDirection: 'row',
//         height: responsiveHeight(8),
//         margin: responsiveHeight(2),
//       }}>
//       <Image
//         style={styles.icon}
//         source={require('../src/assets/placeholder2.png')}
//       />

//       <View style={[styles.item]}>
//         <Text style={styles.textLight}>
//           {'A new post has been added by skypark one.'}
//         </Text>
//         <Text style={[styles.textDark]}>{'September 20, 2021'}</Text>
//       </View>
//     </View>
//   );
//   return null;
// };

// const styles = StyleSheet.create({
//   container: {},
//   item: {
//     justifyContent: 'center',
//     marginLeft: responsiveWidth(3),
//   },

//   icon: {
//     width: responsiveWidth(16),
//     height: responsiveWidth(16),
//     resizeMode: 'contain',
//   },
//   text: {
//     position: 'absolute',
//     left: responsiveWidth(2),
//     textAlignVertical: 'center',
//     top: responsiveHeight(3),
//     paddingHorizontal: responsiveWidth(2),
//     height: responsiveHeight(2.8),
//     fontFamily: 'Poppins-SemiBold',
//     backgroundColor: '#000',
//     fontSize: responsiveFontSize(1.5),
//     color: 'white',
//   },
//   textLight: {
//     color: '#000',
//     fontFamily: 'Poppins-SemiBold',
//     width: responsiveWidth(60),
//     textAlignVertical: 'center',

//     fontSize: responsiveFontSize(1.6),
//   },
//   textDark: {
//     color: '#075595',
//     fontFamily: 'Poppins-Regular',
//     textAlignVertical: 'center',
//     marginTop: responsiveHeight(1.5),
//     fontSize: responsiveFontSize(1.3),
//   },
// });

// export default ModalV;

import React, {useState} from 'react';

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export interface Props {}

const Inquries: React.FC<Props> = ({}) => {
  const [isSelected, setIsSelected] = useState(0);

  const [list, setList] = useState([
    {
      name: 'SP_M_112',

      date: 'Dec 16,2020 1:00 PM',

      description: 'I need payment extensions for my commercial shop unit.',

      status: 'Pending',
    },

    {
      name: 'SP_M_112',

      date: 'Dec 16,2020 1:00 PM',

      description: 'I need payment extensions for my commercial shop unit.',

      status: 'Resolved',
    },

    {
      name: 'SP_M_112',

      date: 'Dec 16,2020 1:00 PM',

      description: 'I need payment extensions for my commercial shop unit.',

      status: 'Pending',
    },

    {
      name: 'SP_M_112',

      date: 'Dec 16,2020 1:00 PM',

      description: 'I need payment extensions for my commercial shop unit.',

      status: 'In Progress',
    },
  ]);

  const onTabChange = val => {
    if (val === 0) {
      setIsSelected(0);
    } else {
      setIsSelected(1);
    }
  };

  const keyExtractor = (item, index) => index.toString();

  // const renderTransmissionItem = ({item}: any) => {
  //   return (
  //     <View style={styles.viewStyle}>
  //       <Text style={styles.titleStyle}>{item.name}</Text>
  //       <Text style={styles.dateStyle}>{item.date}</Text>
  //       <Text style={styles.descriptionStyle}>{item.description}</Text>
  //       <Text
  //         style={
  //           item.status === 'Resolved'
  //              styles.statusColorChange
  //             : item.status === 'In Progress'
  //              styles.dateStyle
  //             : styles.statusStyle
  //         }>
  //         <Text style={styles.status}>Status:</Text> {item.status}
  //       </Text>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.secondTabView}>
          <Text style={styles.previousStyle}>Account and Billing</Text>
          <TextInput style={styles.input} placeholder="Enter subject here.." />
          <View style={styles.buttonView}>
            <TouchableOpacity>
              <Text style={styles.button1}>{'Accounts and Billing'}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button2}>{'General Inquiry'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>Description</Text>
          <TextInput
            style={styles.multiLine}
            placeholder="Enter Description here.."
          />
          <Text style={styles.description}>Attachment</Text>
          <View style={styles.viewFileChoose}>
            <TouchableOpacity style={styles.chooseButton}>
              <Text style={styles.textChooseFile}>Choose File</Text>
            </TouchableOpacity>
            <Text style={styles.noChooseFile}>No File chosen</Text>
          </View>
          <View style={styles.resetView}>
            <TouchableOpacity style={styles.reset}>
              <Text style={styles.textChooseFile}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveDetails}>
              <Text style={styles.textChooseFile}>Save Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Inquries.defaultProps = {};

// styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonView: {
    backgroundColor: '#F4F5F9',
    flexDirection: 'row',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(1),
    justifyContent: 'space-between',
    width: responsiveWidth(71.5),
  },
  button1: {
    backgroundColor: '#E9ECFF',
    borderRadius: responsiveWidth(1),
    margin: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
    color: '#075595',
    padding: responsiveWidth(1.5),
    paddingHorizontal: responsiveWidth(2.5),
    fontFamily: 'Poppins-Regular',
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
    paddingHorizontal: responsiveWidth(2.5),
    fontFamily: 'Poppins-Regular',
    padding: responsiveWidth(1.5),
    fontSize: responsiveFontSize(1.5),
  },
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: responsiveHeight(4),
    backgroundColor: '#F8F8F8',
    height: responsiveHeight(6),
    alignItems: 'center',
    borderRadius: responsiveFontSize(1),
  },
  buttonStyle: {
    marginLeft: responsiveWidth(2),
    color: '#075595',
    shadowColor: '#000',
    backgroundColor: '#E9ECFF',
    elevation: 10, // Android
    width: responsiveWidth(35),
    justifyContent: 'center',
    height: responsiveHeight(4.5),
    borderRadius: responsiveFontSize(1),
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 1,
    shadowRadius: 30.19,
  },
  diableButtonStyle: {
    color: 'black',
    width: responsiveWidth(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#009AEE',
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(3.5),
  },
  descriptionStyle: {
    lineHeight: responsiveHeight(2.5),
    color: 'black',
    width: '90%',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  status: {
    color: 'black',
    width: '90%',
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(3),
  },
  viewStyle: {
    width: '90%',
    height: responsiveHeight(15),
    borderBottomWidth: 0.167,
    borderBottomColor: '#C0C0C0',
    marginLeft: responsiveWidth(5),
    marginop: responsiveHeight(1),
  },
  statusStyle: {color: '#FF6700', fontSize: responsiveFontSize(1.6)},
  statusColorChange: {
    color: '#36802d',
  },
  dateStyle: {
    color: '#1f8dba',
    fontSize: responsiveFontSize(1.6),
  },
  previousStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  disableText: {
    color: 'silver',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: responsiveHeight(5.5),
    borderWidth: 1,
    width: responsiveWidth(90),
    borderColor: 'silver',
    marginTop: responsiveHeight(2),
    fontFamily: 'Poppins-Regular',

    borderRadius: responsiveFontSize(0.5),
    backgroundColor: '#F8F8F8',
  },
  secondTabView: {
    marginLeft: responsiveWidth(5),
    width: '95%',
    marginTop: responsiveHeight(4),
  },
  generalText: {color: '#1484CD', fontFamily: 'Poppins-Regular'},
  description: {
    marginTop: responsiveHeight(4),
    fontFamily: 'Poppins-Regular',

    color: 'black',
    fontWeight: 'bold',
  },
  multiLine: {
    height: responsiveHeight(20),
    borderWidth: 1,
    width: responsiveWidth(90),
    borderColor: 'silver',
    fontFamily: 'Poppins-Regular',

    marginTop: responsiveHeight(2),
    borderRadius: responsiveFontSize(0.5),
    backgroundColor: '#F8F8F8',
    textAlignVertical: 'top',
    paddingLeft: responsiveWidth(2),
  },
  chooseButton: {
    width: responsiveWidth(25),
    backgroundColor: 'black',
    height: responsiveHeight(5),
    justifyContent: 'center',
  },
  textChooseFile: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.6),
    justifyContent: 'center',
  },
  noChooseFile: {
    color: 'silver',
    fontFamily: 'Poppins-Regular',

    marginLeft: responsiveWidth(4),
  },
  viewFileChoose: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  reset: {
    width: responsiveWidth(18),
    backgroundColor: 'black',
    height: responsiveHeight(4.5),
    justifyContent: 'center',
  },
  resetView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: responsiveHeight(5),
    margin: responsiveWidth(2),
    width: responsiveWidth(80),
  },
  saveDetails: {
    backgroundColor: '#075595',
    width: responsiveWidth(30),
    justifyContent: 'center',
    marginLeft: responsiveWidth(6),
  },
});

export default Inquries;
