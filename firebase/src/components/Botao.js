import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = (props) => {
    const texto = props.texts

    return (
        <TouchableOpacity style={[estilo.fundo, props.styleButton]} onPress={props.click}>
            <Text style={[estilo.texto, props.styleText]} >{texto}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: '#FFFFFF',
        marginVertical: 5,
        width: '100%',
    },
    texto: {
        fontSize: 30,
        color: '#3F92C5',
        textAlign: 'center'
    }
})

export default Botao