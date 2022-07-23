import { observer } from 'mobx-react-lite';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailBox from '../components/DetailBox';
('../helper/Format');
import { transactionStore } from '../stores/TransactionStore';
import Colors from '../themes/Colors';

const TransactionDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <DetailBox item={transactionStore.selected} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bgColor },
});

export default observer(TransactionDetail);
