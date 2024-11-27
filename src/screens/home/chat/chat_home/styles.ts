import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      paddingTop: 20,
    },
    addNewContact: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    addNewContactText: {
      fontSize: 16,
      marginLeft: 8,
      color: "#007AFF",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
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
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    chatText: {
      marginLeft: 10,
      flex: 1,
    },
    chatName: {
      fontSize: 18,
      fontWeight: "bold",
    },
    chatMessage: {
      color: "#888",
    },
    chatTime: {
      color: "#aaa",
    },
    emptyMessage: {
      textAlign: "center",
      color: "#777",
      marginTop: 20,
    },
});