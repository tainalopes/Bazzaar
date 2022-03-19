import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function Categorias() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconCurto.png')} />
                <Text style={estilo.subtitulos}>vestidos curtos</Text>
            </View>

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconLongo.png')} />
                <Text style={estilo.subtitulos}>vestidos longos</Text>
            </View>

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