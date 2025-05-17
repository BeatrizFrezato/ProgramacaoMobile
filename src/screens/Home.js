import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import PesquisaCard from '../components/PesquisaCard';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [pesquisas, setPesquisas] = useState([
    {
      id: '1',
      nome: 'SECOMP 2025',
      data: '17/04/2025',
      img: '../assets/images/secomp.png',
    },
    {
      id: '2',
      nome: 'Meninas CPU',
      data: '20/03/2025',
      img: '../assets/images/meninas.png',
    },
    {
      id: '3',
      nome: 'Ubuntu 2024',
      data: '15/07/2024',
      img: '../assets/images/ubuntu.png',
    }
  ]);

  const filteredPesquisas = pesquisas.filter((pesquisa) =>
    pesquisa.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const irParaNovaPesquisa = () => {
    navigation.navigate('NovaPesquisa');
  };

  const irParaModificarPesquisa = (id, nome) => {
    navigation.navigate('ModificarPesquisa', { id, nome });
  };

  return (
    <View style={styles.body}>
      <View style={styles.viewTextInput}>
        <Image source={require('../assets/images/lupa.png')} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Insira o termo da busca..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.containerCartoes}>
        <FlatList
          data={filteredPesquisas}
          renderItem={({ item }) => (
            <PesquisaCard
              nome={item.nome}
              data={item.data}
              img={item.img}
              onPress={() => irParaModificarPesquisa(item.id, item.nome)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Pressable onPress={irParaNovaPesquisa} style={styles.btnNovaPesquisa}>
        <Text style={styles.btnPesquisa}>Nova Pesquisa</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#382474',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    margin: 10,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    flex: 1,
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
  },
  containerCartoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#382474',
  },
  btnNovaPesquisa: {
    width: '90%',
    height: 40,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  btnPesquisa: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
  },
});

export default Home;
