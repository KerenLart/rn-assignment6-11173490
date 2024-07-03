import React from "react";
import { View, Image, StyleSheet,Text } from 'react-native'; 

const Title = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Our Story</Text>
            </View>
            <View style={styles.iconcont}>
                <View style={styles.icon}> 
                    <Image source={require('../assets/Listview.png')} />
                </View>
                <View style={styles.icon}>
                    <Image source={require('../assets/Filter.png')} />
                </View>
                
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
   iconcont:{
       flexDirection:'row',
       
   }, 
    icon:{
        marginRight:10,
        borderRadius:100,
        backgroundColor:'#ccc',
        width:40,
        height:40,
        justifyContent:'center',
        padding:10, 
        
    },
    title:{
        fontSize:25,
        fontWeight:'400',

    }
 });
export default Title;