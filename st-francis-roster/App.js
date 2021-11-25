import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"3","name":"Brendan Casal","position":"G","grade":"Jr.","height":"5'10\"","weight":"0"},{"id":"2","number":"4","name":"Jake Goldberg","position":"G","grade":"Jr.","height":"6'4\"","weight":"0"},{"id":"3","number":"5","name":"Buckley Dejardin","position":"W","grade":"Jr.","height":"6'5\"","weight":"0"},{"id":"4","number":"11","name":"Devon Domingo","position":"G","grade":"Jr.","height":"6'0\"","weight":"155"},{"id":"5","number":"12","name":"Ethan Childs","position":"G","grade":"So.","height":"6'4\"","weight":"0"},{"id":"6","number":"12","name":"Alec Slim","position":"SG","grade":"Sr.","height":"6'0\"","weight":"0"},{"id":"7","number":"13","name":"Myron Longhurst","position":"SF","grade":"Jr.","height":"6'3\"","weight":"0"},{"id":"8","number":"15","name":"Evan Jernegan","position":"F","grade":"Sr.","height":"6'2\"","weight":"0"},{"id":"9","number":"20","name":"Francis Ferguson","position":"F","grade":"Jr.","height":"6'4\"","weight":"200"},{"id":"10","number":"20","name":"Ben Ferguson","position":"SF","grade":"Jr.","height":"","weight":"0"},{"id":"11","number":"21","name":"Luke Mcgrath","position":"W","grade":"So.","height":"6'4\"","weight":"0"},{"id":"12","number":"22","name":"Brandin Dantzler","position":"F","grade":"So.","height":"6'3\"","weight":"0"},{"id":"13","number":"23","name":"Xavier Thompson","position":"G","grade":"Jr.","height":"6'0\"","weight":"0"},{"id":"14","number":"32","name":"George Tupy","position":"F","grade":"So.","height":"6'5\"","weight":"0"},{"id":"15","number":"34","name":"Kennedy Mitchell-egbo","position":"F","grade":"So.","height":"6'5\"","weight":"0"},{"id":"16","number":"35","name":"Ryan Adler","position":"G","grade":"So.","height":"6'3\"","weight":"165"},{"id":"17","number":"42","name":"Jackson Mosley","position":"G","grade":"So.","height":"5'10\"","weight":"0"},{"id":"18","number":"","name":"Ryan Adler","position":"","grade":"Jr.","height":"","weight":"0"}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>St. Francis High School Varisty Basketball Roster (2019-20)</Text>
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
    <Text style={styles.footer}>Head Coach: Todd Wolfson</Text>
    <Text style={styles.footer}>Assistant Coaches: Armando Avelar, Chris Acker, Jason Weatherall, Jeremy Major, Steve Eshleman</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#C19A6B',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#C19A6B',
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
