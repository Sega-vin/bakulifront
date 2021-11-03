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


export const ThanksScreen = ({  route, navigation }) => {
  
  const dispatch = useDispatch()

  
  

  const goToCatalog = () => {
    navigation.navigate('Recipes')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Kasse',
    });
  });
 
  

  return <ScrollView style={styles.center}>
    <View style={styles.wrapper}>
        <View style={styles.form_group}>
          <AppTextBold style={styles.title}>Vielen Dank fur Deine Bestellung.</AppTextBold>
          <AppTextBold style={styles.text}>Eine Bestatigung wurde Dir per E-Mail zugeschickt</AppTextBold>
          <AppTextBold style={styles.text}>Deine Bestellung liegt heute, 13:45 Uhr zur Abholung im Store bereit.</AppTextBold>
        </View>
        <View style={styles.form_group}>
          <AppTextBold style={styles.title}>Dein Kundenkonto</AppTextBold>
          <AppTextBold style={styles.text}>Dein Kundenkonto wurde erfolgreich angelegt.
            Dir wurde eine E-Mail mit einem Link zum Bestatigen Deiner
            Registrierung zugeschickt. Klicke auf den Link in der E-Mail, um Deine Registrierung abzuschlieBen.
          </AppTextBold>
        </View>
        <AppButton onPress={() => navigation.navigate('Recipes')} style={styles.button}>NEUE BESTELLUNG</AppButton>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40
  },
  title: {
    fontSize: 20,
    marginTop: 21,
    marginBottom: 17
  },
  text: {
    color: '#9D9D9D',
    fontSize: 16
  },
  center: { 
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR
  },
  form_group: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR,
    paddingBottom: 20
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
})