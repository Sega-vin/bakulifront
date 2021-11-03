import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import { AppTextBold } from './AppTextBold'
import { THEME } from '../../theme'

export const AppButton = ({ children, style, onPress, text, color = THEME.MAIN_COLOR }) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{  ...styles.button, backgroundColor: color, ...style, }}>
        <AppTextBold style={{...styles.text,...text}}>{children}</AppTextBold>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingHorizontal: 20,
    height: 56,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})
