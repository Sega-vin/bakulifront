import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TextInput
} from 'react-native'
import { AppTextBold } from './AppTextBold'
import { THEME } from '../../theme'

export const AppInput= (props) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper  activeOpacity={0.7}>
      <TextInput multiline={props.multiline} onChangeText={props.onChangeText} style={{...styles.input, ...props.style}} value={props.value} placeholder={props.text} id={props.id}/>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    backgroundColor: '#F2F2F3',
    height: 48,
    paddingHorizontal: 10,
    borderColor: '#666',
    fontFamily: 'nunito-bold',
    borderWidth: 1, 
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 12
  },
  text: {
    color: '#fff',
    fontSize: 16,
    
  }
})
