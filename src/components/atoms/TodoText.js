import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodoText(props) {
  let sentence = props.sentence;
  return (
    <View style={styles.container}>
      <Text style={styles.textSentence}>{sentence}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    width: '80%',
    justifyContent: 'center',
  },
  textSentence: {fontSize: 14, color: '#FFF'},
});

export default TodoText;
