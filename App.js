import AppLoading from 'expo-app-loading';
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import {AppNavigation, AuthNavigation} from './src/navigation/AppNavigation'
import store from './src/store'
import {bootstrap} from './src/bootstrap'
import Icon from './src/icons';
import { token, User } from './src/store/actions/userAction';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isReady, setIsReady] = useState(false)

  store.dispatch(token())

  const Auth = store.getState().user.token 

  
    const getUser = async () => { 
      await store.dispatch(User())
    } 

    if(Auth){
      console.log('AUTH TRUE')
      getUser()
    }




  if(!isReady){
    return (
      <AppLoading 
        startAsync={bootstrap}
        onError = { err => console.log(err) }
        onFinish={ () => setIsReady(true) }
      />
    ) 
  }
 

  return (
      <Provider store={store} >
        <AppNavigation/>         
      </Provider>   
    )
}

