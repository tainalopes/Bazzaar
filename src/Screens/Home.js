import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <View style={{ backgroundColor: 'black', width: 300, alignSelf: 'center', borderRadius: 5 }}>
                <Text style={estilo.titulo}>Black Dresses Bazar</Text>
            </View>

            <Image style={estilo.imagem} source={require('../Images/alldresses.jpg')} />

            <Text style={estilo.subtitulo}>o que você procura?</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Vestidos Curtos')}>
                    <Text style={estilo.textoBotao}>vestidos curtos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Vestidos Longos')} on>
                    <Text style={estilo.textoBotao}>vestidos longos</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: 5
    },
    subtitulo: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        textAlign: 'center',
        marginBottom: 20
    },
    imagem: {

        alignSelf: 'center',
        height: 300,
        width: 400,
        margin: 10
    },
    botao: {
        backgroundColor: 'black',
        width: 150,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center'
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    }
})