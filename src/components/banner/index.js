import React,{Fragment} from "react"
import {Image,Text, TouchableOpacity} from 'react-native'
import styles from './styles';

const Imagem = Math.floor(Math.random() * 4 + 1);

export default function BannerMovies(){
    return(
        <>
        <Text style = {styles.textBanner}>Lançamentos:</Text>
        <TouchableOpacity>
        <Image style = {styles.imageBanner} source  = {require(`../../Img/${Imagem}.jpg`)}/>
        </TouchableOpacity>
        </>
    );
}


