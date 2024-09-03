import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const calculate = () => {
    const ageNumber = parseInt(age, 10); 

    if (!isNaN(ageNumber)) {  
      const lower = (220 - ageNumber) * 0.65;
      const upper = (220 - ageNumber) * 0.85;
      setLowerLimit(lower);
      setUpperLimit(upper);
    } else {
      setLowerLimit(0);
      setUpperLimit(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>

      <TextInput
        style={styles.field}
        placeholder='Type your age'
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Button title="Calculate" onPress={calculate} ></Button>

      <Text style={styles.field}>Lower limit</Text>
      <Text style={styles.field}>{lowerLimit.toFixed(0)}</Text>

      <Text style={styles.field}>Upper limit</Text>
      <Text style={styles.field}>{upperLimit.toFixed(0)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 20,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  }
});
