import { styles } from './styles';
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuth } from '../../../../context/AuthContext';
import { ChatItem } from "../../../../interface/ChatItem";
import { SearchConversationUse } from "../../../../services/chatService";


const ChatList = ({ navigation }: any) => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<ChatItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [intervalId, setIntervalId] = useState<any>(null); 

  const fetchContacts = async () => {
    if (!user || !user.userId) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }

    try {
      const data = await SearchConversationUse(user.userId);

      if (data && data.length > 0) {
        setContacts(data);

      } else {
        setContacts([]);
      }
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    fetchContacts();

    const id = setInterval(() => {
      fetchContacts();
    }, 30000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [user]);
  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate("ChatRoom", { chatId: item.id, chatName: item.name })}
    >
      <Ionicons name="person-circle" size={50} color="#aaa" />
      <View style={styles.chatText}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatTime}>{item.lastSend}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addNewContact}
        onPress={() => navigation.navigate("AddContact")}
      >
        <Ionicons name="add-circle" size={24} color="#007AFF" />
        <Text style={styles.addNewContactText}>Adicionar Contato</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Nenhum contato encontrado.</Text>
        }
      />
    </View>
  );
};

export default ChatList;