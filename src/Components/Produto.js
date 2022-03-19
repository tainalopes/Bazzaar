import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

function Detalhes(props) {
    const [getModal, setModal] = useState(false);

    const atualizarModal = () => {
        setModal(!getModal);
    };

    return (
        <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity style={estilo.botao1} onPress={atualizarModal}>
                <Text style={estilo.maisDetalhes}>+detalhes</Text>
            </TouchableOpacity>

            <Text>{props.preco}</Text>
            <Text>{props.descricao}</Text>

            <Modal isVisible={getModal} style={estilo.modal}>

                <View style={estilo.pagina}>

                    <Image style={estilo.imagemVestido} source={props.imagem2} />
                    <Text style={estilo.produto}>{props.nome2}</Text>
                    <Text style={estilo.produto}>{props.preco2}</Text>

                    <ScrollView >
                        <Text style={estilo.descricao}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
                    </ScrollView>

                    <TouchableOpacity style={estilo.botao2} onPress={atualizarModal}>
                        <Text style={estilo.textoBotao}>fechar</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
}

export default function Produto(props) {

    return (
        <View style={{ alignItems: 'center', padding: 10 }}>

            <Image source={props.imagem} style={{ width: 100, height: 150 }} />
            <Text style={estilo.produto}>{props.nome}</Text>
            <Text style={estilo.produto}>{props.preco}</Text>

            <Detalhes imagem2={props.imagem} nome2={props.nome} preco2={props.preco} />

        </View>
    )
}

const estilo = StyleSheet.create({
    pagina: {
        alignItems: 'center',
        padding: 15
    },
    produto: {
        fontSize: 11,
        fontFamily: 'monospace',
        color: 'black',
        marginTop: 2
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 5,
        alignContent: 'center',
        margin: 60
    },
    botao1: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    botao2: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20
    },
    textoBotao: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'monospace',
        padding: 4,
    },
    imagemVestido: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 150,
        marginBottom: 10,
        borderRadius: 5
    },
    descricao: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 11,
        fontFamily: 'monospace',
        marginTop: 10
    },
    maisDetalhes: {
        borderColor: 'black',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        fontFamily: 'monospace',
        fontSize: 11,
        padding: 2
    }
})