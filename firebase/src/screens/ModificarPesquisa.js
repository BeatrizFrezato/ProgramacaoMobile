import { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native"
import { TextInput } from "react-native-paper"
import Botao from "../components/Botao"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import { app } from "../firebase/config";
import { initializeFirestore, doc, updateDoc, collection, query, onSnapshot, deleteDoc } from "firebase/firestore";
import ImageResizer from "react-native-image-resizer"
import { launchImageLibrary } from "react-native-image-picker";

/** vai receber por redux o id do item que deseja modificar e carregar eles na tela
 * implementado as bibliotecas de imagem caso queira alterar a imagem,
 * função de update e delete do firebase alem da conexão tbm 
 */

const ModificarPesquisa = (props) => {
    const id = useSelector((state) => state.card.id)
    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const cardsColecao = collection(db, "cards")
    const [txtNome, setNome] = useState("")
    const [txtData, setData] = useState("")
    const [txtImage, setImage] = useState("")
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const q = query(cardsColecao);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id === id) {
                    const dados = doc.data();
                    setNome(dados.Nome);
                    setData(dados.Data);
                    setImage(dados.Image);
                }
            });
        });

        return () => unsubscribe();
    }, [id]);

    const goToDrawerUpdate = () => {
        update()
        props.navigation.navigate("Drawer")
    }

    const goToDrawerDelete = () => {
        delet()
        props.navigation.navigate("Drawer")
    }

    const update = () => {
        const cardRef = doc(db, "cards", id);
        updateDoc(cardRef, {
            Nome: txtNome,
            Data: txtData,
            Image: txtImage
        })
    }

    const delet = () => {
        deleteDoc(doc(db, "cards", id))
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

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result)
        };
        reader.readAsDataURL(imagemBlob);
    };

    return (
        <View style={estilo.viewPrincipal}>
            <View style={estilo.viewIntup}>
                <Text style={estilo.textNome}>Nome</Text>
                <TextInput style={{ height: 33 }}
                    placeholder="Digite o nome"
                    value={txtNome}
                    onChangeText={txtNome => setNome(txtNome)} />

                <Text style={estilo.textData}>Data</Text>
                <TextInput style={{ height: 33 }}
                    placeholder="Digite a data"
                    value={txtData}
                    onChangeText={txtData => setData(txtData)}
                    right={<TextInput.Icon icon="calendar" />} />

                <Text style={estilo.textImage}>Imagem</Text>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        source={{ uri: txtImage }}
                        style={{ height: 65, width: '100%', resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>

            <View style={estilo.viewButton}>
                <Botao texts="Salvar" styleText={estilo.textButtonCad} styleButton={estilo.buttonCad} click={goToDrawerUpdate} />
                <TouchableOpacity style={estilo.buttonDel} onPress={() => setVisible(true)}>
                    <Icon name="delete" size={35} color="#FFFFFF" />
                    <Text style={estilo.textButtonDel}>Apagar</Text>
                </TouchableOpacity>
            </View>


            <Modal
                animationType="none"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={estilo.viewPop}>
                    <View style={estilo.viewTitle}>
                        <Text style={estilo.textPop}>Certeza que desaja Deletar a esquisa</Text>
                        <View style={estilo.viewButtonPop}>
                            <Botao texts="Sim" styleButton={estilo.buttonYes} styleText={estilo.textButton} click={() => { setVisible(false), goToDrawerDelete() }} />
                            <Botao texts="Cancelar" styleButton={estilo.buttonNo} styleText={estilo.textButton} click={() => setVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const estilo = StyleSheet.create({
    textNome: {
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'AveriaLibre-Regular',
    },
    textData: {
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'AveriaLibre-Regular',
    },
    textImage: {
        color: '#FFFFFF',
        fontSize: 22,
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

    buttonDel: {
        backgroundColor: '#372775',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonDel: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25,
    },


    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        justifyContent: 'center',
    },
    viewIntup: {
        flex: 0.70,
        //backgroundColor: 'red'
    },
    viewButton: {
        //backgroundColor: 'green',
        flex: 0.30,
        flexDirection: 'column',
        alignItems: 'center'
    },


    viewPop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    viewTitle: {
        width: 330,
        padding: 20,
        backgroundColor: '#372775',
        borderRadius: 10,
        alignItems: 'center',
    },
    viewButtonPop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },

    textPop: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 20
    },

    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
    },
    buttonYes: {
        width: '40%',
        height: '40',
        backgroundColor: '#FF8383',
        justifyContent: 'center'
    },
    buttonNo: {
        width: '40%',
        height: '40',
        backgroundColor: '#3F92C5',
        justifyContent: 'center'
    }
})

export default ModificarPesquisa