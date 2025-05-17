import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const RelatorioPesquisa = () => {
  const data = [
    {
      name: "Excelente",
      value: 40,
      color: "#FFD966",
      legendFontColor: "#FFFFFF",
    },
    { name: "Bom", value: 30, color: "#6FA8DC", legendFontColor: "#FFFFFF" },
    { name: "Neutro", value: 15, color: "#93C47D", legendFontColor: "#FFFFFF" },
    { name: "Ruim", value: 10, color: "#E06666", legendFontColor: "#FFFFFF" },
    { name: "Péssimo", value: 5, color: "#76A5AF", legendFontColor: "#FFFFFF" },
  ];

  const totalVotos = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório</Text>

      <View style={styles.chartContainer}>
        <Image
          source={require("../assets/grafico.png")}
          style={styles.chartImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total de votos: {totalVotos}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
  },
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  chartImage: {
    width: Dimensions.get("window").width - 40,
    height: 220,
  },
  legendContainer: {
    marginTop: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
    fontFamily: "AveriaLibre-Regular",
  },
});

export default RelatorioPesquisa;
