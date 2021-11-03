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
import { Ionicons } from '@expo/vector-icons';

export const AppRadio = ({ options=[], horisontal = false, onChangeSelect, selected }) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <View style={styles.center}>
      {
        options.map((item, index) => (
          <TouchableOpacity key={index}  onPress={() => onChangeSelect(item, index)} activeOpacity={0.7}>
            <View style={horisontal ? {...styles.radio_wrapper_row} : false }>
              <View style={styles.radio}>
                { selected == index ? (
                  <View style={styles.checked}>
                  <Ionicons size={23} name='checkmark-outline' color={"#fff"} />
                  </View> 
                ) : false}             
              </View>
              <AppTextBold  style={{...styles.radio_text},{color: selected == index ? THEME.MAIN_COLOR : '#9D9D9D'}}>{item}</AppTextBold>
            </View>
          </TouchableOpacity>
        ))
      }
      
      </View>
    
  )
}

const styles = StyleSheet.create({
  checked: {
    width: '100%',
    backgroundColor: THEME.MAIN_COLOR
  },
  radio_wrapper_row: {
    flexDirection: 'row',
    marginTop: 13
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9D9D9D',
    marginRight: 12,
    overflow: 'hidden'
  },
  radio_text: {
    fontSize: 16,
    color: '#9D9D9D'
  },
  center: {
    flex: 1,
  },
  text: {
    fontSize: 21,
    color: '#000'
  }
})
