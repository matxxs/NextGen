import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';

export default function AddContactScreen() {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current; // Inicializa a animação da posição

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Move a tela para a posição inicial (de baixo para cima)
      duration: 300, // Duração da animação
      useNativeDriver: true, // Usa o driver nativo para melhor performance
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.title}>Novo Contato</Text>
      <TouchableOpacity
        style={styles.optionButton}
        // onPress={() => navigation.navigate('CreateContact', { type: 'Grupo' })}
      >
        <Text style={styles.optionText}>Novo Grupo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        // onPress={() => navigation.navigate('CreateContact', { type: 'Contato' })}
      >
        <Text style={styles.optionText}>Novo Contato</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.9,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
  },
});
