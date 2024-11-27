import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/home/chat/chat_home";
import AddContact from "../screens/home/chat/add_contact/";
import CreateContact from "../screens/home/chat/create_contact/";
import CreateGroup from "../screens/home/chat/create_group/";
import ChatRoom from "../screens/home/chat/chat_room";

export type ChatStackParamList = {
  ChatList: undefined;
  AddContact: undefined;
  CreateContact: undefined;
  CreateGroup: undefined; 
  ChatRoom: { chatId: number, chatName: string };
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
          Id: route.params.chatId,
          title: route.params.chatName,
        })}
      />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;
