import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function TodoStatus(props) {
  let status = props.status;
  return (
    <View style={styles.container}>
      {status ? (
        <Icon name="ios-checkmark-circle" size={30} color="#6CDBE3" />
      ) : (
        <Icon name="ios-checkmark-circle-outline" size={30} color="#6CDBE3" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
});

export default TodoStatus;
