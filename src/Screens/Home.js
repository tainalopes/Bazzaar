import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, Image, ImageBackground } from "react-native";

export default function Home() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <View style={{ backgroundColor: 'black', width: 300, alignSelf: 'center', borderRadius: 5 }}>
                <Text style={estilo.titulo}>Black Dresses Bazar</Text>
            </View>

            <Image style={estilo.imagem} source={require('../Images/alldresses.jpg')} />

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
    imagem: {

        alignSelf: 'center'
    }
})