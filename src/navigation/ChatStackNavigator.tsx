import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/home/chat/screens/chatList";
import AddContact from "../screens/home/chat/screens/addContact";
import ChatRoom from "../screens/home/chat/screens/ChatRoom";

// Tipos das rotas para o Stack Navigator
export type ChatStackParamList = {
  ChatList: undefined;
  AddContact: undefined;
  ChatRoom: { chatName: string };
};

const Stack = createStackNavigator<ChatStackParamList>();

const ChatStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{ title: "Conversas", headerShown: false }}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{ title: "Adicionar Contato" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({
          title: route.params.chatName, // Define o título dinamicamente
        })}
      />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;
