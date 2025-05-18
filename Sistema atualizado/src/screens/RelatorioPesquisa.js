import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const RelatorioPesquisa = () => {
  return (
    <View style={styles.viewPrincipal}>
      <Image
          source={require("../assets/image/pizza.png")}
          style={{ height: "100%", width: '70%', resizeMode: 'contain' }}
        />
      <View>        
        <Text style={styles.textButton1}>Excelente</Text>
        <Text style={styles.textButton2}>Bom</Text>
        <Text style={styles.textButton3}>Neutro</Text>
        <Text style={styles.textButton4}>Ruim</Text>
        <Text style={styles.textButton5}>Péssimo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: "#372775",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton1: {
    color: "#5FCDA4",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton2: {
    color: "#6994FE",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton3: {
    color: "#F1CE7E",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton4: {
    color: "#B0B5CA",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton5: {
    color: "#EA7288",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
});

export default RelatorioPesquisa;
