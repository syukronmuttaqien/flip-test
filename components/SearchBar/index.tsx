import React, { FunctionComponent, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../assets/icons';
import RadioButton from '../RadioButton';
import { RadioData, SearchBarProps } from './interfaces';
import styles from './styles';

const radios: Array<RadioData> = [
  {
    caption: 'URUTKAN',
    value: 'URUTKAN',
  },
  {
    caption: 'Nama A-Z',
    value: 'Nama A-Z',
  },
  {
    caption: 'Nama Z-A',
    value: 'Nama Z-A',
  },
  {
    caption: 'Tanggal Terbaru',
    value: 'Tanggal Terbaru',
  },
  {
    caption: 'Tanggal Terlama',
    value: 'Tanggal Terlama',
  },
];

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onChangeText,
  onPressSort,
}: SearchBarProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('URUTKAN');

  const selectValue = (val: string | number) => {
    setSelectedSort(val.toString());
    setModalVisible(false);
    onPressSort(val.toString());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <Image source={icons.search} style={styles.imageSearch} />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Cari nama, bank, atau nominal"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.sortRow}>
          <Text style={styles.textSort}>{selectedSort}</Text>
          <Image source={icons.caretDown} style={styles.imageDropdown} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.padder}>
            <View style={styles.modalCard}>
              <FlatList
                data={radios}
                keyExtractor={item => item.value}
                renderItem={({ item }) => (
                  <RadioButton
                    onPress={selectValue}
                    active={selectedSort === item.value}
                    value={item.value}>
                    {item.caption}
                  </RadioButton>
                )}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.backDrop}
          />
        </View>
      </Modal>
    </>
  );
};

export default SearchBar;
