import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity,FlatList } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';
import { AppCart } from './ui/AppCart';
import { AppTextBold } from './ui/AppTextBold';

export const Recipe = ({recipe, onOpen}) => {
  return (
    <View>
      <AppTextBold  style={styles.category_name}>{recipe.name}</AppTextBold>
      <FlatList 
        style={styles.wrapper}
        data={ recipe.items } 
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <AppCart style={styles.recipe}  onPress={() => onOpen(item)}>  
            <View style={styles.container}> 
              <View style={styles.imageWrapper}>
              <Image style={styles.recipeImage} source={ require('../../assets/recipe/salat1.png') }/> 
              </View>
              <AppTextBold style={styles.recipeText}>{item.title}</AppTextBold>
            </View> 
            <View>
              <AppButton text={styles.textButton} style={styles.recipeButton}>{item.price} €</AppButton>
              <AppTextBold style={styles.textPunke}>+7 punke</AppTextBold>
            </View>
          </AppCart> 
          )}
      />
    </View>
  )
  
}

const styles = StyleSheet.create({ 
  recipe: {
    marginTop: 12,
    height: 81,
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  recipeImage: {
    maxWidth: '100%',
    height: '100%',
    borderRadius: 4,
  },
  imageWrapper: {
    width: 70,
    marginRight: 15
  },
  recipeText: {
    fontSize: 20,
    lineHeight: 27
  },
  container: {
    flexDirection: 'row',
    maxWidth: 100,
    alignItems: 'center'
  },
  recipeButton: {
    width: 71,
    height: 26,
    paddingHorizontal: 0
  },
  textButton: {
    fontSize: 12
  },
  textPunke: {
    color: THEME.MAIN_COLOR,
    fontSize: 12,
  },
  category_name: {
    color: THEME.MAIN_COLOR,
    paddingTop: 16,
    paddingBottom: 4
  }
})