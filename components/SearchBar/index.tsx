import React, { FunctionComponent, useState } from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../assets/icons';
import RadioButton from '../RadioButton';
import { SearchBarProps } from './interfaces';
import styles from './styles';

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
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.backDrop}
          />
          <View style={styles.modalCard}>
            <RadioButton
              active={selectedSort === 'URUTKAN'}
              onPress={selectValue}
              value={'URUTKAN'}>
              URUTKAN
            </RadioButton>
            <RadioButton
              active={selectedSort === 'A-Z'}
              onPress={selectValue}
              value={'A-Z'}>
              Nama A-Z
            </RadioButton>
            <RadioButton
              active={selectedSort === 'Z-A'}
              onPress={selectValue}
              value={'Z-A'}>
              Nama Z-A
            </RadioButton>
            <RadioButton
              active={selectedSort === 'TERBARU'}
              onPress={selectValue}
              value={'TERBARU'}>
              Tanggal Terbaru
            </RadioButton>
            <RadioButton
              active={selectedSort === 'TERLAMA'}
              onPress={selectValue}
              value={'TERLAMA'}>
              Tanggal Terlama
            </RadioButton>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SearchBar;
