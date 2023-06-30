import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';

const WIDTH = Dimensions.get('window').width;

const HEIGHT_MODAL = 150;

export default function SimpleModal(){
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
        </TouchableOpacity>
    )
}

export {SimpleModal}