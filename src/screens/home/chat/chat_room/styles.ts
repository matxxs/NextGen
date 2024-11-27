import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  chatContainer: {
    flex: 1,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  messageContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 14,
    color: "#333",
  },
});