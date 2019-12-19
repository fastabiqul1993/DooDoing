import React from 'react';
import {View, StyleSheet} from 'react-native';

import TodoStatus from '../atoms/TodoStatus';
import TodoText from '../atoms/TodoText';

function Todo() {
  return (
    <View style={styles.container}>
      <TodoStatus />
      <TodoText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 75,
    width: '100%',
    flexDirection: 'row',
  },
});

export default Todo;
