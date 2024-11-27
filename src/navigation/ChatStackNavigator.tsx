import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/home/chat/screens/chatList";
import AddContact from "../screens/home/chat/screens/addContact";
import CreateContact from "../screens/home/chat/screens/createContact";
import CreateGroup from "../screens/home/chat/screens/createGroup";
import ChatRoom from "../screens/home/chat/screens/ChatRoom";

export type ChatStackParamList = {
  ChatList: undefined;
  AddContact: undefined;
  CreateContact: undefined;
  CreateGroup: undefined; 
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
        name="CreateContact"
        component={CreateContact}
        options={{ title: "Criar Contato" }}
      />
      <Stack.Screen
        name="CreateGroup"  
        component={CreateGroup}
        options={{ title: "Criar Grupo" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({
          title: route.params.chatName,
        })}
      />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;
