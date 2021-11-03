import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, LogBox, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
// import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme';
import { RecipeList } from '../components/RecipeList';
import { loadRecipe, loadRecipeId, additional, getStore } from '../store/actions/recipeAction';
import { AddRecipeScreen } from '../screens/AddRecipeScreen';
import { getCart} from '../store/actions/cartAction';
import { useFocusEffect  } from "@react-navigation/native";
import { AppTextBold } from '../components/ui/AppTextBold';
import CartIcon from '../../assets/svg/cart.js'; 
import { AppCart } from '../components/ui/AppCart';
import { AppButton } from '../components/ui/AppButton';
import { AppRadio } from '../components/ui/AppRadio';


export const PlaceScreen = ({  route, navigation }) => {
  
  const dispatch = useDispatch()

  const oneRecipe = useSelector(state => state.recipe.oneRecipe)

  useEffect(() => {
   dispatch(getStore())
  }, [dispatch])

  const Store = useSelector(state => state.recipe.store)


  // LogBox.ignoreAllLogs()

  // console.log(Store) 

  const goToCatalog = () => {
    navigation.navigate('Recipes')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Bestellungen',
    });
  });
 
  

  return <ScrollView style={styles.center}>
    <View style={styles.wrapper}>
      {
        Store.map((item,index) => (
          <View key={index}>
            <AppCart style={styles.cart} onPress={() => goToCatalog()} >
              <View>
                <AppTextBold style={styles.address}>{item.street} {item.house_number}, {item.index} {item.city}</AppTextBold>
                <AppTextBold style={styles.title}>{item.title}</AppTextBold>
              </View>
            </AppCart>
          </View>
        ))
      }
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  address: {
    fontSize: 12,
    color: '#9D9D9D'
  },
  title: {
    fontSize: 20,
    color: '#173143'
  },
  cart: {
    marginTop: 12
  },
  center: { 
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
})