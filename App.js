import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerlimit, setLowerlimit] = useState(0);
  const [upperlimit, setUpperlimit] = useState(0);

  const calculate = (value) => {

    setAge(value)
    const ageNumber = (value)
  
  if (ageNumber) {
    const lower = (220-ageNumber) * 0.65;
    const upper = (220-ageNumber) * 0.85
    setLowerlimit(lower)
    setUpperlimit(upper)
  }}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>

      <TextInput
      style={styles.field}
      placeholder='Type your age'
      value={age}
      onChangeText={text => calculate(text)}
      keyboardType='numeric'

      />

      <Text style={styles.field}>Lower limit</Text>
      <Text style={styles.field}>{lowerlimit.toFixed(2)}</Text>

      <Text style={styles.field}>Upper limit</Text>
      <Text style={styles.field}>{upperlimit.toFixed(2)}</Text>

      <StatusBar style="auto" />
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
  field: {
    marginBottom: 10
  }
});
