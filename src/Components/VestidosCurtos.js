import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from "react-native";
import Produto from '../Components/Produto';

const vestidoC01 = require('../Images/vestido03.png');
const vestidoC02 = require('../Images/vestido05.png');
const vestidoC03 = require('../Images/vestido06.png');

export default function VestidosCurtos() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <View style={estilo.imagemVestido}>
                <Produto nome="vestido camiseta" preco="R$ 70,00" imagem={vestidoC01} />
                <Produto nome="vestido alça" preco="R$ 80,00" imagem={vestidoC02} />
                <Produto nome="vestido manga" preco="R$ 90,00" imagem={vestidoC03} />
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