import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { FlatList } from 'react-native';

export default function App() {
  const [history, setHistory] =useState([]);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  
  const plusButton = () => {
    let result = parseFloat(number1) + parseFloat(number2);
    setResult(result);
    setHistory([...history, `${number1} + ${number2} = ${result}`]);
  }
  const minusButton = () => {
    let result = parseFloat(number1) - parseFloat(number2);
    setResult(result);
    setHistory([...history, `${number1} - ${number2} = ${result}`]);
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>

      </View>
      <View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number1 => setNumber1(number1)}
            value={number1}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
          />
        
          <View>
            <Button onPress={plusButton} title='+' />
            <Button onPress={minusButton} title='-' />
          </View>
          
        </View>
      
      </View>
      <View>
        <Text>History</Text>
        <FlatList
          data={history}
          renderItem={({item}) => {
            return <Text>{item}</Text>;
            }
          }
        />
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});