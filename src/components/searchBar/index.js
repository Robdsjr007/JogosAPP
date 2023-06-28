import React from 'react'
import { TextInput,View,TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './style'


export default function SearchBar(){

    return(
          <View  style = {styles.containerSearch}>
              <TextInput placeholder="Digite o jogo desejado" style = {styles.inputSearch}>
               </TextInput>
               <TouchableOpacity>
                <Feather name="search" style = {styles.buttonSearch} size={24} color="white" />
              </TouchableOpacity>
          </View>      

        );

}