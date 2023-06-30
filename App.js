
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import SearchBar from './src/components/searchBar';
import BannerMovies from './src/components/banner';
import Filmes from './src/data/filmes';
import Series from './src/data/series';
import CardMovies from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';
{/*import {SimpleModal} from './src/components/modal';*/}

export default function App() {
  {/*const [isModalVisible, setisModalVisible] = useState(false)*/}
  {/*const changeModalVisible = (bool) => {
    setisModalVisible(bool)
  }*/}
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerMovies></BannerMovies>
      <View style={{width:'94vw'}}>
        {/*
        <Modal transparent={true} animationType='fade' visable={isModalVisible} nRequestClose=(() => changeModalVisible(false)) > 
          <SimpleModal/>
        </Modal>
        */}
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
            nota = {item.nota}    
            
            
            ></CardMovies>
      )}
      />
      <Text style = {{flex: 1, fontSize:25, color:'white', fontWeight:'bold', paddingTop: 10, paddingBottom: 10 }}>
      Mais jogados:</Text>

      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Series}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardSeries
            titulo = {item.nome}
            imagem = {item.imagem}
            preco = {item.preco}
            nota = {item.nota}

            
            
            ></CardSeries>
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
