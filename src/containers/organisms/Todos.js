import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Title from '../../components/molecules/Title';
import Todo from '../../components/molecules/Todo';
import ButtonAdd from '../../components/atoms/ButtonAdd';

export default class Todos extends Component {
  state = {
    inputTodo: '',
    todos: [],
  };

  // componentDidMount = async () => {
  //   try {
  //     const keys = await AsyncStorage.getKeys();
  //     const result = await AsyncStorage.getMultiple(keys);
  //     console.log(result);
  //     // return result.map(req => JSON.parse(req));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  addTodo = async () => {
    let sentence = this.state.inputTodo;
    let newId = `_ ${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    let todo = {id: newId, sentence: sentence, status: false};

    sentence.length > 0
      ? this.setState({
          todos: [...this.state.todos, todo],
          inputTodo: '',
        })
      : Alert.alert('Hold', 'Please input todo first!', [
          {text: 'Okay', onPress: () => {}},
        ]);
  };

  markTodo = id => {
    let todos = this.state.todos;

    todos.map(todo => {
      if (todo.id === id) {
        todo.status = true;
      }
    });

    this.setState({todos});
  };

  deleteTodo = id => {
    let todos = this.state.todos.filter(item => item.id !== id);

    this.setState({todos});
  };

  showAlert = id => {
    Alert.alert(
      'Hi there',
      'What you gonna do?',
      [
        {text: 'Mark as done', onPress: () => this.markTodo(id)},
        {text: 'Delete', onPress: () => this.deleteTodo(id)},
      ],
      {cancelable: true},
    );
  };

  render() {
    return (
      <>
        <View style={styles.header}>
          <Title />
        </View>
        <FlatList
          style={styles.body}
          data={this.state.todos}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.showAlert(item.id)}>
              <Todo item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>New To do</Text>
            <TextInput
              maxLength={20}
              placeholder="Insert here!"
              style={styles.inputBar}
              onChangeText={value => this.setState({inputTodo: value})}
              value={this.state.inputTodo}
            />
          </View>
          <TouchableOpacity onPress={() => this.addTodo()}>
            <ButtonAdd />
          </TouchableOpacity>
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
  },
  footer: {
    flex: 1,
    maxHeight: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '80%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  inputTitle: {
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
