import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Button(sentence) {
  return (
    <View style={styles.container}>
      <Text style={styles.textSentence}>+ Add New To do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#93A2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSentence: {
    color: '#EEF4FB',
    fontWeight: 'bold',
  },
});

export default Button;
