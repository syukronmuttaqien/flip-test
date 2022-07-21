import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 8,
    zIndex: 8,
  },
  row: {
    flexDirection: 'row',
  },
  radioImage: {
    width: 20,
    height: 20,
    tintColor: Colors.orange,
  },
  textRadio: {
    flex: 0,
    fontSize: 14,
    color: Colors.black,
    fontWeight: '500',
    marginLeft: 16,
  },
});
