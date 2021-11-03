import { Ionicons } from '@expo/vector-icons';
import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Alert, FlatList, LogBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
import { additional, loadRecipeId } from '../store/actions/recipeAction';
import { THEME } from '../theme';
import CartIcon from '../../assets/svg/cart.js'; 
import { useFocusEffect  } from "@react-navigation/native";
import { addItem } from '../store/actions/cartAction';
import { ListItem } from 'react-native-elements';


export const RecipeScreen = ({ route, navigation }) => {

  const [detail, setDetail] = useState(false)

  const [ingredient, setIngredient] = useState(false)

  const obj = useSelector(state => state.recipe)

  const Cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const {recipeId} = route.params 

  const recipe = obj.oneRecipe

  let additionals = obj.additional


  additionals = additionals.map((item) => ({
    ...item,
    count: 0
  }))

  // let arrDopset = []
  // https://question-it.com/questions/52769/sozdat-usestate-v-tsikle-na-osnove-massiva-vozmozhno
  // const dopset = useCallback((id, count) => {
  //   additionals = additionals.map((item) => { 
  //     if(item.id == id){
  //       return {
  //         ...item,
  //         count: count
  //       }
  //     }
  //     return {
  //       ...item
  //     }
  //   })
  // })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartIcon  style={{marginRight: 15}} onPress={() => goToCart()} count={Cart.total_items}/>
      ),
      title: recipe.title,
      
    });
  }, [navigation]);

  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Are you sure delete post?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "delete", style: 'destructive', onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  
  const CartId = useSelector(state => state.cart.id)
 
  const addToCart = async () => {
    await dispatch(addItem({
      cart: CartId,
      item: recipe.id,
      qty_item: 1
    }))
    navigation.navigate('Cart')
  }

  const goToCart = async () => {
    await addToCart()
  }




  return <ScrollView style={styles.background}> 
        <View style={styles.container}>
          <Image style={styles.recipe_image} source={ require('../../assets/recipe/salat1.png') }/>
          <AppTextBold style={styles.recipe_title}>{recipe.title}</AppTextBold>
          <View style={styles.recipe_item}>
            <ListItem.Accordion
                containerStyle={{ backgroundColor: 'transparent', padding: 0 }}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title><AppTextBold>Produktdetail</AppTextBold></ListItem.Title>
                    </ListItem.Content>
                  </>
                }
                isExpanded={detail}
                onPress={() => {
                  setDetail(!detail);
                }}
              >
                  <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent', padding: 5, paddingHorizontal: 0,
                   borderColor: 'transparent' }}>
                    <ListItem.Content>
                      <ListItem.Title ><AppTextBold style={styles.dopsText}>{recipe.description}</AppTextBold></ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
              </ListItem.Accordion>  
          </View>
          <View style={styles.recipe_item}> 
              <ListItem.Accordion
                containerStyle={{ backgroundColor: 'transparent', padding: 0 }}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title><AppTextBold>Bitte weglassen:</AppTextBold></ListItem.Title>
                    </ListItem.Content>
                  </>
                }
                isExpanded={ingredient}
                onPress={() => {
                  setIngredient(!ingredient);
                }}
              >
                {recipe.ingredients.map((item, index) => (
                  <ListItem key={index} bottomDivider containerStyle={{ backgroundColor: 'transparent', padding: 5, paddingHorizontal: 0,
                   borderColor: 'transparent' }}>
                    <ListItem.Content>
                      <ListItem.Title ><AppTextBold style={styles.dopsText}>{item}</AppTextBold></ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </ListItem.Accordion>        
          </View>
          <View style={styles.recipe_item}>
            <View>
              <AppTextBold>Zusätze</AppTextBold>
            </View>  
              {
                additionals.map((item, index) => (
                  <View style={styles.additionals_wrapper} key={index}>
                    <View style={styles.additionals_count}>
                      <View style={styles.countButton}><Ionicons name="add-outline" size={20} color={THEME.MAIN_COLOR} /></View> 
                      <AppTextBold>{item.count}</AppTextBold>             
                      <View style={styles.countButton}><Ionicons name="remove-outline" size={20} color={THEME.MAIN_COLOR} /></View>
                    </View>
                    <AppTextBold style={styles.dopsText}>{item.title}</AppTextBold>
                  </View>
                ))
              }              
          </View>
          <AppButton onPress={goToCart}>IN DEN WARENKORB</AppButton>
        </View>    
      </ScrollView> 
} 

const styles = StyleSheet.create({ 
  additionals_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  additionals_count: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 75,
    justifyContent: 'space-between',
    marginRight: 10
  },  
  countButton: {
    borderWidth: 1,
    borderColor: '#B1B1B1',
    padding: 0,
    borderRadius: 8
  },
  dopsWrapper: {
  },
  dopsText: {
    color: '#9D9D9D',
    paddingTop: 10
  },
  recipe_item: {
    borderTopWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    paddingTop: 17,
    paddingBottom: 17
  },
  background: {
    backgroundColor: THEME.BACKGROUND_COLOR
  },  
  container: {
    padding: 15
  },
  text: {
    color: THEME.MAIN_COLOR
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  recipe_title: {
    marginTop: 56,
    fontSize: 24,
    marginBottom: 20
  },
  recipe_image: {
    width: '90%',
    margin: 'auto',
    height: 200,
    alignSelf: 'center',
    borderRadius: 6
  },
  deleteButton: {
    backgroundColor: '#000'
  }
})