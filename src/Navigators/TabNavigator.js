import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home.js';
import Categorias from '../Screens/Categorias.js';
import Sobre from '../Screens/Sobre.js';
import Cartoes from '../Screens/Cartoes.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if(route.name === "Home"){
                        iconName = focused
                        ? 'menu-sharp'
                        : 'menu-outline'
                    } else if(route.name === "Home"){
                        iconName = focused
                        ? 'md-home-sharp'
                        : 'md-home-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}></Icon>
                },
                /* tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green' */
            })}
        >
            <Tab.Screen component={Home} name='Home'/>
            <Tab.Screen component={Categorias} name='Categorias'/>
            <Tab.Screen component={Cartoes} name='Cartões'/>
            <Tab.Screen component={Sobre} name='Sobre'/>
        </Tab.Navigator>
    )
}