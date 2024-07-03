import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CheckoutItem = ({ dress, title, description, price, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={dress} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
       <Image source={require('../assets/remove.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e67e22',
  },
  removeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  removeIcon: {
    fontSize: 20,
    color: 'red',
  },
});

export default CheckoutItem;