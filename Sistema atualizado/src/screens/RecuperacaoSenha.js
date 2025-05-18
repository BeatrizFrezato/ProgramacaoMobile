import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { PaperProvider, TextInput} from "react-native-paper"
import Botao from "../components/Botao"

const RecuperacaoSenha = () => {
    const [txtEmail, setEmail] = useState("")

    const navigation = useNavigation()

    const [erroLogin, setErroLogin] = useState(false)

    const emailOK = () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(txtEmail);
        if (isValid) {
            console.log('Recuperar Senha Realizado')
            navigation.goBack()
            return;
        } else {
            console.log('Erro ao Recuperar Senha')
            setErroLogin(true)
        }
    }

    return (
        <PaperProvider>
            <View style={estilo.viewPrincipal}>
            <Text style={estilo.textEmail}>E-mail</Text>
                    <TextInput style={estilo.inputEmail}
                        placeholder="Digite seu E-mail"
                        value={txtEmail}
                        onChangeText={txtEmail => setEmail(txtEmail)} />
                    <Text style={[estilo.textErro, erroLogin ? { color: 'red' } : { color: 'transparent' }]}>E-mail parece ser inválido</Text>
                    <Botao texts="Recuparear" styleText={estilo.textButtonEntrar} styleButton={estilo.buttonEntrar} click={emailOK}/>
            </View>
        </PaperProvider>
    )
}

const estilo = StyleSheet.create({
    textEmail: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
    },
    inputEmail: {
        color: "#FFFFFF"
    },
    textErro: {
        color: 'red',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },


    buttonEntrar: {
        backgroundColor: "#37BD6D",
        textAlign: "center",
    },
    textButtonEntrar: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        height:50
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        justifyContent: 'center',
        padding: 25,
    }
})

export default RecuperacaoSenha