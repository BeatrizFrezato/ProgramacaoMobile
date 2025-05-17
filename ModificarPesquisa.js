import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native"
import { PaperProvider, TextInput, MD3LightTheme as DefaultTheme, Button } from "react-native-paper"
import Botao from "../components/Botao"
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModificarPesquisa = (props) => {
    const [txtNome, setNome] = useState("")
    const [txtData, setData] = useState("")
    const [txtImage, setImage] = useState("")
    const [visible, setVisible] = useState(false);

    const goToDrawer = () => {
        props.navigation.navigate("Drawer")
    }

    return (
        <PaperProvider>
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
                        right={<TextInput.Icon icon="calendar" />}/>

                    <Text style={estilo.textImage}>Imagem</Text>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={{ height: 65, width: '100%', resizeMode: 'contain' }}
                    />
                </View>

                <View style={estilo.viewButton}>
                    <Botao texts="Salvar" styleText={estilo.textButtonCad} styleButton={estilo.buttonCad} click={goToDrawer}/>
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
                                <Botao texts="Sim" styleButton={estilo.buttonYes} styleText={estilo.textButton} click={() => {setVisible(false), goToDrawer()}} />
                                <Botao texts="Cancelar" styleButton={estilo.buttonNo} styleText={estilo.textButton} click={() => setVisible(false)} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </PaperProvider>
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