import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"0","name":"David DaSilva","position":"G","grade":"Jr.","height":"6'0\""},{"id":"2","number":"1","name":"Benji Moore","position":"G, F","grade":"Sr.","height":"6'3\""},{"id":"3","number":"2","name":"Ryan Ellis","position":"F","grade":"Sr.","height":"6'6\""},{"id":"4","number":"3","name":"Ben Shtolzberg","position":"G","grade":"Jr.","height":"6'4\""},{"id":"5","number":"4","name":"Luke Nelson","position":"F","grade":"So.","height":"6'5\""},{"id":"6","number":"5","name":"Mickey Cosgrove","position":"G","grade":"Jr.","height":"5'11\""},{"id":"7","number":"10","name":"Luke Rishwain","position":"G","grade":"Jr.","height":"5'11\""},{"id":"8","number":"11","name":"Omari Garrett","position":"G","grade":"So.","height":"6'0\""},{"id":"9","number":"12","name":"Daniel Margusov","position":"F","grade":"Jr.","height":"6'6\""},{"id":"10","number":"13","name":"Kendall Hailey","position":"G","grade":"Jr.","height":"6'3\""},{"id":"11","number":"15","name":"Conlan Poindexter","position":"G","grade":"Jr.","height":"6'0\""},{"id":"12","number":"20","name":"Dante Ogbu","position":"G","grade":"So.","height":"6'3\""},{"id":"13","number":"23","name":"Lucas Blum","position":"F","grade":"Jr.","height":"6'1\""},{"id":"14","number":"24","name":"Bailey Greenberg","position":"F","grade":"Sr.","height":"6'6\""}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Notre Dame High School Varsity Basketball Roster (2019-20)</Text>
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
    <Text style={styles.footer}>Head Coach: Matt Sargeant</Text>
    <Text style={styles.footer}>Assistant Coaches: Jonathan Amir</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'green',
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
