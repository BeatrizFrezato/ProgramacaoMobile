import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { PaperProvider, TextInput } from "react-native-paper"
import Botao from "../components/Botao"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth_mod } from "../firebase/configAuth";

const NovaConta = () => {
    const [txtEmail, setEmail] = useState("")
    const [txtSenha, setSenha] = useState("")
    const [txtRepet, setRepet] = useState("")    
    const [mensagemErro, setMensagemErro] = useState('');
    const [erroLogin, setErroLogin] = useState(false)
    const navigation = useNavigation()

    const emailOK = () => {
        if (txtSenha === txtRepet) {
            cadastrarUsuario();
        } else {
            let msg = "As senhas não coincidem";
            console.log(msg);
            setMensagemErro(msg);
            setErroLogin(true);
        }
    };

    const cadastrarUsuario = () => {
        createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
            .then((userCredencial) => {
                console.log("Usuário cadastrado com sucesso:", userCredencial);
                navigation.goBack();
            })
            .catch((erro) => {
                let msg = '';
                if (erro.code === 'auth/email-already-in-use') {
                    msg = "Esse e-mail já está em uso.";
                } else if (erro.code === 'auth/invalid-email') {
                    msg = "Formato de e-mail inválido.";
                } else if (erro.code === 'auth/weak-password') {
                    msg = "Senha fraca: mínimo 6 caracteres.";
                } else {
                    msg = "Erro ao criar usuário: " + erro.message;
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

                <Text style={[estilo.textErro, erroLogin ? { color: 'red' } : { color: 'transparent' }]}>{mensagemErro}</Text>
                <Botao texts="Cadastrar" styleText={estilo.textButtonEntrar} styleButton={estilo.buttonEntrar} click={emailOK} />
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
