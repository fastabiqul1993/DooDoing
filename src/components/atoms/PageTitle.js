import React from 'react';
import {Text, StyleSheet} from 'react-native';

function PageTitle(title) {
  return <Text style={styles.titleSentence}>To do</Text>;
}

const styles = StyleSheet.create({
  titleSentence: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default PageTitle;
