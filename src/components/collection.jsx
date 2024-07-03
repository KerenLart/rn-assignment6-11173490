import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Collection = ({ dress, title, description, price, icon , onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={dress} style={styles.image} />
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress}>
            <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
          
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    width: '45%',
    marginBottom: 20,
   marginHorizontal: '3%',
    
  },
  imageContainer: {
    position: "relative",
    width: '100%',
    aspectRatio: 3/4, // Adjust this ratio as neede
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 15,
    
  },
  icon: {
    width: 20,
    height: 20,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e67e22',
  },
});

export default Collection;