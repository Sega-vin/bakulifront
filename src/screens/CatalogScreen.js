import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, LogBox} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
// import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../theme';
import { RecipeList } from '../components/RecipeList';
import { loadRecipe, loadRecipeId, additional } from '../store/actions/recipeAction';
import { AddRecipeScreen } from '../screens/AddRecipeScreen';
import { getCart } from '../store/actions/cartAction';
import { useFocusEffect  } from "@react-navigation/native";
import { AppTextBold } from '../components/ui/AppTextBold';
import CartIcon from '../../assets/svg/cart.js'; 


export const CatalogScreen = ({  route, navigation }) => {
  
  const dispatch = useDispatch()

  const oneRecipe = useSelector(state => state.recipe.oneRecipe)

  const loadProduct = async id  => {
    await dispatch(loadRecipeId(id))
  }

  const additionals = async () => {
    if(oneRecipe.category){
      await oneRecipe.category.forEach(id => {
        dispatch(additional(id))
      })
    }
  }

  const loadCart = async (id) => {
    await dispatch(getCart(id))
  }


  const OpenRecipe = async recipe => {
    await loadProduct(recipe.id)
    console.log('success')
    navigation.navigate('Recipe', {recipeId: recipe.id})
  } 
  
  const AddRecipe = () => {
    navigation.navigate('AddRecipe')
  }

  
  const Cart = useSelector(state => state.cart)


  useEffect(() => {
    dispatch(loadRecipe())
    loadCart(Cart.id)
    additionals()
    console.log('hello')
  }, [dispatch, Cart.id, oneRecipe])

  const AllRecipe = useSelector(state => state.recipe.allRecipe)

  // LogBox.ignoreAllLogs()

  // console.log(AllRecipe) 

  const goToCart = () => {
    navigation.navigate('Cart') 
  } 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartIcon  style={{marginRight: 15}} onPress={() => goToCart()} count={Cart.total_items}/>
      ),
      title: 'Was mochtest du heute essen?',
    });
  }, [dispatch, navigation, Cart.total_items]);
 

  return <View style={styles.center}>
    <RecipeList data={AllRecipe} onOpen={OpenRecipe}/>
  </View>
}

const styles = StyleSheet.create({
  center: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.BACKGROUND_COLOR
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20
  },
  addSalad: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  addText: {
    fontWeight: '700',
    fontSize: 18
  }
})