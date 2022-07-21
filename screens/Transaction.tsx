import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataItemProps } from '../components/ListItem/interfaces';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';

const Transaction = () => {
  const data: Array<DataItemProps> = [];

  return (
    <SafeAreaView>
      <SearchBar onChangeText={() => {}} onPressSort={() => {}} />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default Transaction;
