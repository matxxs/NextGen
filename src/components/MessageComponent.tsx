import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageComponentProps {
  message: string;
  success: boolean;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message, success }) => {
  return (
    <View style={[styles.messageBox, success ? styles.successBox : styles.errorBox]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },
  successBox: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth: 1,
  },
  errorBox: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
  },
  messageText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MessageComponent;
