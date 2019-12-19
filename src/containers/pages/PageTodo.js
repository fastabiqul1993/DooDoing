import React from 'react';
import {View, StyleSheet} from 'react-native';

import Todos from '../organisms/Todos';

function PageTodo() {
  return (
    <View style={styles.container}>
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#465A7C',
  },
});

export default PageTodo;
