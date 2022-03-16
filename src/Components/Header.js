import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={estilo.pagina}>

      <View style={estilo.menu}>
        <Text style={estilo.textoMenu}>produtos  |  sobre  |  contato</Text>
      </View>

      <Text style={estilo.titulo}>Black Dresses Bazar</Text>
    </View>
  )
}

const estilo = StyleSheet.create({
  pagina: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'monospace'
  },
  menu: {
    backgroundColor: 'black',
    width: 345,
    height: 30,
    justifyContent: 'center',
    marginBottom: 10
  },
  textoMenu: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 12,
    alignSelf: 'center'
  }
})