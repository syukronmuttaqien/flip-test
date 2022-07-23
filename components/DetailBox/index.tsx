import React, { FunctionComponent, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  // Because i can't use the utility library,
  // i choose to use deprecated function from react-native
  Clipboard,
  ToastAndroid,
} from 'react-native';
import icons from '../../assets/icons';
import { formatCurrency, indonesianDate } from '../../helper/Format';
import Colors from '../../themes/Colors';
import { DataItemProps } from '../ListItem/interfaces';
import styles from './styles';

interface DetailBoxProps {
  item: DataItemProps;
}

// Created so Line of Code  File TransactionDetail can be minimalized
const DetailBox: FunctionComponent<DetailBoxProps> = ({ item }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    // Base container
    <View style={styles.container}>
      {/* ID TRANSAKSI */}
      <View style={styles.boxId}>
        <Text style={styles.textTitle}>ID TRANSAKSI: #{item.id}</Text>
        <TouchableOpacity
          onPress={() => {
            Clipboard.setString(item.id || '');
            ToastAndroid.showWithGravity(
              'ID sudah berhasil di copy',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }}
          style={styles.spacingL4}>
          <Image style={styles.iconCopy} source={icons.copy} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      {/* Detail Transaksi */}
      <View style={styles.boxRowBetween}>
        <Text style={styles.textTitle}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity
          onPress={() => {
            setIsShow(!isShow);
          }}>
          <Text style={[styles.textTitle, { color: Colors.orange }]}>
            {isShow ? 'Tutup' : 'Buka'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      {/* Box Below Detail Transaksi */}
      {isShow && (
        <View style={[styles.padder]}>
          <View style={styles.row}>
            <Text style={styles.textTitle}>
              {item.sender_bank?.toUpperCase()}
            </Text>
            <Image style={styles.icon} source={icons.rightArrow} />
            <Text style={styles.textTitle}>
              {item.beneficiary_bank?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.boxRowBetweenWithoutPadding}>
            <View>
              <Text style={styles.textTitle}>{item.beneficiary_name}</Text>
              <Text style={styles.textRegular}>{item.account_number}</Text>
            </View>
            <View>
              <Text style={styles.textTitle}>NOMINAL</Text>
              <Text style={styles.textRegular}>
                {formatCurrency(item.amount)}
              </Text>
            </View>
          </View>
          <View style={styles.boxRowBetweenWithoutPadding}>
            <View>
              <Text style={styles.textTitle}>Berita Transfer</Text>
              <Text style={styles.textRegular}>{item.remark || '-'}</Text>
            </View>
            <View>
              <Text style={styles.textTitle}>Kode Unik</Text>
              <Text style={styles.textRegular}>{item.unique_code}</Text>
            </View>
          </View>
          <View style={styles.boxRowBetweenWithoutPadding}>
            <View>
              <Text style={styles.textTitle}>Waktu Dibuat</Text>
              <Text style={styles.textRegular}>
                {indonesianDate(item.created_at)}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailBox;
