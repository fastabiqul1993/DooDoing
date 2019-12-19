/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import PageTodo from './containers/pages/PageTodo';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <PageTodo />
      </SafeAreaView>
    </>
  );
};

export default App;
