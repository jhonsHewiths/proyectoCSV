import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import LabelLevel from './LabelLevel';

export default function Card ({urlImg, onPress, width}){
    return(
        <Pressable
            onPress={onPress}
        >
            <image source={{url:'la url de la imagen'}} style={} resizeMode='cover'/>
        </Pressable>
    )
}