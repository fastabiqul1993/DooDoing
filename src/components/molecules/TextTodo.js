import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function TextTodo(props) {
  let {inputTodo, setState} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>New To do</Text>
      <TextInput
        maxLength={20}
        placeholder="Insert here!"
        style={styles.inputBar}
        onChangeText={value => setState({inputTodo: value})}
        value={inputTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#E5E5E5',
  },
  inputBar: {
    height: 40,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
  },
});

export default TextTodo;
