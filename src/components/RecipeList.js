import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Recipe } from '../components/Recipe'

export const RecipeList = ({data, onOpen}) => {
  // console.log(data)  
  return (
    <FlatList 
      style={styles.wrapper}
      data={ data } 
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Recipe recipe={item} onOpen={onOpen} />}
    />
  )
}

const styles = StyleSheet.create({
  center: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20
  },
})