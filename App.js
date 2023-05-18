// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {library} from '@fortawesome/fontawesome-svg-core';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import BookingScreen from './src/screens/BookingScreen';
import ShowScreen from './src/screens/ShowScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import BTScreen from './src/screens/BTScreen';

import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';

library.add(faShoppingCart, faBars, faClose);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Date.now() > 1684679548962 && (
          <Stack.Screen
            name="BT"
            component={BTScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
