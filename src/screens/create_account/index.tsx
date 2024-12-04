import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import MessageComponent from '../../components/MessageComponent';

const CreateAccount = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState<{
    message: string;
    isSuccess: boolean;
  } | null>(null);

  const handleCreateAccount = async () => {
    try {
      const response = await fetch(
        'http://26.51.47.37/api/v1/authentication/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, fullName, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro no servidor: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.isSuccess) {
        setApiResponse({ message: data.message, isSuccess: true });
        Alert.alert('Conta criada com sucesso!', 'Você pode fazer login agora.');
        navigation.replace('Login');
      } else {
        setApiResponse({ message: data.message, isSuccess: false });
        Alert.alert('Erro na criação de conta', data.message || 'Verifique os dados fornecidos.');
      }
    } catch (error) {
      setApiResponse({ message: 'Erro ao conectar com o servidor.', isSuccess: false });
      Alert.alert('Erro', 'Não foi possível conectar ao servidor. Tente novamente mais tarde.');
    }
  };

  const handleLogin = async () => {navigation.replace('Login');}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      {apiResponse && (
        <MessageComponent
          message={apiResponse.message}
          success={apiResponse.isSuccess}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 

export default CreateAccount;
