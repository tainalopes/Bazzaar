import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import Header from '../Components/Header';
import Produto from '../Components/Produto';
import Footer from '../Components/Footer';

const vestidoL01 = require('../Images/vestido01.png');
const vestidoL02 = require('../Images/vestido02.png');
const vestidoL03 = require('../Images/vestido04.png');
const vestidoC01 = require('../Images/vestido03.png');
const vestidoC02 = require('../Images/vestido05.png');
const vestidoC03 = require('../Images/vestido06.png');

export default function Home() {
    return (
        <ScrollView>

            <Header />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 7 }}>
                <Image style={estilo.icons} source={require('../Images/iconLongo.png')} />
                <Text style={estilo.subtitulos}>vestidos longos</Text>
            </View>

            <View style={estilo.imagemVestido}>
                <Produto nome="vestido manga" preco="R$ 70,00" imagem={vestidoL01} />
                <Produto nome="vestido alça" preco="R$ 80,00" imagem={vestidoL02} />
                <Produto nome="vestido babados" preco="R$ 90,00" imagem={vestidoL03} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 7 }}>
                <Image style={estilo.icons} source={require('../Images/iconCurto.png')} />
                <Text style={estilo.subtitulos}>vestidos curtos</Text>
            </View>

            <View style={estilo.imagemVestido}>
                <Produto nome="vestido camiseta" preco="R$ 70,00" imagem={vestidoC01} />
                <Produto nome="vestido alça" preco="R$ 80,00" imagem={vestidoC02} />
                <Produto nome="vestido manga" preco="R$ 90,00" imagem={vestidoC03} />
            </View>

            <View style={estilo.footer}>
                <Footer texto="siga-nos" imagem={require('../Images/redes.png')} />
                <Footer texto="formas de pagamento" imagem={require('../Images/pagamento.png')} />
            </View>

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
    footer: {
        flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: 10
    }
})