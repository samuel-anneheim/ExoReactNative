import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormUser from './FormUser';
import User from './User';

const Stack = createNativeStackNavigator();

//Page mère de l'exo navigation
const HomeNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="FormUser" component={FormUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigate;
