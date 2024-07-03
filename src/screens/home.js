import * as React from 'react';
import { View, Text, Button, StyleSheet ,TouchableOpacity,Image, FlatList,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Collection from '../components/collection';
import Title from '../components/title';
import { CheckoutContext } from '../utils/Checkoutcontext';
import { useContext } from 'react';



function Home({ navigation}) {
    const {  handleAddToCart,products } = useContext(CheckoutContext);
    

    return (
        <SafeAreaView>
            <ScrollView>
            <View>
                <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                    source={require('../assets/Menu.png')}
                    />
                    
                    </TouchableOpacity>
                <View>
                    <Image source={require('../assets/Logo.png')} style={styles.headerLogo}/>
                </View>
                <View style={styles.searchBag}>
                    <View>
                        <Image source={require('../assets/Search.png')} style={styles.search}/>
                    </View>
                    <View>
                        <Image source={require('../assets/shoppingBag.png')} style={styles.bag}/>
                    </View>
                </View>
                </View>
            
                <View>
                   <Title/>
                </View>
                <View>
                <FlatList
                    style={{paddingRight:10}}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Collection
                        dress={item.dress}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        icon={require('../assets/add_circle.png')}
                        onPress={() => handleAddToCart(item)}
                        />
                    )}
                    />
                </View>
            
        </View>
            </ScrollView>
            
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
    searchBag:{
        flexDirection:'row',
    
    },

    search:{
        marginRight:10,
        
    },
    
});
export default Home;