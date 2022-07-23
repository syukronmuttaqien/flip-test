import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Transaction from './Transaction';
import TransactionDetail from './TransactionDetail';

const Stack = createNativeStackNavigator();

const Screens = () => (
  <Stack.Navigator initialRouteName="transaction">
    <Stack.Screen
      options={{ headerShown: false }}
      name="transaction"
      component={Transaction}
    />
    <Stack.Screen
      options={{ title: 'Transaction Detail' }}
      name="transaction-detail"
      component={TransactionDetail}
    />
  </Stack.Navigator>
);

export default Screens;
