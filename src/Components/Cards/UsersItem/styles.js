import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  nameBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 2 * vh,
    // justifyContent: 'flex-start'
    // justifyContent: 'flex-start'
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameText: {
    paddingHorizontal: 2 * vh,
    // backgroundColor: 'red'
  },
  btnContainer: {
    // right: 10
    // alignItems: 'flex-end',
  },
  editBtn: {
    right: 4 * vh,
    height: 3 * vh,
    width: 10 * vh,
    borderRadius: 2 * vh,
    backgroundColor: colors.placeholderColor,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default styles;
