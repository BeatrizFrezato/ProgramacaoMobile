import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, TextInput } from "react-native-paper"
import Botao from "../components/Botao"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth_mod } from "../firebase/configAuth"
import { useDispatch } from "react-redux"
import { reducerSetLogin } from "../redux/loginSlice"

/** implementado o firebase para autenticação de usuario
 * tbm o uso do redux para armazenar o email que vai ser utilizado em outra tela
*/

const Login = (props) => {
    const [txtEmail, setEmail] = useState("")
    const [txtSenha, setSenha] = useState("")
    const [mensagemErro, setMensagemErro] = useState('');
    const [erroLogin, setErroLogin] = useState(false)
    const dispatch = useDispatch()
    
        const goToConta = () => {
            props.navigation.navigate("NovaConta")
        }
    
        const goToSenha = () => {
            props.navigation.navigate("RecuperacaoSenha")
        }
    
        const goToHome = () => {
            dispatch(reducerSetLogin({email: txtEmail}))
            props.navigation.navigate("Drawer");
        }

    const logarUsuario = () => {
        signInWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
            .then((userCredencial) => {
                console.log("Usuário Logado com sucesso:", userCredencial);
                goToHome()
            })
            .catch((erro) => {
                let msg = '';
                if (erro.code === 'auth/user-not-found') {
                    msg = "Usuário não encontrado. Verifique o e-mail digitado.";
                } else if (erro.code === 'auth/wrong-password') {
                    msg = "Senha incorreta. Tente novamente.";
                } else if (erro.code === 'auth/invalid-email') {
                    msg = "Formato de e-mail inválido.";
                } else if (erro.code === 'auth/too-many-requests') {
                    msg = "Muitas tentativas falhas. Tente novamente mais tarde.";
                } else {
                    msg = "Erro ao realizar login: " + erro.message;
                }
                console.log(msg);
                setMensagemErro(msg);
                setErroLogin(true);
            });
    };

    return (
        <PaperProvider >
            <View style={estilo.viewPrincipal}>

                <View style={estilo.viewTitle}>
                    <Text style={estilo.textTitle}>Satisfying.you </Text>
                    <Icon name='mood' size={45} color='#ffffff' />
                </View >

                <View style={estilo.viewInput}>
                    <Text style={estilo.textEmail}>E-mail</Text>
                    <TextInput style={{ height: 45 }}
                        placeholder="Digite seu Email"
                        value={txtEmail}
                        onChangeText={txtEmail => setEmail(txtEmail)} />
                    <Text style={estilo.textSenha}>Senha</Text>
                    <TextInput style={{ height: 45 }}
                        placeholder="Digite sua Senha"
                        value={txtSenha}
                        onChangeText={txtSenha => { setSenha(txtSenha) }} />
                    <Text style={[estilo.textErro, erroLogin ? { color: 'red' } : { color: 'transparent' }]}>
                        {mensagemErro}
                    </Text>
                    <Botao texts="Entrar" styleText={estilo.textButtonEntrar} styleButton={estilo.buttonEntrar} click={logarUsuario} />
                </View>

                <View style={estilo.viewButton}>
                    <Botao texts="Criar minha conta" styleText={estilo.textButtonCriar} styleButton={estilo.buttonCriar} click={goToConta} />
                    <Botao texts="Esqueci minha senha" styleText={estilo.textButtonSenha} styleButton={estilo.buttonSenha} click={goToSenha} />
                </View>

            </View>
        </PaperProvider>
    )
}

const estilo = StyleSheet.create({
    textTitle: {
        fontSize: 40,
        color: "#FFFFFF",
        fontFamily: 'AveriaLibre-Regular'
    },


    textEmail: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    textSenha: {
        color: '#FFFFFF',
        fontSize: 20,
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
        fontFamily: 'AveriaLibre-Regular'
    },


    buttonCriar: {
        backgroundColor: "#419ED7",
        textAlign: "center"
    },
    textButtonCriar: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular'
    },


    buttonSenha: {
        backgroundColor: "#B0CCDE",
        textAlign: "center"
    },
    textButtonSenha: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular'
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        paddingLeft: 25,
        paddingRight: 25
    },
    viewTitle: {
        flex: 0.13,
        //backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewInput: {
        flex: 0.65,
        backgroundColor: "#372775",
        //backgroundColor: "green",
    },
    viewButton: {
        flex: 0.22,
        //backgroundColor: "red",
    }
})

export default Login