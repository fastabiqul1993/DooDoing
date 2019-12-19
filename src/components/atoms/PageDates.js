import React from 'react';
import {Text, StyleSheet} from 'react-native';

function PageDates() {
  return <Text style={styles.dateSentence}>Today, 19 Dec 2019</Text>;
}

const styles = StyleSheet.create({
  dateSentence: {fontSize: 18, color: '#BDC3C7'},
});

export default PageDates;
