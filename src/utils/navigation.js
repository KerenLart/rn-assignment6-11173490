import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Checkout from '../screens/checkout';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const headerOptions = {
    headerTitle: () => (
      <Image
        source={require('../assets/Logo.png')}
        style={styles.headerLogo}
      />
    ),
    
};

export default function Navigation() {
    return(
        <Drawer.Navigator
        screenOptions={({navigation}) => ({
            headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                    source={require('../assets/Menu.png')}
                    style={{width: 20, height: 20, marginLeft: 10}}/>
                    </TouchableOpacity>
        })}
        >
             <Drawer.Screen name="Our Story" component={Home} options={{ headerShown: false }} />
             <Drawer.Screen name="CheckOut" component={Checkout} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    headerLogo:{
        alignSelf:'center',
        justifyContent:'center',
    }
 })