import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Coleta = (props) => {
    const goToAgradecimento = () => {
        props.navigation.navigate("AgradecimentoParticipacao")
    }

    return (
        <View style = {estilo.viewPrincipal}>
            <TouchableOpacity style={estilo.button} onPress={goToAgradecimento}>
                <Icon name="sentiment-very-dissatisfied" size={55} color="#FF0000" />
                <Text style={estilo.textButton1}>Péssimo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToAgradecimento}>
                <Icon name="sentiment-dissatisfied" size={55} color="#FF6A00" />
                <Text style={estilo.textButton2}>Ruim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToAgradecimento}>
                <Icon name="sentiment-neutral" size={55} color="#FFD800" />
                <Text style={estilo.textButton3}>Neutro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToAgradecimento}>
                <Icon name="sentiment-satisfied-alt" size={55} color="#B6FF00" />
                <Text style={estilo.textButton4}>Bom</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToAgradecimento}>
                <Icon name="sentiment-very-satisfied" size={55} color="#00FF21" />
                <Text style={estilo.textButton5}>Excelente</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create ({
    button: {
        backgroundColor: "#372775",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        width: 140
    },
    textButton1: {
        color: "#FF0000",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
    },
    textButton2: {
        color: "#FF6A00",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
    },
    textButton3: {
        color: "#FFD800",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
    },
    textButton4: {
        color: "#B6FF00",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
    },
    textButton5: {
        color: "#00FF21",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 28,
    },
    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",      
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Coleta