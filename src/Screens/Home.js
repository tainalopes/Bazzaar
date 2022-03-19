import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, Image, ImageBackground, Button } from "react-native";

export default function Home({navigation}) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <View style={{ backgroundColor: 'black', width: 300, alignSelf: 'center', borderRadius: 5 }}>
                <Text style={estilo.titulo}>Black Dresses Bazar</Text>
            </View>

            <Image style={estilo.imagem} source={require('../Images/alldresses.jpg')} />

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconCurto.png')} />
                <Text style={estilo.subtitulos}>vestidos curtos</Text>
            </View>

            <Button title="ir para vc" onPress={() => navigation.navigate('Vestidos Curtos')}></Button>

            <View style={estilo.categorias}>
                <Image style={estilo.icons} source={require('../Images/iconLongo.png')} />
                <Text style={estilo.subtitulos}>vestidos longos</Text>
            </View>

            <Button title="ir para vl" onPress={() => navigation.navigate('Vestidos Longos')}></Button>


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