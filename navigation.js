import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home';
import Checkout from './screens/checkout';

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return(
        <Drawer.Navigator>
             <Drawer.Screen name="Our Story" component={Home} />
             <Drawer.Screen name="CheckOut" component={Checkout} />
        </Drawer.Navigator>
    )
}