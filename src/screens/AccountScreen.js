import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppCart } from '../components/ui/AppCart';
import { useDispatch, useSelector } from 'react-redux'
import { logout, User } from '../store/actions/userAction';
import Icons from '../components/ui/AppIcon';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/ui/AppText';

export const AccountScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  
  const user = useSelector(state => state.user) 

  const history = useSelector(state => state.user.detail.history)

  const Auth = useSelector(state => state.user.isAuth)

  const LogoutHandler = () => {
    dispatch(logout())
  }
  const getUser = async () => {
    await dispatch(User())
  }

  // const getUserDetail = async () => {
  //   await dispatch(userDetail(user.user.id))
  // }


  useEffect(()=>{
   getUser()
    // getUserDetail()
    console.log('render') 
  }, [dispatch, navigation, Auth])

  console.log(history) 


  return <ScrollView style={styles.main}>
    <View style={styles.header}>
      <AppTextBold style={styles.edit}>Edit</AppTextBold>
      <View stlye={styles.avatar_wrapper}>  
        <Image style={styles.avatar_image}  source={ require('../../assets/profile_image.png') }/>
        <AppTextBold style={styles.title}>Daniel Vaganov</AppTextBold>
        <AppTextBold style={styles.subtitle}>New York City</AppTextBold>
      </View>
      <Icons onPress={LogoutHandler} name={'Logout'} size={18} color={THEME.MAIN_COLOR} fill={'none'}/>
    </View>
    <AppCart style={styles.account_cart}>
      <AppTextBold style={styles.cart_text}>Meine Punke</AppTextBold>
      <Ionicons name="chevron-forward-outline" size={32} color={THEME.MAIN_COLOR} />
    </AppCart>
    <AppTextBold style={styles.history_text}>Bestellhistorie</AppTextBold>
    {history.map((item, index) => (
      <View style={styles.history} key={index}>
        <AppTextBold>{item.created.split('T')[0]}</AppTextBold>
        <AppTextBold>{item.price} €</AppTextBold>
        <Ionicons name="chevron-forward-outline" size={32} color={THEME.MAIN_COLOR} />
      </View>
    ))}
    <AppTextBold style={styles.history_text}>Persönliche Daten</AppTextBold>
    <View style={styles.person}>
      <AppTextBold style={styles.person_text}>Adresse: </AppTextBold>
      <AppTextBold style={styles.person_text, styles.theme_color}>Am Freenteich, 20, 22085    
      Hamburg</AppTextBold>
    </View>
    <View style={styles.person}>
      <AppTextBold style={styles.person_text}>Telefon: </AppTextBold>
      <AppTextBold style={styles.person_text, styles.theme_color}>+49 1555 8888666</AppTextBold>
    </View>
    <View style={styles.person}>
      <AppTextBold style={styles.person_text}>E-Mail: </AppTextBold>
      <AppTextBold style={styles.person_text, styles.theme_color}>omymail@gmail.com</AppTextBold>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },  
  edit: {
    color: THEME.MAIN_COLOR,
    fontSize: 16
  },
  main: {
    backgroundColor: '#F5F2EB',
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 28

  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15
  },
  subtitle: {
    color: '#9098B1',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 2
  },
  avatar_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
  },
  avatar_image: {
    width: 100,
    alignSelf: 'center'
  },
  account_cart: {
    marginTop: 32
  },
  cart_text: {
    fontSize: 20
  },
  history_text: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 5
  },
  history: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  person: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 220,
    marginTop: 23
  },
  person_text: {
    fontSize: 16
  },
  theme_color: {
    color: THEME.MAIN_COLOR,
    marginLeft: 20
  }
})