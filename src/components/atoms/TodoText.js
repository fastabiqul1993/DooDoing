import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodoText() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSentence}>Do nothing to do!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    width: '100%',
    justifyContent: 'center',
  },
  textSentence: {fontSize: 18, color: '#FFF'},
});

export default TodoText;
