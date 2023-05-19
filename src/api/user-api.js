// import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiConfig} from './api-config';
import axios from 'axios';
export class UserApi {
  //  create user
  async GetUsers() {
    // make the api
    try {
      const response = await axios.get(ApiConfig.url + 'users');
      if (response?.data) {
        // console.log('users ==>', response?.data);
        return response?.data;
      } else {
        console.log('error');
        return response?.data;
      }
    } catch (error) {
      console.log('error in catch', error);
    }
  }
}
