import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecuperacaoSenha = (props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (text) => { 
    setEmail(text); 
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(text).toLowerCase())) {
      setErrorMessage("E-mail parece ser inválido");
    } else {
      setErrorMessage("");
    }
  };

  const recuperarSenha = () => {
    // Aqui vai a lógica para recuperar senha
    if (email.trim() === '') {
      setErrorMessage("Por favor, informe um e-mail");
      return;
    }
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorMessage("E-mail parece ser inválido");
      return;
    }
    
    // Implementar lógica para envio de recuperação
    alert("E-mail de recuperação enviado para " + email);
    props.navigation.goBack();
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text style={styles.headerText}>Recuperação de senha</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          style={styles.textInput}
          placeholder="exemplo@hotmail.com"
          placeholderTextColor="#3F92C5"
          keyboardType="email-address"
          onChangeText={handleEmail}
          value={email}
        />

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Pressable
          onPress={recuperarSenha}
          style={styles.buttonRecuperar}>
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#372775',
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  
  backButton: {
    marginRight: 10,
  },
  
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },

  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    width: 300,
    fontFamily: 'AveriaLibre-Bold',
    marginTop: 5,
  },

  textInput: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 300,
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    marginTop: 2,
    paddingHorizontal: 10,
  },

  buttonRecuperar: {
    width: 300,
    height: 40,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },

  errorMessage: {
    fontSize: 14,
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    alignSelf: 'flex-start',
    paddingLeft: 50,
    marginTop: 5,
  },
});

export default RecuperacaoSenha;