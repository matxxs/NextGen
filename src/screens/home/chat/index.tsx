import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ChatItem {
  id: string;
  name: string;
  message: string;
  time: string;
}

const DATA: ChatItem[] = [
  { id: '1', name: 'Luiza', message: 'Vamos sair hoje', time: 'Há 1 h' },
  { id: '2', name: 'Douglas', message: 'Vamos sair hoje', time: 'Há 3 h' },
];

const ChatScreen = () => {
  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <View style={styles.chatItem}>
      <Ionicons name="person-circle" size={50} color="#aaa" />
      <View style={styles.chatText}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addNewContact}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Ionicons name="add-circle" size={24} color="#007AFF" />
        <Text style={styles.addNewContactText}>Adicionar Contato</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#aaa" />
        <TextInput style={styles.searchInput} placeholder="Pesquisar" />
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  addNewContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addNewContactText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#007AFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  chatText: {
    marginLeft: 10,
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#888',
  },
  chatTime: {
    color: '#aaa',
  },
});

export default ChatScreen;