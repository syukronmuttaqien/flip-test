import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Transaction from './Transaction';

const Stack = createNativeStackNavigator();

const Screens = () => (
  <Stack.Navigator>
    <Stack.Screen name="transaction" component={Transaction} />
  </Stack.Navigator>
);

export default Screens;
