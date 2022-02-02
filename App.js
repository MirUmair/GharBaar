import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Inquiries from './App/containers/inquiries';
import MyUnitDetails from './App/containers/myUnitDetails';
import Overview from './App/containers/overview';
import ProjectUpdates from './App/containers/projectUpdates';
const overView = require('./App/src/assets/overVew.png');
const overViewFocused = require('./App/src/assets/overViewFocused.png');
const details = require('./App/src/assets/details.png');
const detailsFocused = require('./App/src/assets/detailsFocused.png');
const inquires = require('./App/src/assets/inquires.png');
const inquiresFocused = require('./App/src/assets/inquiresFocused.png');
const updates = require('./App/src/assets/updates.png');
const updatesFocused = require('./App/src/assets/updatesFocused.png');
const tab1 = 'Overview';
const tab2 = 'Project Updates';
const tab3 = 'My Unit Details';
const tab4 = 'Inquiries';

const Tab = createBottomTabNavigator();
const getTabBarLabel =
  routeName =>
  ({focused}) =>
    (
      <Text
        style={{
          color: focused ? '#000' : '#959595',
          fontSize: responsiveFontSize(1.2),
          fontFamily: 'Poppins-Regular',
        }}>
        {routeName === tab1
          ? tab1
          : routeName === tab2
          ? tab2
          : routeName === tab3
          ? tab3
          : routeName}
      </Text>
    );
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(5.5),
                  resizeMode: 'contain',
                }}
                source={
                  route.name === tab1
                    ? focused
                      ? overViewFocused
                      : overView
                    : route.name === tab2
                    ? focused
                      ? updatesFocused
                      : updates
                    : route.name === tab3
                    ? focused
                      ? detailsFocused
                      : details
                    : focused
                    ? inquiresFocused
                    : inquires
                }></Image>
            );
          },
          tabBarLabel: getTabBarLabel(route.name),
          swipeEnabled: true,
          tabBarActiveTintColor: '#000',
        })}>
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="Project Updates" component={ProjectUpdates} />
        <Tab.Screen name="My Unit Details" component={MyUnitDetails} />
        <Tab.Screen name="Inquiries" component={Inquiries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
