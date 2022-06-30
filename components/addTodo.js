import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  // pressable component
  const App = () => 
  {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
      textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
      textLog = 'onPress';
    }
  }
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add New Task todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='coral' onPress={pressHandler} title=' Add todo ' />
</View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});