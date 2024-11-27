import { styles } from './styles';
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