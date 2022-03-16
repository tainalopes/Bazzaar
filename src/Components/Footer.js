import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default function Footer(props) {
    return (
        <View>

            <Text>{props.texto}</Text>
            <Image source={props.imagem} style={{width: 140, height: 60}}></Image>

        </View >
    )
}
