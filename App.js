
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import SearchBar from './src/components/searchBar';
import BannerMovies from './src/components/banner';
import Filmes from './src/data/filmes';
import Series from './src/data/series';
import CardMovies from './src/components/cardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerMovies></BannerMovies>
      <View style={{width:'94vw'}}>
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Filmes}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            preco = {item.preco}
            
            
            
            ></CardMovies>
      )}
      />
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Series}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            preco = {item.preco}
            
            
            
            ></CardMovies>
      )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    
  },
});
