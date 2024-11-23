import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Telas
import ChatStackNavigator from "../navigation/ChatStackNavigator";
import CallsScreen from "../screens/home/calls";
import TranslatorScreen from "../screens/home/translator";
// import SettingsScreen from "../screens/home/settings"; // Opcional: descomente se for usar

// Tipos das rotas para tipagem de navegação
export type TabParamList = Partial<{
  Chat: undefined;
  Calls: undefined;
  Translator: undefined;
  Settings: undefined;
}>;

const Tab = createBottomTabNavigator<TabParamList>();

const ROUTE_ICONS: Record<keyof TabParamList, string> = {
  Chat: "chatbubbles",
  Calls: "call",
  Translator: "language",
  Settings: "settings",
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = ROUTE_ICONS[route.name] || "help-circle";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#518C27",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f8f8f8" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chat" component={ChatStackNavigator} options={{ title: "Chat" }} />
      <Tab.Screen name="Calls" component={CallsScreen} options={{ title: "Chamadas" }} />
      <Tab.Screen name="Translator" component={TranslatorScreen} options={{ title: "Tradutor" }} />
      {/* Descomente abaixo para usar a tela de configurações */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Configurações" }} /> */}
    </Tab.Navigator>
  );
}
