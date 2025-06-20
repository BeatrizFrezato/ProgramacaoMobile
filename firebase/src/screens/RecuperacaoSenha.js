import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { PaperProvider, TextInput } from "react-native-paper"
import Botao from "../components/Botao"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from "../firebase/configAuth";
/** implementado uma função que para recuperação de senha no firebase
 *  ela vai enviar um email para o email cadastrado e lá vc redefine a senha
 */
const RecuperacaoSenha = () => {
    const [txtEmail, setEmail] = useState("")
    const [mensagemErro, setMensagemErro] = useState('');
    const [erroLogin, setErroLogin] = useState(false)

    const navigation = useNavigation()

    const recuperarSenha = () => {
        sendPasswordResetEmail(auth_mod, txtEmail)
            .then(() => {
                console.log("E-mail de redefinição de senha enviado.");
                navigation.goBack()
            })
            .catch((erro) => {
                let msg = '';
                if (erro.code === 'auth/user-not-found') {
                    msg = "Usuário não encontrado. Verifique o e-mail digitado.";
                } else if (erro.code === 'auth/invalid-email') {
                    msg = "Formato de e-mail inválido.";
                } else if (erro.code === 'auth/missing-email') {
                    msg = "Informe um e-mail para recuperar a senha.";
                } else {
                    msg = "Erro ao enviar e-mail de recuperação: " + erro.message;
                }
                console.log(msg);
                setMensagemErro(msg);
                setErroLogin(true);
            });
    };

    return (
        <PaperProvider>
            <View style={estilo.viewPrincipal}>
                <Text style={estilo.textEmail}>E-mail</Text>
                <TextInput style={estilo.inputEmail}
                    placeholder="Digite seu E-mail"
                    value={txtEmail}
                    onChangeText={txtEmail => setEmail(txtEmail)} />
                <Text style={[estilo.textErro, erroLogin ? { color: 'red' } : { color: 'transparent' }]}>E-mail parece ser inválido</Text>
                <Botao texts="Recuparear" styleText={estilo.textButtonEntrar} styleButton={estilo.buttonEntrar} click={recuperarSenha} />
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
        height: 50
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        justifyContent: 'center',
        padding: 25,
    }
})

export default RecuperacaoSenha