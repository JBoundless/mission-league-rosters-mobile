import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Box, FlatList, Center, NativeBaseProvider, VStack, Divider } from "native-base"

export default function App() {
  const data = [{"id":"1","number":"1","name":"Reid Neumann","position":"SG","grade":"Sr.","height":"6'5\"","weight":"175"},
  {"id":"2","number":"3","name":"Jalen Cox","position":"PG","grade":"Jr.","height":"6'0\"","weight":"135"},{"id":"3","number":"4","name":"Chad Crisostomo","position":"PG","grade":"So.","height":"5'10\"","weight":"0"},{"id":"4","number":"10","name":"Jeric Calleja","position":"PG, SG","grade":"Jr.","height":"5'11\"","weight":"0"},{"id":"5","number":"12","name":"John Belardi","position":"PG","grade":"Sr.","height":"6'3\"","weight":"180"},{"id":"6","number":"13","name":"Jack Kresich","position":"SF, SG","grade":"Sr.","height":"6'7\"","weight":"200"},{"id":"7","number":"14","name":"Jackson Treiger","position":"PG, SG","grade":"Sr.","height":"6'0\"","weight":"165"},{"id":"8","number":"20","name":"Owen Pentz","position":"SG, SF","grade":"Jr.","height":"6'3\"","weight":"0"},{"id":"9","number":"21","name":"Chase Toliver","position":"SG, SF","grade":"Jr.","height":"6'3\"","weight":"0"},{"id":"10","number":"22","name":"Matthias Wagner","position":"PG, SG","grade":"Jr.","height":"6'0\"","weight":"160"},{"id":"11","number":"23","name":"Parker Jones","position":"SG, SF","grade":"Jr.","height":"6'5\"","weight":"0"},{"id":"12","number":"24","name":"Remington Rofer","position":"PF","grade":"Sr.","height":"6'8\"","weight":"190"},{"id":"13","number":"30","name":"Hugh Vandeweghe","position":"SF, PF","grade":"Fr.","height":"6'6\"","weight":"0"},{"id":"14","number":"31","name":"Chris Pieterse","position":"PF","grade":"Jr.","height":"6'4\"","weight":"0"},{"id":"15","number":"33","name":"Nick Green","position":"PF","grade":"Sr.","height":"6'5\"","weight":"225"},{"id":"16","number":"35","name":"Vincent Sampson","position":"SF, PF","grade":"Jr.","height":"6'3\"","weight":"0"},{"id":"17","number":"44","name":"Phillip Trepp","position":"PF","grade":"Jr.","height":"6'5\"","weight":"0"}]

  return (
    <NativeBaseProvider style={styles.container}>
    <Text style={styles.header}>Loyola High School Varsity Basketball Roster (2019-20)</Text>
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
    <Text style={styles.footer}>Head Coach: Damaine Powell</Text>
    <Text style={styles.footer}>Assistant Coaches: Ernie Hill, Art Mayfield, Ryan Bouziane</Text>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#000080',
    color: 'white',
    paddingTop: 30
  },
  footer: {
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#000080',
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
