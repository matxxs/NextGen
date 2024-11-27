import { styles } from './styles';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChatStackParamList } from "../../../../navigation/ChatStackNavigator";
import { useAuth } from "../../../../context/AuthContext";
import { SendMessage } from "../../../../services/chatService";
import { GetMessages } from "../../../../services/chatService";

type ChatRoomProps = StackScreenProps<ChatStackParamList, "ChatRoom">;

const ChatRoom: React.FC<ChatRoomProps> = ({ route }) => {
  const { user } = useAuth();
  const { chatId, chatName } = route.params;
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!chatId) {
        Alert.alert("Erro", "ID do chat não encontrado.");
        return;
      }

      try {
        const data = await GetMessages(chatId);
        setMessages(data);

      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
        Alert.alert("Erro", "Não foi possível carregar as mensagens.");
      }
    };

    fetchMessages();

  }, [chatId]);

  const sendMessage = async () => {
    if (!message.trim()) {
      Alert.alert("Erro", "A mensagem não pode estar vazia.");
      return;
    }

    if (!user || !user.userId) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }

    try {
      const response = await SendMessage(chatId, user.userId, message.trim());
      Alert.alert("Sucesso", "Mensagem enviada com sucesso!");
      console.log(`Resposta do servidor:`, response);

      setMessage("");

      const data = await GetMessages(chatId);
      setMessages(data);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      Alert.alert(
        "Erro",
        "Não foi possível enviar a mensagem. Tente novamente mais tarde."
      );
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        {/* Exibindo a lista de mensagens */}
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          inverted // Exibe as mensagens do final para o início
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatRoom;
