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

const overView = require('./App/src/assets/overView.png');
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{
                  width: responsiveWidth(5),
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
                    : !focused
                    ? inquiresFocused
                    : inquires
                }></Image>
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="Project Updates" component={ProjectUpdates} />
        <Tab.Screen name="My Unit Details" component={MyUnitDetails} />
        <Tab.Screen name="Inquiries" component={Inquiries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
