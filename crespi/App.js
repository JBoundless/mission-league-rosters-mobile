import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"3","name":"Roman Stewart","position":"","grade":"","height":"","weight":"0"},{"id":"2","number":"11","name":"Alex Leinbach","position":"","grade":"","height":"","weight":"0"},{"id":"3","number":"12","name":"Mason Dorsey","position":"PG","grade":"","height":"","weight":"0"},{"id":"4","number":"15","name":"Casey Block","position":"","grade":"","height":"","weight":"0"},{"id":"5","number":"23","name":"Karson Peffer","position":"","grade":"Jr.","height":"6'5\"","weight":"205"},{"id":"6","number":"23","name":"Marcus Covaleski","position":"PG","grade":"","height":"","weight":"0"},{"id":"7","number":"24","name":"Alex Munzon","position":"","grade":"","height":"","weight":"0"},{"id":"8","number":"35","name":"Peyton White","position":"","grade":"8th","height":"","weight":"0"},{"id":"9","number":"41","name":"Josh Montiano","position":"PG, SG","grade":"","height":"","weight":"0"},{"id":"10","number":"51","name":"Dimitri Perris","position":"","grade":"","height":"","weight":"0"},{"id":"11","number":"55","name":"Alex Pascu","position":"","grade":"","height":"","weight":"0"},{"id":"12","number":"55","name":"Jake Eddy-watkins","position":"","grade":"","height":"","weight":"0"},{"id":"13","number":"","name":"Shaun Kowlessar","position":"PG","grade":"","height":"5'9\"","weight":"120"}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Crespi High School Varsity Basketball Roster (2020-21)</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <VStack space={4} divider={<Divider />}>
        <Box border={1} borderRadius='md' px={4} pt={4} pb={4} backgroundColor='#d3d3d3'>
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.info}>{item.grade}</Text>
        <Text style={styles.info}>{item.position}, #{item.number}</Text>
        </Box>
        </VStack>
      )}
      keyExtractor={(item) => item.id}
    />
    <Text style={styles.footer}>Head Coach: Andrew Moore</Text>
    <Text style={styles.footer}>Assistant Coaches: N/A</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#5C4033',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#5C4033',
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  name: {
    fontWeight: '700'
  },
  info: {
    fontWeight: '600'
  },
  span: {
    fontWeight: '600'
  }
});
