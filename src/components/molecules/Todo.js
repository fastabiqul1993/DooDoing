import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import TodoStatus from '../atoms/TodoStatus';
import TodoText from '../atoms/TodoText';

function Todo(props) {
  return (
    <View style={styles.container}>
      <TodoStatus status={props.item.status} />
      <TodoText sentence={props.item.sentence} />
    </View>
  );
}

// const screenWidth = Math.round(Dimensions.get('window').width);
// const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    width: '100%',
    flexDirection: 'row',
  },
});

export default Todo;
