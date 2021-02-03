// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from './Components/Acceuil'
import Reparation from './Components/reparation'
import ReparationDetail from './Components/reparationdetail'
import CautionDetail from './Components/CautionDetail'
import FraisTravauxDetail from './Components/FraisTravauxDetail'
import MethodePayement from './Components/MethodePayement'
import ReparerUneVoiture from './Components/ReparerUneVoiture'
import Maps from './Components/Maps.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Acceuil}  options={{
                headerShown: false
            }}/>
        <Stack.Screen name="Reparation" component={Reparation}  options={{
                headerShown: false
            }}/>
        <Stack.Screen name="ReparationDetail"  component={ReparationDetail}  options={{
            headerShown: false
        }}/>
        <Stack.Screen name="CautionDetail"  component={CautionDetail}  options={{
            headerShown: false
        }}/>
        <Stack.Screen name="FraisTravauxDetail"  component={FraisTravauxDetail}  options={{
            headerShown: false
        }}/>
        
        <Stack.Screen name="MethodePayement"  component={MethodePayement}  options={{
            headerShown: false
        }}/>
         
        <Stack.Screen name="ReparerUneVoiture"  component={ReparerUneVoiture}  options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Maps"  component={Maps}  options={{
            headerShown: false
        }}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
