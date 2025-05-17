import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {PaperProvider, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const navigation = useNavigation();

  function validarEmail(em) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.trim());
  }

  function validarSenha(pw) {
    return pw.trim().length >= 6;
  }

  function entrar() {
    setMensagemErro('');

    if (!validarEmail(email)) {
      setMensagemErro('Digite um email válido.');
      return;
    }

    if (!validarSenha(senha)) {
      setMensagemErro('A senha deve ter ao menos 6 caracteres.');
      return;
    }

    
    try {
      navigation.replace('Home');
    } catch (err) {
      setMensagemErro('Ocorreu um erro ao entrar. Tente novamente.');
      console.error('Erro na navegação:', err);
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Satisfying.you</Text>

        {mensagemErro !== '' && (
          <Text style={styles.errorText}>{mensagemErro}</Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={texto => {
              setEmail(texto);
              setMensagemErro('');
            }}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            value={senha}
            onChangeText={texto => {
              setSenha(texto);
              setMensagemErro('');
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    padding: 20,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputContainer: {
    width: '75%',
    marginBottom: 15,
  },
  label: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    marginBottom: 15,
  },
  button: {
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: '#37BD6D',
    width: '75%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 55,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  errorText: {
    color: '#FD7979',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 10,
  },
});

export default Login;
