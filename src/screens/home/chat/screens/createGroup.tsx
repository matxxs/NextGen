import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreateGroupScreen({ navigation }: any) {
  const [groupName, setGroupName] = useState('');
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    setContacts([...contacts, { id: contacts.length.toString(), name: `Contato ${contacts.length + 1}` }]);
  };

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.title}>Criar Novo Grupo</Text>
      
      {/* Campo de nome do grupo */}
      <TextInput
        style={styles.input}
        placeholder="Nome do grupo"
        value={groupName}
        onChangeText={setGroupName}
      />

      {/* Lista de contatos (ainda vazia) */}
      <Text style={styles.subtitle}>Contatos</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noContacts}>Nenhum contato adicionado</Text>}
      />

      {/* Botão para adicionar um contato à lista */}
      <TouchableOpacity style={styles.addButton} onPress={addContact}>
        <Ionicons name="add-circle" size={24} color="#007AFF" />
        <Text style={styles.addButtonText}>Adicionar Contato</Text>
      </TouchableOpacity>

      {/* Botão para salvar o grupo */}
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Grupo salvo')}>
        <Text style={styles.saveButtonText}>Salvar Grupo</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E3F2FD', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1', 
    marginBottom: 25,
    textAlign: 'center', 
  },
  input: {
    height: 50,
    borderColor: '#BBDEFB', 
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF', 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, 
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1565C0', 
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#424242',
  },
  noContacts: {
    color: '#757575',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E3F2FD', 
    borderRadius: 10,
    borderColor: '#64B5F6',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#1565C0',
  },
  saveButton: {
    padding: 15,
    backgroundColor: '#1E88E5', 
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

