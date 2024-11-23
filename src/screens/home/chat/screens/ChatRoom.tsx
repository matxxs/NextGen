import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChatStackParamList } from "../../../../navigation/ChatStackNavigator";

type ChatRoomProps = StackScreenProps<ChatStackParamList, "ChatRoom">;

const ChatRoom: React.FC<ChatRoomProps> = ({ route }) => {
  const { chatName } = route.params;
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    console.log(`Mensagem enviada: ${message}`);
    setMessage(""); // Limpa o campo após enviar
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Text style={styles.text}>Conversa com o chat ID: {chatName}</Text>
        {/* Aqui poderia exibir mensagens existentes */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
});

export default ChatRoom;
