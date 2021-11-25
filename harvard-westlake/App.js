import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"0","name":"Trent Perry","position":"G, PG","grade":"Fr.","height":"6'2\""},{"id":"2","number":"1","name":"Cubin Molzen","position":"PG, G","grade":"Jr.","height":"5'8\""},{"id":"3","number":"2","name":"Robert Hinton","position":"W, G","grade":"Fr.","height":"6'4\""},{"id":"4","number":"3","name":"Dahnte Russell","position":"PG, PG","grade":"Jr.","height":"5'9\""},{"id":"5","number":"4","name":"Liam Campbell","position":"SG, W","grade":"Fr.","height":"6'4\""},{"id":"6","number":"10","name":"Trumann Gettings","position":"F","grade":"Sr.","height":"6'8\""},{"id":"7","number":"11","name":"Brady Dunlap","position":"SG, W","grade":"So.","height":"6'7\""},{"id":"8","number":"12","name":"Jacob Huggins","position":"F, F","grade":"So.","height":"6'8\""},{"id":"9","number":"13","name":"Christian Horry","position":"G","grade":"Fr.","height":"6'2\"","weight":"80"},{"id":"10","number":"21","name":"Adam Hinton","position":"SG, G","grade":"Sr.","height":"6'4\""},{"id":"11","number":"22","name":"Landon Lewis","position":"F, W","grade":"Jr.","height":"6'7\""},{"id":"12","number":"24","name":"Cameron Thrower","position":"PG, G","grade":"Jr.","height":"6'4\""},{"id":"13","number":"30","name":"Derek Schneider","position":"F, F","grade":"Jr.","height":"6'4\""}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Harvard-Westlake High School Varsity Basketball Roster (2019-20)</Text>
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
    <Text style={styles.footer}>Head Coach: David Rebibo</Text>
    <Text style={styles.footer}>Assistant Coaches: N/A</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'red',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'red'
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
