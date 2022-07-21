import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortRow: {
    flexDirection: 'row',
  },
  textSort: {
    color: Colors.orange,
    fontSize: 12,
    fontWeight: '700',
  },
  imageSearch: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  imageDropdown: {
    marginLeft: 8,
    marginTop: 2,
    tintColor: Colors.orange,
    width: 12,
    height: 12,
  },
  backDrop: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#000000AA',
    height: '100%',
    zIndex: 3,
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 18,
    width: '100%',
    padding: 16,
    zIndex: 4,
  },
});
