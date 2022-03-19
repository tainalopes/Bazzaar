import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VestidosCurtos from '../Components/VestidosCurtos';
import VestidosLongos from '../Components/VestidosLongos';
import Categorias from '../Screens/Categorias';
import Home from '../Screens/Home';
import Cartoes from '../Screens/Cartoes';
import Sobre from '../Screens/Sobre';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen component={Home} name='Home'/>
            {/* <Stack.Screen component={Categorias} name='Categorias'/> */}
            <Stack.Screen component={Cartoes} name='Cartões'/>
            <Stack.Screen component={Sobre} name='Sobre'/>
            <Stack.Screen component={VestidosCurtos} name='Vestidos Curtos'/>
            <Stack.Screen component={VestidosLongos} name='Vestidos Longos'/>
        </Stack.Navigator>
    )
}