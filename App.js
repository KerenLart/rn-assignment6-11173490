import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/utils/navigation.js';
import { CheckoutProvider } from './src/utils/Checkoutcontext.js';

export default function App() {
  return (
    <CheckoutProvider>
      <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </CheckoutProvider>
    
  );
}


