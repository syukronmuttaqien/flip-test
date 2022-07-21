import React, { FunctionComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import icons from '../../assets/icons';
import { RadioButtonProps } from './interfaces';
import styles from './styles';

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  children,
  active,
  value,
  onPress,
}: RadioButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => onPress(value)}>
        <Image
          source={active ? icons.radioActive : icons.radioInactive}
          style={styles.radioImage}
        />
        <Text style={styles.textRadio}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
