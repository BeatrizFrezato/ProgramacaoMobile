import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { PaperProvider, TextInput, MD3LightTheme as DefaultTheme, Button, Card } from "react-native-paper"
import Botao from "../components/Botao"

const Home = (props) => {
    const goToPesquisa = () => {
        props.navigation.navigate("NovaPesquisa")
    }

    const goToAcoes = () => {
        props.navigation.navigate("AcoesDePesquisa")
    }

    return (
        <PaperProvider>
            <View style={estilo.viewPrincipal}>

                <View style={estilo.viewPesquisa}>
                    <TextInput placeholder="Pesquisa" left={<TextInput.Icon icon="magnify" />} />
                </View >

                <View style={estilo.viewCard}>
                    <TouchableOpacity style={estilo.buttonCard} onPress={goToAcoes}>
                        <Card>
                            <Card.Cover source={require('../assets/image/secomp.png')} style={estilo.card}/>
                            <Card.Content>
                                <Text style={estilo.nome}>SECOMP 2023</Text>
                                <Text style={estilo.data}>10/10/2023</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={estilo.buttonCard} onPress={goToAcoes}>
                        <Card>
                            <Card.Cover source={require('../assets/image/ubuntu.png')} style={estilo.card}/>
                            <Card.Content>
                                <Text style={estilo.nome}>UBUNTU 2022</Text>
                                <Text style={estilo.data}>05/06/2022</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.buttonCard} onPress={goToAcoes}>
                        <Card>
                            <Card.Cover source={require('../assets/image/meninas.png')} style={estilo.card}/>
                            <Card.Content>
                                <Text style={estilo.nome}>MENINAS CPU</Text>
                                <Text style={estilo.data}>01/04/2022</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </View>

                <View style={estilo.viewButton}>
                    <Botao texts="Nova Pesquisa" styleText={estilo.textButtonPesquisa} styleButton={estilo.buttonPesquisa} click={goToPesquisa}/>
                </View>

            </View>
        </PaperProvider>
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


    card: {
        height: 110,
        width: 140,
    },
    buttonCard: {
        height: 110,
        width: 140,
        backgroundColor: 'white',
        borderRadius: 11,
    },
    nome: {
        fontSize: 15,
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
        flex: 0.20,
        //backgroundColor: "red",
        flexDirection: "column",
        justifyContent: 'center'
    },
    viewCard: {
        flex: 0.62,
        //backgroundColor: "green",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    viewButton: {
        flex: 0.18,
        //backgroundColor: "red"
    }
})

export default Home