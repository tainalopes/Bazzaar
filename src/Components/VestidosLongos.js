import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from "react-native";
import Produto from '../Components/Produto';

const vestidoL01 = require('../Images/vestido01.png');
const vestidoL02 = require('../Images/vestido02.png');
const vestidoL03 = require('../Images/vestido04.png');

export default function Home() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>

            <View style={estilo.imagemVestido}>
                <Produto nome="vestido manga" preco="R$ 70,00" imagem={vestidoL01} />
                <Produto nome="vestido alça" preco="R$ 80,00" imagem={vestidoL02} />
                <Produto nome="vestido babados" preco="R$ 90,00" imagem={vestidoL03} />
            </View>

            <Text style={estilo.embreve}>*em breve mais itens ;)</Text>

        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    subtitulos: {
        fontSize: 12,
        fontFamily: 'monospace',
        color: 'black'
    },
    icons: {
        width: 18,
        height: 18
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemVestido: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    embreve: {
        fontSize: 12,
        fontFamily: 'monospace',
        padding: 10
    }
})