import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';
import {fonts} from '../../assets';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  users: {
    marginTop: 5 * vh,
    marginLeft: 2 * vh,
    // marginHorizontal: 2 * vh
    // backgroundColor: 'red',
    // paddingLeft: 2 * vh,
    // alignSelf: 'center'
  },
  container: {
    paddingBottom: 10 * vh
    // paddingBottom: 10 * vh
    // paddingHorizontal: 2 * vh,
    // backgroundColor: 'red'
  },
  nameBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginBtn: {
    // height: 3 * vh,
    marginTop: 2 * vh,
    width: 10 * vh,
    backgroundColor: colors.red,
    borderRadius: 2 * vh,
    right: 4 * vh,
  },
  addBtn: {
    // height: 3 * vh,
    // marginBottom: 4 * vh,
    width: 15 * vh,
    backgroundColor: colors.red,
    borderRadius: 2 * vh,
    // right: 4 * vh,
  },
  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 2 * vh
  }
});

export default styles;
