import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const AddButton = ({onPress}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          fontFamily: 'Poppins-Regular',
        }}>
        Settings!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    flexDirection: 'row',

    marginRight: responsiveWidth(5),
  },
  icon: {
    backgroundColor: '#1F1F1F',

    height: responsiveFontSize(10),
    width: responsiveFontSize(10),
    marginVertical: responsiveWidth(1),
    marginHorizontal: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#707070',
  },
});

export default AddButton;
