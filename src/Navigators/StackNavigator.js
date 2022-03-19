import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import VestidosCurtos from '../Components/VestidosCurtos';
import VestidosLongos from '../Components/VestidosLongos';
import Pagamento from '../Screens/Pagamento';
import Sobre from '../Screens/Sobre';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Home} name='Home' />
            <Stack.Screen component={Pagamento} name='Pagamento' />
            <Stack.Screen component={Sobre} name='Sobre' />
            <Stack.Screen component={VestidosCurtos} name='Vestidos Curtos' />
            <Stack.Screen component={VestidosLongos} name='Vestidos Longos' />
        </Stack.Navigator>
    )
}