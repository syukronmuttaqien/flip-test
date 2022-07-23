import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: 12,
  },
  padder: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxId: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  spacingL4: {
    marginLeft: 4,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
  },
  boxRowBetween: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 12,
  },
  boxRowBetweenWithoutPadding: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  icon: {
    marginHorizontal: 4,
    width: 14,
    height: 14,
    marginBottom: 4,
  },
  iconCopy: {
    marginHorizontal: 4,
    width: 14,
    height: 14,
    marginBottom: 4,
    tintColor: Colors.orange,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
  },
  textRegular: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black,
    marginBottom: 4,
  },
  textStatus: {
    color: Colors.white,
    fontWeight: '500',
  },
});
