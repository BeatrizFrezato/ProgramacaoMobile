import { useState } from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"
import { PaperProvider, TextInput } from "react-native-paper"
import Botao from "../components/Botao"
import { useNavigation } from '@react-navigation/native';
import { initializeFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase/config";
import { launchImageLibrary } from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";

/** conexão com firebase para cadastrar os itens
 * utilizadação da image-picker e image-resizer para a captura das imagens
 * tbm foi utilizada uma função para transformar a imagem em base64
 */

const NovaPesquisa = () => {
    const [txtNome, setNome] = useState("")
    const [txtData, setData] = useState("")
    const [image, setImage] = useState("")
    const [erroNome, setErroNome] = useState(false)
    const [erroData, setErroData] = useState(false)
    const navigation = useNavigation();
    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const cardsColecao = collection(db, "cards")

    const cadastro = () => {
        if (txtNome !== "") {
            if (txtData !== "") {
                navigation.goBack()
                const docCard = {
                    Nome: txtNome,
                    Data: txtData,
                    Image: image
                }
                addDoc(cardsColecao, docCard)
                    .then((docRef) => {
                        console.log("Documento cadastrado com sucesso:", docRef.id);
                        navigation.goBack();
                    })
                    .catch((erro) => {
                        let msg = '';
                        if (erro.code === 'permission-denied') {
                            msg = "Você não tem permissão para realizar essa operação.";
                        } else if (erro.code === 'unavailable') {
                            msg = "Serviço temporariamente indisponível. Tente novamente mais tarde.";
                        } else if (erro.code === 'deadline-exceeded') {
                            msg = "Tempo limite excedido. Verifique sua conexão.";
                        } else {
                            msg = "Erro ao cadastrar o documento: " + erro.message;
                        }
                        console.log(msg);
                        setMensagemErro(msg);
                        setErroLogin(true);
                    });
            } else {
                console.log("Campo Data não preenchidos")
                setErroData(true)
            }
        } else {
            console.log("Campos Nome não preenchidos")
            setErroNome(true)
        }
    }

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (result) => {
            convertBase64(result.assets[0].uri)
        })
    }

    const convertBase64 = async (uri) => {
        const resizedImage = await ImageResizer.createResizedImage(
            uri,
            700,
            700,
            'JPEG',
            100
        );

        const imageUri = await fetch(resizedImage.uri)
        const imagemBlob = await imageUri.blob()
        console.log(imagemBlob)

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result)
        };
        reader.readAsDataURL(imagemBlob);
    };

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
                        right={<TextInput.Icon icon="calendar" />} />
                    <Text style={[estilo.textErro, erroData ? { color: 'red' } : { color: 'transparent' }]}>Preencha a data</Text>
                    <Text style={estilo.textImage}>Imagem</Text>
                    <Image
                        source={{ uri: image }}
                        style={{ height: 70, width: 70, resizeMode: 'contain' }}
                    />
                    <Botao texts="Carregar Imagem" styleText={estilo.textButtonCad} styleButton={estilo.buttonCad} click={pickImage} />
                </View>

                <View style={estilo.viewButton}>
                    <Botao texts="Cadastrar" styleText={estilo.textButtonCad} styleButton={estilo.buttonCad} click={cadastro} />
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