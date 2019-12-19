import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function TextTodo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>New To do</Text>
      <TextInput style={styles.inputBar} />
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
  },
});

export default TextTodo;
