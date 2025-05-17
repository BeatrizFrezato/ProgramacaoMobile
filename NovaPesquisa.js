import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { PaperProvider, TextInput, MD3LightTheme as DefaultTheme, Button } from "react-native-paper"
import Botao from "../components/Botao"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const NovaPesquisa = () => {
    const [txtNome, setNome] = useState("")
    const [txtData, setData] = useState("")
    const [txtImage, setImage] = useState("")
    const [erroNome, setErroNome] = useState(false)
    const [erroData, setErroData] = useState(false)
    const navigation = useNavigation();

    const cadastro = () => {
        if(txtNome !==""){
            if(txtData !==""){
                navigation.goBack()
            }else{
                console.log("Campo Data não preenchidos")
                setErroData(true)
            }            
        }else{
            console.log("Campos Nome não preenchidos")
            setErroNome(true)
        }
    }

    return (
        <PaperProvider>
            <View style={estilo.viewPrincipal}>
                <View style={estilo.viewIntup}>
                    <Text style={estilo.textNome}>Nome</Text>
                    <TextInput style={{ height: 32 }}
                        placeholder="Digite o nome"
                        value={txtNome}
                        onChangeText={txtNome => setNome(txtNome)} />
                    <Text style={[estilo.textErro, erroNome ? { color: 'red' } : { color: 'transparent' }]}>Preencha o nome da pesquisa</Text>
                    <Text style={estilo.textData}>Data</Text>
                    <TextInput style={{ height: 32 }}
                        placeholder="Digite a data"
                        value={txtData}
                        onChangeText={txtData => setData(txtData)} 
                        right={<TextInput.Icon icon="calendar" />}/>
                    <Text style={[estilo.textErro, erroData ? { color: 'red' } : { color: 'transparent' }]}>Preencha a data</Text>
                    <Text style={estilo.textImage}>Imagem</Text>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={{height: 70, width: '100%', resizeMode: 'contain'}}
                    />
                </View>

                <View style={estilo.viewButton}>
                    <Botao texts="Cadastrar" styleText={estilo.textButtonCad} styleButton={estilo.buttonCad} click={cadastro}/>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilo = StyleSheet.create({
    textNome: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    },
    textData: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    },
    textImage: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    },
    textErro: {
        color: 'red',
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
    },


    buttonCad: {
        backgroundColor: "#37BD6D",
        textAlign: "center",
    },
    textButtonCad: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        height: 35
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        paddingLeft: 25,
        paddingRight: 25,
    },
    viewIntup: {
        flex: 0.83,
        //backgroundColor: 'red'
    },
    viewButton: {
        //backgroundColor: 'green',
        flex: 0.17,
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default NovaPesquisa