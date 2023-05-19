import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBackground,
    width: 40 * vw,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 2.5 * vh,
    paddingVertical: 1 * vh,
  },
  text: {
    fontSize: 2 * vh,
    color: 'white',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  
});
export default styles;
