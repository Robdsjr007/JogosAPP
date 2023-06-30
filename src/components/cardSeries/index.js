import React from 'react'
import {Image,Text,TouchableOpacity} from 'react-native'
import styles from './style'

export default function CardSeries({titulo,imagem,preco,nota}){

    return(

        <TouchableOpacity style={styles.containerJogos}>
            <Image style={styles.images} source = {require (`../../Img/${imagem}`)} />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.textPreco}>{preco}</Text>
            <Text style={styles.textNota}>{nota}</Text>


        </TouchableOpacity>

    )
}