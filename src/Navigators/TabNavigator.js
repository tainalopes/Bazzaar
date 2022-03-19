import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pagamento from '../Screens/Pagamento.js';
import Sobre from '../Screens/Sobre.js';
import StackNavigator from './StackNavigator.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                    } else if (route.name === "Pagamento") {
                        iconName = focused
                            ? 'card'
                            : 'card-outline'
                    } else if (route.name === "Sobre") {
                        iconName = focused
                            ? 'ios-business'
                            : 'ios-business-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}></Icon>
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
                style: { backgroundColor: 'yellow' }

            })}

            navigationOptions={({ navigation }) => ({
                tabBarLabel: 'yellow'
            })}
        >
            <Tab.Screen component={StackNavigator} name='Home' options={{ headerShown: false }} />
            <Tab.Screen component={Pagamento} name='Pagamento' />
            <Tab.Screen component={Sobre} name='Sobre' />
        </Tab.Navigator>
    )
}