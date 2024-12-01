import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginRight: 10,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: "75%",
    borderRadius: 8,
    padding: 10,
  },
  currentUserMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6", // Verde claro para mensagens enviadas pelo usuário logado
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E8E8E8", // Cinza claro para mensagens recebidas
  },
  messageText: {
    fontSize: 16,
  },
});