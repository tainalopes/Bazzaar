import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Cartoes(){
    return(
        <View style={estilo.redes}>
            <Text style={estilo.subtitulo}>formas de pagamento</Text>
            <Image source={require('../Images/pagamento.png')} />
        </View>
    )
}

const estilo = StyleSheet.create({
    redes: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    subtitulo: {
        fontSize: 14,
        fontFamily: 'monospace',
        color: 'black',
        marginTop: 20,
        alignSelf: 'center'
    }
})
