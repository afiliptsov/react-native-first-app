import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}gi>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress ={()=> setOutputText('The text changed!')} />
      <Button>Next Page Link</Button>
      <TextInput placeholder="Case Number" />
      <Modal>
      <FlatList></FlatList>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
