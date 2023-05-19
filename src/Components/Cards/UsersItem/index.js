import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import EurostileBold from '../../Wrappers/Text/EurostileBold';

const UsersItem = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <EurostileBold style={styles.nameText}>{item?.id}</EurostileBold>
        <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
      </View>
      <View style={styles.addressContainer}>
      <EurostileBold style={styles.nameText}>
        Address- street: 
      </EurostileBold>  
      <EurostileBold style={styles.nameText}>
        {item?.address?.street}
      </EurostileBold>
      </View>
      
    </View>
  );
};

export default UsersItem;
