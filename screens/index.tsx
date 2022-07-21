import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Transaction from './Transaction';

const Stack = createNativeStackNavigator();

const Screens = () => (
  <Stack.Navigator initialRouteName="transaction">
    <Stack.Screen
      options={{ headerShown: false }}
      name="transaction"
      component={Transaction}
    />
  </Stack.Navigator>
);

export default Screens;
