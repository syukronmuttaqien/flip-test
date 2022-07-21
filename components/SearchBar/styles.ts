import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  searchRow: {
    flexDirection: 'row',
  },
  sortRow: {
    flexDirection: 'row',
  },
  textSort: {
    color: Colors.orange,
    fontSize: 12,
    fontWeight: '700',
  },
  imageDropdown: {
    marginLeft: 8,
    width: 16,
    height: 16,
  },
});
