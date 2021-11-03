import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screens/MainScreen'
import {CatalogScreen} from '../screens/CatalogScreen'
import {RecipeScreen} from '../screens/RecipeScreen'
import {LoginScreen} from '../screens/LoginScreen'
import {RegistrationScreen} from '../screens/RegistrationScreen'
import {THEME} from '../theme'
import Icons from '../components/ui/AppIcon'
import { AccountScreen } from '../screens/AccountScreen';
import { AddRecipeScreen } from '../screens/AddRecipeScreen';
import { ceil } from 'react-native-reanimated';
import { AppTextBold } from '../components/ui/AppTextBold';
import CartIcon from '../../assets/svg/cart.js'; 
import { CartScreen } from '../screens/CartScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { PlaceScreen } from '../screens/PlaceScreen';
import { ThanksScreen } from '../screens/ThanksScreen';

const CatalogNavigator = createStackNavigator()
const Auth = false
function AppStackNavigation() {
  return (   
        <CatalogNavigator.Navigator   
          initialRouteName="Store"
          screenOptions={{  
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: { 
              fontFamily: 'nunito-bold',
              fontSize: 16,            
            }, 
          }}
        >
          <CatalogNavigator.Screen name="Store" component={PlaceScreen} />
          <CatalogNavigator.Screen name="Recipes" component={CatalogScreen} /> 
          <CatalogNavigator.Screen name="Recipe" component={RecipeScreen} />
          <CatalogNavigator.Screen name="Cart" component={CartScreen} />
          <CatalogNavigator.Screen name="Order" component={OrderScreen} />
          <CatalogNavigator.Screen name="Thanks" component={ThanksScreen} />
        </CatalogNavigator.Navigator>
  )
}

const NewsNavigator = createStackNavigator()

function NewsStackNavigation() {
  return (
        <NewsNavigator.Navigator   
          initialRouteName="News"
          screenOptions={{  
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: { 
              marginLeft: 20
            },
          }}
        > 
          <NewsNavigator.Screen 
            name="News" 
            component={MainScreen}
            options={{
              headerTitle: () => <Icons name={'LogoHeader'} size={40} color={''} fill={'#000'}/>
            }}
           />
        </NewsNavigator.Navigator>
  )
}

const AccountNavigator = createStackNavigator()

function AccountStackNavigation() {
  return (
    
        <AccountNavigator.Navigator   
          
          screenOptions={{  
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: { 
              fontFamily: 'nunito-bold',
              textAlign: 'center',
              fontSize: 16
            }, 
          }}
        > 
        {
        useSelector(state => state.user.isAuth ? (
          <>
            <AccountNavigator.Screen 
              name="Account"     
              component={AccountScreen} 
              options={{title: 'Profil'}}
            />
          </>
        ) : (
          <>
              <AccountNavigator.Screen name="Login" component={LoginScreen} 
              options={{headerShown: null}}
            />
            <AccountNavigator.Screen name="Registration" component={RegistrationScreen} options={{headerShown: null}}/>
          </>
        )
        )}
      </AccountNavigator.Navigator>
  )
}

const MainNavigator = createBottomTabNavigator()

export const AppNavigation = () => {
  return (
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let fill;
              if (route.name === 'News') {
                iconName = 'Bakuli'
                color = '';
                fill = focused ? THEME.MAIN_COLOR : '#616160';
                size = 43
              } else if (route.name === 'Recipes') {
                iconName = 'CheckListIcon'
                color = focused ? THEME.MAIN_COLOR : '#979797';
                fill = focused ? THEME.MAIN_COLOR : '#979797'
                size = 29
              } else if (route.name === 'Account') {
                iconName = 'UserIcon'
                color = focused ? THEME.MAIN_COLOR : '#979797';
                fill = 'transparent'
                size = 29

              }
  
              // You can return any component that you like here!
              return <Icons style={{marginTop: 14}} name={iconName} size={size} height={size} color={color} fill={fill}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: THEME.MAIN_COLOR,
            inactiveTintColor: '#1D1D1B',
            style: {
              height: 75,
              paddingBottom: 10,
            },
          }}
        >         
          <MainNavigator.Screen 
          name="News" 
          options={{title: ''}}
          component={NewsStackNavigation} 
          />
          {useSelector(state => state.user.accept ? (
            <>
              <MainNavigator.Screen name="Recipes" options={{title: 'Bestellungen'}} component={AppStackNavigation} />
              <MainNavigator.Screen name="Account" options={{title: 'Profil'}} component={AccountStackNavigation} />
            </>
          ) : false )}
          
        </MainNavigator.Navigator>
      </NavigationContainer> 
  )
}
