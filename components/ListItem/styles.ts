import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 0,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingRight: 16,
    elevation: 4,
    marginVertical: 4,
  },
  leadingStatus: {
    width: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 'auto',
  },
  spacingV: {
    marginVertical: 4,
  },
  textContainer: {
    padding: 12,
    flexDirection: 'column',
  },
  textContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRow: {
    alignItems: 'center',
    flexDirection: 'row',
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
  statusContainer: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    marginHorizontal: 4,
    width: 14,
    height: 14,
    marginBottom: 4,
  },
  iconDot: {
    marginHorizontal: 6,
    width: 5,
    height: 5,
    marginBottom: 2,
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
