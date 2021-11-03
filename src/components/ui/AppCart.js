import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';


export const AppCart = props => {
  const Wrapper =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper onPress={props.onPress} activeOpacity={0.7}>
      <View style={{...styles.default, ...props.style}}>{props.children}</View>
    </Wrapper>

  )
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'nunito-regular',
    minHeight: 61,
    width: '100%',
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})