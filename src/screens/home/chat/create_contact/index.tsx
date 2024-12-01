import { styles } from './styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MessageComponent from '../../../../components/MessageComponent';
import { useAuth } from '../../../../context/AuthContext';
import { createPrivateChat } from '../../../../services/chatService';



export default function CreateContactScreen() {
  const { user, setUser } = useAuth();
  const [apiResponse, setApiResponse] = useState<{
    message: string;
    isSuccess: boolean;
  } | null>(null);
  
  const [otherUsername, setName] = useState('');
  const [customChatName, setDisplayName] = useState('');

  const fetchCreateChat = async () => {
    if (!otherUsername || !customChatName) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!user || !user.userId) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }

    try {
      const data = await createPrivateChat(user.username, otherUsername, customChatName); 

      if (data.isSuccess) {
        setApiResponse({ message: data.message, isSuccess: true });
       
        setName('');
        setDisplayName('');
      } else {
        setApiResponse({ message: data.message, isSuccess: false });

      }
    } catch (error) {
      setApiResponse({ message: 'Erro ao conectar com o servidor.', isSuccess: false });
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={otherUsername}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de Exibição"
        value={customChatName}
        onChangeText={setDisplayName}
      />

      <TouchableOpacity style={styles.saveButton} onPress={fetchCreateChat}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>

      {apiResponse && (
        <MessageComponent
          message={apiResponse.message}
          success={apiResponse.isSuccess}
        />
      )}

    </View>
  );
}