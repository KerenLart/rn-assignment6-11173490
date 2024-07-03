import React, { useContext,useMemo } from 'react';
import { createContext, useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Collection from '../components/collection';
import { CheckoutContext } from '../utils/Checkoutcontext'; 
import ChechoutHeader from '../components/headercheckout';
import CheckoutItem from '../components/CheckoutItem';
import Footer from '../components/checkoutfooter';

function Checkout({ navigation }) {
  const { cart, handleRemoveFromCart } = useContext(CheckoutContext);
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  }, [cart]);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <View>
        <ChechoutHeader />
        <View > 
        <FlatList
       
       data={cart}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({ item }) => (
         <CheckoutItem
           dress={item.dress}
           title={item.title}
           description={item.description}
           price={item.price}
           icon={require('../assets/remove.png')}
           onRemove={() => handleRemoveFromCart(item)}
         />
       )}
     />
        </View>
       
        
      </View>
      <Footer totalAmount={totalAmount} />
    </SafeAreaView>
  );
}

export default Checkout;
