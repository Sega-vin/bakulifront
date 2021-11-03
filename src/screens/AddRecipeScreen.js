import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe, loadRecipe } from '../store/actions/recipeAction';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';

export const AddRecipeScreen = ({ route, navigation }) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const formHandler = () => {
    if(value.trim()){
      dispatch(addRecipe({
        text: value,
        img: "assets/recipe/salat1.png"
      }))
      navigation.navigate('Recipes')
    } else {
      Alert.alert('Поле не может быть пустым')
    }
    
  }


 

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperInput}>
        <Text style={styles.label}>Name of the salad</Text>
        <TextInput 
          style={styles.recipeInput} 
          onChangeText={setValue}
          value={value}
        />
      </View>
      <Button 
        style={styles.recipeButton} 
        color={THEME.MAIN_COLOR}  
        title="Save Recipe" 
        onPress={formHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  wrapperInput: {
    marginTop: 16,
    marginBottom: 8
  },
  recipeInput: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#e4e4e4',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 12
  },
  label: {
    fontWeight: '700'
  },
  recipeButton: {
    height: 35
  }
})