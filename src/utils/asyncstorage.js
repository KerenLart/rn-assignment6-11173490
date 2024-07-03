import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCheckout = async (cart,item) => {
    const updatedCart = [...cart, item];
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
};

export const removeFromCheckout = async (cart,item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
};

export const loadCheckout = async () => {
    try{
        const cart = await AsyncStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];}

        catch(error){
            console.error("Can't load cart from storage", error);
            return [];
    }
};