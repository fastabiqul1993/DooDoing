import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function TodoStatus() {
  return (
    <View style={styles.container}>
      <Icon name="ios-checkmark-circle-outline" size={30} color="#6CDBE3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
  },
});

export default TodoStatus;
