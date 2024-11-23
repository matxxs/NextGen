import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function TranslatorScreen() {
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false); // Estado para verificar se o TextInput está focado

  return (
    <View style={styles.container}>
     <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={inputText}
        onChangeText={setInputText}
        textAlignVertical="top" 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} 
        placeholder="Insira o texto..."
        placeholderTextColor="#595959"
        multiline
        numberOfLines={4} 
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button_clean} onPress={() => setInputText('')}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_translator} onPress={() => alert('Tradução...')}>
          <Text style={styles.buttonText}>Traduzir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 494,
    backgroundColor: '#F2F2F2',
    color: '#595959',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    paddingTop: 20,
  },
  inputFocused: {
    borderColor: '#F2F2F2', 
    color: '#000000'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  button_clean: {
    width: 69,
    backgroundColor: '#F23A29',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  button_translator: {
    width: 135,
    backgroundColor: '#F29F05',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
