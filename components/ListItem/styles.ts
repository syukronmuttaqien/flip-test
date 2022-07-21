import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 12,
    paddingRight: 16,
  },
  leadingStatus: {
    width: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: '100%',
  },
  textContainer: {
    flexDirection: 'column',
  },
  textContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRow: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  textRegular: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  textStatus: {
    color: Colors.white,
  },
  statusContainer: {
    borderRadius: 10,
    padding: 12,
  },
});

export const statusStyle = StyleSheet.create({
  success: {
    backgroundColor: Colors.green,
  },
  checking: {
    backgroundColor: Colors.orange,
  },
  textChecking: {
    color: Colors.black,
  },
  borderChecking: {
    borderWidth: 1,
    borderColor: Colors.orange,
  },
});
