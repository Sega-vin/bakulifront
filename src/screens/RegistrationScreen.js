import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Alert, FlatList, Image } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppInput } from '../components/ui/AppInput';
import { AppTextBold } from '../components/ui/AppTextBold';
import { THEME } from '../theme';
import { registration } from '../store/actions/userAction';

export const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  
  const dispatch = useDispatch()

  const check = useSelector(state => state.user)

  const formHandler = () => {
    if(email.trim() && password.trim() && name.trim() && confirm_password.trim()){
      dispatch(registration({
        email: email,
        password: password,
        confirm_password: confirm_password,
        name: name,
      }))
    } else {
      Alert.alert('Поле не может быть пустым')
    } 
  }
  useEffect(() => {
    if(check.registration){
      navigation.navigate('Login')
    }
  })
  

  const login = () => {
    navigation.navigate('Login')
  }

  let error = []

  const user = useSelector(state => state.user)
 
  return <View style={styles.main}>
    <Image source={ require('../../assets/Logo.png') } />
    <AppTextBold style={styles.title}>Let's Get Started</AppTextBold>
    <AppTextBold style={styles.subtitle}>Erstellen Sie ein neues Konto</AppTextBold>
    <View style={styles.formWrapper}>
      <AppInput text={"Ihre E-Mail"} onChangeText={setEmail} value={email}/>
      {check.info && check.info.hasOwnProperty('email') ? (  <AppTextBold style={styles.textDanger}>{check.info.email}</AppTextBold> ) : false}
      <AppInput text={"Passwort"} onChangeText={setPassword} value={password} />
      {check.info && check.info.hasOwnProperty('password') ? (  <AppTextBold style={styles.textDanger}>{check.info.password}</AppTextBold> ) : false}
      <AppInput text={"Voller Name"} onChangeText={setName} value={name} />
      {check.info && check.info.hasOwnProperty('name') ? (  <AppTextBold style={styles.textDanger}>{check.info.name}</AppTextBold> ) : false}
      <AppInput text={"Passwort wieder"} onChangeText={setConfirm_password} value={confirm_password} />
      { user.info ? (
        <FlatList 
        style={styles.wrapper}
        data={ error } 
        keyExtractor={index => index.toString()}
        renderItem={({item}) => <AppTextBold>{item.error}</AppTextBold>}
      />
      ) : false}
      
      <AppButton 
        onPress={formHandler}
      >Anmelden</AppButton>
    </View>
    <AppTextBold style={styles.textGrey}>
      Sie haben kein Konto? 
      <AppTextBold style={styles.textTheme} onPress={login}>  Anmelden</AppTextBold>
    </AppTextBold>
  </View>
}

const styles = StyleSheet.create({  
  main: {
    backgroundColor: '#F5F2EB',
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',

  },
  formWrapper: {
    marginTop: 28,
    width: '100%'
  },
  title: {
    fontSize: 16,
    marginTop: 16
  },
  textGrey: {
    color: '#9098B1',
    marginTop: 24
  },
  textTheme: {
    color: THEME.MAIN_COLOR
  },
  textDanger: {
    color: THEME.MAIN_COLOR
  },
  subtitle: {
    color: '#9098B1',
    marginTop: 8,
    fontSize: 12
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 20,
    maxHeight: 50
  },
})