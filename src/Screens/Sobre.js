import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sobre() {
    return (
        <View style={estilo.redes}>
            <ScrollView>

                <Image style={{ width: 350, height: 120, alignSelf: 'center' }} source={require('../Images/sobre.jpg')} />

                <Text style={estilo.titulo}>Sobre o Bazar</Text>
                <Text style={estilo.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>

                <Text style={estilo.linha}></Text>

                <Text style={estilo.subtitulo}>onde nos encontrar</Text>
                <Image style={estilo.imagem} source={require('../Images/redes.png')} />
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    redes: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'monospace',
        textAlign: 'center',
        marginTop: 10
    },
    descricao: {
        textAlign: 'center',
        fontSize: 11,
        fontFamily: 'monospace',
        padding: 10
    },
    linha: {
        borderBottomWidth: 0.5, 
        width: 350, 
        borderColor: 'black', 
        alignSelf: 'center'
    },
    subtitulo: {
        fontSize: 14,
        fontFamily: 'monospace',
        color: 'black',
        marginTop: 20,
        alignSelf: 'center'
    },
    imagem: {
        width: 150,
        height: 70,
        alignSelf: 'center'
    }   
})