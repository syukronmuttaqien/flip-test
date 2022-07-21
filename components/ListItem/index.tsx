import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { ListItemProps } from './interfaces';
import styles from './styles';

const ListItem: FunctionComponent<ListItemProps> = ({
  item,
}: ListItemProps) => {
  return (
    // Container With Row Space Between
    <View style={styles.container}>
      <View style={styles.textContainerRow}>
        {/* Status Color on Left Side */}
        <View style={styles.leadingStatus} />
        {/* Text Container */}
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <Text style={styles.textTitle}>{item.sender_bank}</Text>
            <Text style={styles.textTitle}>{item.beneficiary_bank}</Text>
          </View>
          <Text style={styles.textRegular}>{item.beneficiary_name}</Text>
          <View style={styles.textRow}>
            <Text style={styles.textRegular}>{item.amount}</Text>
            <Text style={styles.textRegular}>{item.created_at}</Text>
          </View>
        </View>
      </View>
      {/* Status Text */}
      <View style={styles.statusContainer}>
        <Text style={styles.textStatus}>{item.status}</Text>
      </View>
    </View>
  );
};

export default ListItem;
