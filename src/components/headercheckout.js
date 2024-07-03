import React from "react";
import {View,Image,StyleSheet,Text} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChechoutHeader =() => {
    return(
        <View>
             <View style={styles.container}>
            <View style={styles.icon}>
            <Image source={require('../assets/Logo.png')}/>
            </View>
            <View>
            <Image source={require('../assets/Search.png')}/>
            </View>
            
        </View>
        <Text style={styles.title}>CHECKOUT</Text>
        <View style={styles.span}>
          <View style={styles.line}></View>
          <MaterialCommunityIcons
            name="cards-diamond-outline"
            size={20}
            color="#AFB0B6"
          />
          <View style={styles.line}></View>
        </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:20,
    },
    icon:{
        marginRight:100,
        marginLeft:130,
    },
    title: {
        fontSize: 24,
        fontWeight: "light",
        marginTop: 20,
        marginLeft: 110,
        letterSpacing: 5,
        justifyCOntent: "center",
        alignContent: "center",
      },
    line: {
        width: 60,
        height: 1,
        backgroundColor: "#AFB0B6",
        marginTop: 20,
        alignContent: "center",
        bottom: 10,
      },
      span: {
        flexDirection: "row",
        marginHorizontal: 120,
        marginBottom: 25,
    }   
})

export default ChechoutHeader;