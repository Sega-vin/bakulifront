import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Salatomat!!</Text>  
    </View>
  )
}

const styles =  StyleSheet.create({
  navbar: {
    height: '10%',
    alignItems: 'center'
  },
  text: {

  }
})