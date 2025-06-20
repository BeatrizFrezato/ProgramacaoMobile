import React from "react";
import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { initializeFirestore, collection, query, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/config";
import PieChart from "react-native-pie-chart";

/*
  implementação de grafico de pizza
  conexão com o firebase
  nessa classe conectei o firebase e peguei os dados lá para gerar o grafico
  entao quando os dados la forem atualizados aqui tbm será
*/

const RelatorioPesquisa = () => {
  const [excelente, setExcelente] = useState();
  const [bom, setBom] = useState();
  const [neutro, setNeutro] = useState();
  const [ruim, setRuim] = useState();
  const [pessimo, setPessimo] = useState();
  const series = [
    { value: excelente, color: "#5FCDA4" },
    { value: bom, color: "#6994FE" },
    { value: neutro, color: "#F1CE7E" },
    { value: ruim, color: "#B0B5CA" },
    { value: pessimo, color: "#EA7288" }
  ];
  const db = initializeFirestore(app, { experimentalForceLongPolling: true });
  const relatorioColeção = collection(db, "relatorio")
  const [listaRelarotio, setListaRelatorio] = useState();

  useEffect(() => {
    const q = query(relatorioColeção)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const relatorio = []
      snapshot.forEach((doc) => {
        relatorio.push({
          id: doc.id,
          ...doc.data()
        })
      });

      setListaRelatorio(relatorio)

      if (relatorio.length > 0) {
        const item = relatorio[0]
        setExcelente(item.Excelente)
        setBom(item.Bom)
        setNeutro(item.Neutro)
        setRuim(item.Ruim)
        setPessimo(item.Pessimo)
      }
    })
  }, [])

  const itemCard = ({ item }) => {
    return (
      <View>
        <Text style={styles.textButton1}>Excelente: {item.Excelente}</Text>
        <Text style={styles.textButton2}>Bom: {item.Bom}</Text>
        <Text style={styles.textButton3}>Neutro: {item.Neutro}</Text>
        <Text style={styles.textButton4}>Ruim: {item.Ruim}</Text>
        <Text style={styles.textButton5}>Péssimo: {item.Pessimo}</Text>
      </View>
    )
  }

  return (
    <View style={styles.viewPrincipal}>
      <View>
        <PieChart
          widthAndHeight={300}
          series={series}
        />
      </View>
      <View>
        <FlatList
          data={listaRelarotio}
          renderItem={itemCard}
          keyExtractor={relatorio => relatorio.id}
          contentContainerStyle={{ justifyContent: 'center', flexGrow: 1, paddingLeft: 80 }}
        />
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
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton2: {
    color: "#6994FE",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton3: {
    color: "#F1CE7E",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton4: {
    color: "#B0B5CA",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
  textButton5: {
    color: "#EA7288",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 28,
    paddingTop: 15,
  },
});

export default RelatorioPesquisa;
