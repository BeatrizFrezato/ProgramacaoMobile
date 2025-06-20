import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { PaperProvider, TextInput, MD3LightTheme as DefaultTheme, Button, Card } from "react-native-paper"
import { initializeFirestore, collection, query, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/config";
import Botao from "../components/Botao"
import { useDispatch } from "react-redux"
import { reducerSetCard } from "../redux/cardSlice"

/*
    implementação do useEffect igual no video do professsor
    criação das const para usar no useEfferct
    criação do flatList
    remoção dos antigos card e implementação de uma função que faz isso com o flatList
    tbm foi implementado uma função redux que vai passar para a tela de modificarPesquisa o id
    do item que vai ser modificado
*/

const Home = (props) => {
    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const cardsColecao = collection(db, "cards")
    const [listaCards, setListaCards] = useState();
    const dispatch = useDispatch()


    useEffect(() => {
        const q = query(cardsColecao)

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cards = []
            snapshot.forEach((doc) => {
                cards.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            setListaCards(cards)
        })
    }, [])


    const goToPesquisa = () => {
        props.navigation.navigate("NovaPesquisa")
    }

    const goToAcoes = (id) => {
        dispatch(reducerSetCard({id: id}))
        props.navigation.navigate("AcoesDePesquisa")        
    }

    const itemCard = ({ item }) => {
        return (
            <TouchableOpacity style={estilo.buttonCard} onPress={() => {goToAcoes(item.id)}}>
                <Card>
                    <Card.Cover source={{ uri: item.Image }} style={estilo.card} />
                    <Card.Content>
                        <Text style={estilo.nome}>{item.Nome}</Text>
                        <Text style={estilo.data}>{item.Data}</Text>
                        <Text style={estilo.data}>{item.id}</Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )
    }

    return (
        <View style={estilo.viewPrincipal}>
            <View style={estilo.viewPesquisa}>
                <TextInput placeholder="Pesquisa" left={<TextInput.Icon icon="magnify" />} />
            </View >
            <View style={estilo.viewCard}>
                <FlatList data={listaCards} renderItem={itemCard} keyExtractor={cards => cards.id} horizontal contentContainerStyle={estilo.flatListContent} />
            </View>

            <View style={estilo.viewButton}>
                <Botao texts="Nova Pesquisa" styleText={estilo.textButtonPesquisa} styleButton={estilo.buttonPesquisa} click={goToPesquisa} />
            </View>
        </View>
    )
}
const estilo = StyleSheet.create({
    buttonPesquisa: {
        backgroundColor: "#37BD6D",
        textAlign: "center",
    },
    textButtonPesquisa: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular'
    },
    flatListContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 40
    },

    card: {
        height: 90,
        width: 160,
    },
    buttonCard: {
        height: 110,
        width: 160,
        backgroundColor: 'white',
        borderRadius: 11,
    },
    nome: {
        fontSize: 18,
        color: '#3F92C5',
        textAlign: 'center'
    },
    data: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center'
    },

    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
    },
    viewPesquisa: {
        flex: 0.15,
        flexDirection: "column",
        justifyContent: 'center'
    },
    viewCard: {
        flex: 0.67,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    viewButton: {
        flex: 0.18,
    }
})

export default Home