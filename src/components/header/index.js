import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
         <TouchableOpacity> 
        <Feather style={{marginLeft: -100, marginRight: 0, padding: 0}} name="menu" size={36} color="white" />
        </TouchableOpacity>  
        <Text style = {styles.textHeader}>CloudGames</Text> 

        </View>
    );
}