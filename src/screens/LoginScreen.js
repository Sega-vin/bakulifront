import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppInput } from '../components/ui/AppInput';
import { AppTextBold } from '../components/ui/AppTextBold';
import { THEME } from '../theme';
import { login, token, User } from '../store/actions/userAction';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const formHandler = () => {
    if(email.trim() && password.trim()){
      dispatch(login({
        email: email, 
        password: password
      }))
    } else {
      Alert.alert('Поле не может быть пустым')
    }
    
  }

  const registration = () => {
    navigation.navigate('Registration')
  }

  let error = []

 
  if(!user.isAuth){
    error.push({error: 'The user in undefind'})
  }
 
  
  

  return <View style={styles.main}>
    <Image source={ require('../../assets/Logo.png') } />
    <AppTextBold style={styles.title}>Let's Get Started</AppTextBold>
    <AppTextBold style={styles.subtitle}>Erstellen Sie ein neues Konto</AppTextBold>
    <View style={styles.formWrapper}>
      <AppInput text={"Ihre E-Mail"} onChangeText={setEmail} value={email}/>
      <AppInput text={"Passwort"} onChangeText={setPassword} value={password} />
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
      <AppTextBold style={styles.textTheme} onPress={registration}>  Registrieren</AppTextBold>
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