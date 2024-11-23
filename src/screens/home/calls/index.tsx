import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', name: 'Luiza', status: 'Visto há 1h', calls: 3 },
  { id: '2', name: 'Douglas', status: 'Visto ontem', calls: 1 },
];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.callItem}>
            <Text style={styles.callName}>{item.name}</Text>
            <Text style={styles.callStatus}>{item.status}</Text>
            <Text style={styles.callCount}>{item.calls}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  callItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  callName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callStatus: {
    color: '#888',
  },
  callCount: {
    color: '#aaa',
  },
});
