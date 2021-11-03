import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { AppText } from '../components/ui/AppText';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';
import Icons from '../components/ui/AppIcon';
import { useDispatch, useSelector } from 'react-redux';
import { acc } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';
import { accepted } from '../store/actions/userAction';

export const MainScreen = ({ navigation }) => {

 
  const accept = useSelector(state => state.user.accept)

  const dispatch = useDispatch() 
  
  const accepthandler = () => {
    dispatch(accepted())
  }



  return (
  <View style={styles.container}>
    <ImageBackground  
      source={ require('../../assets/main_background.png')}
      style={styles.background}
    > 
      <View style={styles.imageWrap}>
        <AppTextBold style={styles.text}>BAKULI BOWLS – 
        SCHNELL, GESUND & ZUM 
        MITNEHMEN</AppTextBold>
        <AppButton
          style={styles.button}
          onPress={() => navigation.navigate('Recipes')}
        >JETZT BESTELLEN</AppButton>
      </View>
    </ImageBackground>
    {!accept ? (
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Icons name="Bakuli" fill="#000" size="37"/>
          <AppTextBold style={styles.title}>DATENSCHUTZ</AppTextBold>    
        </View>
        <AppTextBold style={styles.textDesc}>Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.</AppTextBold>
        <AppButton onPress={accepthandler} >Alle akzeptieren</AppButton>
        <AppButton onPress={accepthandler} text={{color: THEME.MAIN_COLOR}} style={styles.buttonNoneOutline}>Speichern</AppButton>
        <AppTextBold style={styles.textTheme}>Individuelle Datenschutzeinstellungen</AppTextBold>
        <AppTextBold  style={styles.Details}>Cookie-Details | Datenschutzerklarung | Impressum</AppTextBold>
      </View>
    ): false}
  </View>
    
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontSize: 12,
    color: THEME.MAIN_COLOR,
    marginTop: 13,
    textAlign: 'center'
  },
  Details: {
    color: '#9D9D9D',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 13,
  },
  buttonNoneOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR
  },
  checkboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B1B1B1',
    width: 24,
    height: 24
  },
  modal: {
    position: 'absolute',
    width: "95%",
    backgroundColor: '#fff',
    marginTop: 5,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 40.00,
    elevation: 260,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginLeft: 10
  },
  textDesc: {
    color: '#9D9D9D',
    textAlign: 'center',
    marginTop: 20
  },
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },  
  imageWrap: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 30, 
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    width: 266,
    marginTop: 'auto'
  }
})