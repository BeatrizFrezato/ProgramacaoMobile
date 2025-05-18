import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { PaperProvider, TextInput} from "react-native-paper"
import Botao from "../components/Botao"

const NovaConta = () => {
    const [txtEmail, setEmail] = useState("")
    const [txtSenha, setSenha] = useState("")
    const [txtRepet, setRepet] = useState("")

    const navigation = useNavigation()

    const [erroLogin, setErroLogin] = useState(false)

    const emailOK = () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(txtEmail);
        if (isValid && (txtSenha == txtRepet) && (txtSenha !=="")) {
            console.log('Conta Criada com Sucesso')
            navigation.goBack()
            return;
        } else {
            console.log('Erro ao Criar Conta')
            setErroLogin(true)
        }
    }

    return (
        <PaperProvider>
            <View style={estilo.viewPrincipal}>
                <Text style={estilo.textEmail}>E-mail</Text>
                <TextInput style={{ height: 40 }}
                    placeholder="Digite seu Email"
                    value={txtEmail}
                    onChangeText={txtEmail => setEmail(txtEmail)} />

                <Text style={estilo.textSenha}>Senha</Text>
                <TextInput style={{ height: 40 }}
                    placeholder="Digite sua Senha"
                    value={txtSenha}
                    onChangeText={txtSenha => setSenha(txtSenha)} />

                <Text style={estilo.textSenha}>Repetir setSenha</Text>
                <TextInput style={{ height: 40 }}
                    placeholder="Digite sua Senha Novamente"
                    value={txtRepet}
                    onChangeText={txtRepet => setRepet(txtRepet)} />

                <Text style={[estilo.textErro, erroLogin ? { color: 'red' } : { color: 'transparent' }]}>O campo repetir senha difere da senha</Text>
                <Botao texts="Cadastrar" styleText={estilo.textButtonEntrar} styleButton={estilo.buttonEntrar} click={emailOK}/>
            </View>
        </PaperProvider>
    )
}

const estilo = StyleSheet.create({
    textEmail: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
    }, textSenha: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
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
        height: 40
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        paddingLeft: 25,
        paddingRight: 25
    }
})

export default NovaConta