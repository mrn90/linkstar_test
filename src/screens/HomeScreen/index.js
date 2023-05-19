import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import UsersItem from '../../Components/Cards/UsersItem';
import {UserApi} from '../../api/user-api';
import EurostileBold from '../../Components/Wrappers/Text/EurostileBold';
import MainButton from '../../Components/Buttons/MainButton';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
  },
];

const Home = () => {
  const [users, setUsers] = useState([]);
  const renderUsers = ({item}) => {
    return (
      <View style={styles.nameBtnContainer}>
        <UsersItem item={item} />
        <MainButton
          text={'Delete'}
          style={styles.loginBtn}
          onPress={() => {
            deleteUser(item?.id);
          }}
        />
      </View>
    );
  };

  async function getUsers() {
    try {
      const User = new UserApi();
      let resultHandle = await User.GetUsers();
      {
        if (resultHandle) {
          setUsers(resultHandle);
          //   console.log('resultHandle', resultHandle);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  const deleteUser = async obj => {
    // console.log('obj', obj);
    const updatedUsers = users.filter(user => user.id !== obj);
    setUsers(updatedUsers);
  };

  const addUser = async () => {
    const newUser = {id: users.length + 1, name: `User ${users.length + 1}`};
    setUsers([...users, newUser]);
  };

  const updateUser = async () => {
    try {
      const updatedUser = users.map(user => {
        if (user.id === 2) {
          console.log('here');
          const updatedAddress = {
            ...user,
            address: {
              ...user.address,
              street: 'New Street', // updating street name
            },
          };
          return {
            ...user,
            address: updatedAddress,
          };
        }
        return user;
      });

      console.log('updatedUser', updatedUser[1]); // array is being updated!
      setUsers(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.mainView}>
      <FlatList
        nestedScrollEnabled
        data={users}
        style={styles.users}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.id}
        renderItem={renderUsers}
      />

      <View style={styles.btnContainer}>
        <MainButton
          text={'Add'}
          style={styles.addBtn}
          onPress={() => {
            addUser();
          }}
        />
        <MainButton
          text={'Update'}
          style={styles.addBtn}
          onPress={() => {
            updateUser();
          }}
        />
      </View>
    </View>
  );
};

export default Home;
