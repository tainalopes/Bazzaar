import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home.js';
import Categorias from '../Screens/Categorias.js';
import Cartoes from '../Screens/Cartoes.js';
import Sobre from '../Screens/Sobre.js';
import VestidosCurtos from '../Components/VestidosCurtos.js';
import VestidosLongos from '../Components/VestidosLongos.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if(route.name === "Home"){
                        iconName = focused
                        ? 'home'
                        : 'home-outline'
                    } else if(route.name === "Categorias"){
                        iconName = focused
                        ? 'menu-sharp'
                        : 'menu-outline'
                    }else if(route.name === "Cartões"){
                        iconName = focused
                        ? 'card'
                        : 'card-outline'
                    }else if(route.name === "Sobre"){
                        iconName = focused
                        ? 'ios-business'
                        : 'ios-business-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}></Icon>
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
                style: {backgroundColor: 'yellow'}
                
            })}

            navigationOptions = {({ navigation}) => ({
                tabBarLabel: 'yellow'
            })}
        >

            <Tab.Screen component={Home} name='Home'/>
            <Tab.Screen component={Categorias} name='Categorias'/>
            <Tab.Screen component={Cartoes} name='Cartões'/>
            <Tab.Screen component={Sobre} name='Sobre'/>
            <Tab.Screen component={VestidosCurtos} name='VC'/>
            <Tab.Screen component={VestidosLongos} name='VL'/>
        </Tab.Navigator>
    )
}