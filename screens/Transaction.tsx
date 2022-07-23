import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import { transactionStore } from '../stores/TransactionStore';
import Colors from '../themes/Colors';
import Loading from '../components/Loading';

const Transaction = ({ navigation }: any) => {
  // On First Screen mount, load The List
  useEffect(() => {
    transactionStore.getList();
  }, []);

  return (
    // Use Safe Area for Notched Iphone and Android
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <View style={styles.padder}>
        <SearchBar
          onChangeText={text => {
            transactionStore.doSearch(text);
          }}
          onPressSort={sortBy => {
            transactionStore.doSort(sortBy);
          }}
        />
      </View>
      <Loading show={transactionStore.isLoading} />
      <FlatList
        style={styles.spacerV}
        contentContainerStyle={styles.padder}
        data={transactionStore.filteredData}
        extraData={transactionStore.filteredData}
        // use Footer for better look on spacing
        ListFooterComponent={<View style={styles.spacerV} />}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {
              transactionStore.setSelected(item);
              navigation.navigate('transaction-detail');
            }}
            item={item}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    flex: 1,
    paddingTop: 8,
  },
  padder: {
    paddingHorizontal: 8,
  },
  spacerV: {
    marginTop: 8,
  },
});

export default observer(Transaction);
