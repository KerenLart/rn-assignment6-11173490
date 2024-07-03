import React from "react";
import { createContext, useEffect, useState } from "react";
import { addToCheckout,removeFromCheckout,loadCheckout } from "./asyncstorage";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [products] = useState([
        {
            id: 1,
            dress: require("../assets/dress1.png"),
            title: "Office Wear",
            description: "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 2,
            dress: require("../assets/dress2.png"),
            title: "Black",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 3,
            dress: require("../assets/dress3.png"),
            title: "Church Wear",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 4,
            dress: require("../assets/dress4.png"),
            title: "Lameria",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id:5,
            dress: require("../assets/dress5.png"),
            title: "21WN",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 6,
            dress: require("../assets/dress6.png"),
            title: "Lopo",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 7,
            dress: require("../assets/dress7.png"),
            title: "21WN",
            description:  "reversible angora cardigan",
            price: "$120",
        },
        {
            id: 8,
            dress: require("../assets/dress3.png"),
            title: "lame",
            description:  "reversible angora cardigan",
            price:"$120",
        },
    ]);

    const [cart, setCart] = useState([]);

    useEffect (() => {
        const loadInitialCheckout = async () => {
            const initial = await loadCheckout();
            setCart(initial);
    };
    loadInitialCheckout();
    }, []);

    handleAddToCart = async (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (!existingItem) {
          const updatedCart = await addToCheckout(cart, item);
          setCart(updatedCart);
        } else {
          console.log('Item already in cart');
        }
      };
      const handleRemoveFromCart = async (item) => {
        const updatedCart = await removeFromCheckout(cart, item);
        setCart(updatedCart);
      };
      
    
      return (
        <CheckoutContext.Provider value={{ products, cart, handleAddToCart, handleRemoveFromCart }}>
          {children}
        </CheckoutContext.Provider>
      );
    };
    
    export { CheckoutContext };