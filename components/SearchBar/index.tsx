import React, { FunctionComponent } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SearchBarProps } from './interfaces';
import styles from './styles';

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onChangeText,
  onPressSort,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Cari nama, bank, atau nominal"
        />
      </View>
      <TouchableOpacity onPress={onPressSort} style={styles.sortRow}>
        <Text style={styles.textSort}>URUTKAN</Text>
        <Image
          source={{ uri: 'http://test.com/aa' }}
          style={styles.imageDropdown}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
