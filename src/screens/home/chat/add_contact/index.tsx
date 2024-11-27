import { styles } from './styles';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';

export default function AddContactScreen({ navigation }: any) {
  const slideAnim = React.useRef(new Animated.Value(Dimensions.get('window').height)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.title}>Adicionar Contato</Text>
      
      {/* Botão para criar novo contato */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('CreateContact')}
      >
        <Text style={styles.optionText}>Novo Contato</Text>
      </TouchableOpacity>

      {/* Botão para criar novo grupo */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('CreateGroup')}  
      >
        <Text style={styles.optionText}>Novo Grupo</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
