import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';

const Footer = ({ totalAmount }) => {
    return(
        <View style={styles.container}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>EST. TOTAL</Text>
                <Text style={styles.totalAmount}>${totalAmount}</Text>
            </View>
            <View style={styles.footer}>
                <Image style={styles.footerimg} source={require('../assets/shoppingBag.png')}/>
                <Text style={styles.footertext}>
                    CHECKOUT
                </Text>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent:'space-between',
        
        
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom   : 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e67e22',
    },
    footer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor:'#000',
    },
    footerimg:{
        tintColor:'#fff',
        marginRight:20,
    },
    footertext:{
        color:'#fff',
        fontSize:20,
    },
});

export default Footer;