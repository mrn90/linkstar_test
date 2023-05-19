import React from 'react';
import {View, Pressable, Image} from 'react-native';
// import {icons} from '../../../assets';
import {colors} from '../../../utils/theme';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';
const MainButton = props => {
  // console.log('props', props.icon)
  return (
    <Pressable
      activeOpacity={0.9}
      {...props}
      style={({pressed}) => [
        styles.container,
        props.style,
        pressed && {
          backgroundColor: props.pressedColor
            ? props.pressedColor
            : colors.grayText1,
        },
      ]}>
      <CenturyGothic style={[styles.text, props.textStyle]}>
        {props.text}
      </CenturyGothic>
    </Pressable>
  );
};

export default MainButton;
