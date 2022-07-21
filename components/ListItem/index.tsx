import React, { FunctionComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ListItemProps } from './interfaces';
import styles, { statusStyle } from './styles';
import icons from '../../assets/icons';
import { formatCurrency, indonesianDate } from '../../helper/Format';

const ListItem: FunctionComponent<ListItemProps> = ({
  item,
  onPress,
}: ListItemProps) => {
  const { status } = item;

  // force all to upper case for good conditionings
  const isChecking = status?.toUpperCase() === 'PENDING';
  const isSuccess = status?.toUpperCase() === 'SUCCESS';

  // Check the status and give style additional styling
  const leadingStatusStyle = [
    styles.leadingStatus,
    isSuccess && statusStyle.success,
    isChecking && statusStyle.checking,
  ];
  const boxStatusStyle = [
    styles.statusContainer,
    isSuccess && statusStyle.success,
    isChecking && statusStyle.borderChecking,
  ];

  return (
    // Container With Row Space Between
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainerRow}>
        {/* Status Color on Left Side */}
        <View style={leadingStatusStyle} />
        {/* Text Container */}
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <Text style={styles.textTitle}>
              {item.sender_bank?.toUpperCase()}
            </Text>
            <Image style={styles.icon} source={icons.rightArrow} />
            <Text style={styles.textTitle}>
              {item.beneficiary_bank?.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.textRegular}>{item.beneficiary_name}</Text>
          <View style={styles.textRow}>
            <Text style={styles.textRegular}>
              {formatCurrency(item.amount)}
            </Text>
            <Image source={icons.dot} style={styles.iconDot} />
            <Text style={styles.textRegular}>
              {indonesianDate(item.created_at)}
            </Text>
          </View>
        </View>
      </View>
      {/* Status Text */}
      <View style={boxStatusStyle}>
        <Text
          style={[styles.textStatus, isChecking && statusStyle.textChecking]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
