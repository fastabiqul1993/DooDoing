import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import Title from '../../components/molecules/Title';
import Todo from '../../components/molecules/Todo';
import TextTodo from '../../components/molecules/TextTodo';
import ButtonAdd from '../../components/atoms/ButtonAdd';

export default class Todos extends Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Title />
        </View>
        <View style={styles.body}>
          <Todo />
        </View>
        <View style={styles.footer}>
          <TextTodo />
          <ButtonAdd />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: 125,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    maxHeight: 400,
    backgroundColor: '#405376',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    maxHeight: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // justifyContent: 'center',
  },
});
