import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, FlatList } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppCart } from '../components/ui/AppCart';
import { useDispatch, useSelector } from 'react-redux'
import {  } from '../store/actions/userAction';
import Icons from '../components/ui/AppIcon';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/ui/AppText';
import { deleteItem, getCart } from '../store/actions/cartAction';

export const CartScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  
  // console.log(cart)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Warenkorb'
    });
  }, [navigation]);

  const goOrder = () => {
    navigation.navigate('Order')
  }

 

  const deleteItemId = async (id) => {
    await dispatch(deleteItem(id))
    await dispatch(getCart(cart.id))
  }
 

  return <ScrollView style={styles.main}>
    {
      cart.cart_items.map((item, index) => (
        <View style={styles.cart_wrapper} key={index}>
          <Image style={styles.cart_image} source={ require('../../assets/recipe/salat1.png') }/>
          <View style={styles.cart_body}>
            <View style={styles.cart_titleWrapper}>
              <AppTextBold style={styles.cart_title} >{item.item}</AppTextBold>
              <Ionicons name="close-outline" onPress={() => deleteItemId(item.id)} color={THEME.MAIN_COLOR} size={32}/>
            </View>
            <AppTextBold style={styles.text}>Bircher Müsli, Banane, Erdbeeren</AppTextBold>
            <AppTextBold style={styles.edit}>Zutaten andern</AppTextBold>
            <View style={styles.cart_count}>
              <View style={styles.additionals_count}>
                <View style={styles.countButton}><Ionicons name="add-outline" size={20} color={THEME.MAIN_COLOR} /></View> 
                <AppTextBold style={styles.count}>{item.qty_item}</AppTextBold>             
                <View style={styles.countButton}><Ionicons name="remove-outline" size={20} color={THEME.MAIN_COLOR} /></View>
              </View>
              <AppTextBold style={styles.price}>{item.total_price}</AppTextBold>
            </View>
          </View>   
        </View>
      ))
    }
   <View style={styles.final_price}><AppTextBold style={styles.final_price_text}>Gesamt:</AppTextBold><AppTextBold style={styles.final_price_text}>{cart.price}</AppTextBold></View>
   <AppButton onPress={goOrder}>JETZT BESTELLEN</AppButton>
    
  </ScrollView>
}

const styles = StyleSheet.create({
  final_price:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  final_price_text: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10
  },
  cart_count: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 18
  },
  count: {
    fontSize: 16
  },
  additionals_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  additionals_count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    width: 125
  },  
  countButton: {
    borderWidth: 1,
    borderColor: '#B1B1B1',
    padding: 9,
    borderRadius: 17
  },
  edit: {
    color: THEME.MAIN_COLOR,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    width: 100,
    borderRadius: 17,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7
  },
  text: {
    color: '#9D9D9D',
    fontSize: 12,
  },
  cart_body: {
    flex: 1
  },
  cart_title: {
    fontSize: 16,
  },
  cart_titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  main: {
    backgroundColor: '#F5F2EB',
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 28
  },
  cart_wrapper: {
    flexDirection: 'row',
    paddingVertical: 25,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: THEME.MAIN_COLOR
  },
  cart_image: {
    width: 77,
    height: 71,
    borderRadius: 4,
    marginRight: 21
  }
})