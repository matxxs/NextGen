import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height * 0.9,
      padding: 20,
      backgroundColor: '#E3F2FD',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#0D47A1',
      marginBottom: 25,
      textAlign: 'center',
    },
    optionButton: {
      padding: 15,
      backgroundColor: '#F5F5F5', 
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    optionText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#1565C0',
      textAlign: 'center',
    },
  });