import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ButtonAdd() {
  return (
    <View style={styles.container}>
      <Text style={styles.textAdd}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: '#93A2FF',
    marginTop: 28,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAdd: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
  },
});

export default ButtonAdd;
