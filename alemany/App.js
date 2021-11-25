import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"2","name":"Mikah Ballew","position":"G, F","grade":"So.","height":"6'3\"","weight":"185"},{"id":"2","number":"3","name":"Jayce McDonald","position":"PG, SG","grade":"So.","height":"5'8\"","weight":"145"},{"id":"3","number":"4","name":"Ricky Rivas","position":"G","grade":"Sr.","height":"6'1\"","weight":"160"},{"id":"4","number":"5","name":"Jayden Harper","position":"G, F","grade":"Fr.","height":"6'7\"","weight":"190"},{"id":"5","number":"12","name":"Isaiah Ortega","position":"G","grade":"Jr.","height":"6'1\"","weight":"160"},{"id":"6","number":"13","name":"Nico Ponce","position":"PG, SG","grade":"So.","height":"5'8\"","weight":"165"},{"id":"7","number":"14","name":"Jalen Mims","position":"PG","grade":"Jr.","height":"5'8\"","weight":"145"},{"id":"8","number":"15","name":"Amari Robinson","position":"G","grade":"Jr.","height":"6'0\"","weight":"155"},{"id":"9","number":"23","name":"Naseef Lubowa","position":"G","grade":"Fr.","height":"6'3\"","weight":"165"},{"id":"10","number":"25","name":"Gabe Espinosa","position":"G","grade":"So.","height":"5'10\"","weight":"155"},{"id":"11","number":"35","name":"Tony Acevedo","position":"C","grade":"Jr.","height":"6'7\"","weight":"185"}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Alemany High School Varsity Basketball Roster (2020-21)</Text>
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
    <Text style={styles.footer}>Head Coach: Tray Meeks</Text>
    <Text style={styles.footer}>Assistant Coaches: N/A</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'red',
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
