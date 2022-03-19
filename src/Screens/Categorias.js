import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Button } from 'react-native';
import VestidosCurtos from '../Components/VestidosCurtos';
import VestidosLongos from '../Components/VestidosLongos';

export default function Categorias({navigation}) {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconCurto.png')} />
                <Text style={estilo.subtitulos}>vestidos curtos</Text>
            </View>

            <Button title="ir para vc" onPress={() => navigation.navigate('Teste')}></Button>

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconLongo.png')} />
                <Text style={estilo.subtitulos}>vestidos longos</Text>
            </View>

            <Button title="ir para vl" onPress={() => navigation.navigate('Teste')}></Button>

        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    categorias: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 20
    },
    subtitulos: {
        fontSize: 18,
        fontFamily: 'monospace',
        color: 'black'
    },
    icons: {
        width: 26,
        height: 26
    }
})