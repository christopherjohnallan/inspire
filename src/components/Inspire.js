import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const quote = {
  text: 'Good thoughts are no better than good dreams, unless they be executed',
  author: 'Ralph Waldo Emerson',
};

const Inspire = () => (
  <View style={styles.container}>
    <View style={styles.quote}>
      <Text style={[styles.quoteMark, styles.quoteMarkBefore]}>&ldquo;</Text>
      <Text style={styles.quoteText}>{quote.text}</Text>
      <Text style={[styles.quoteMark, styles.quoteMarkAfter]}>&rdquo;</Text>
    </View>
    <View style={styles.author}>
      <Text>{quote.author}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'grey',
    paddingTop: 20,
  },
  quote: {
    flex: 0.7,
    backgroundColor: 'teal',
    paddingLeft: 20,
    paddingRight: 20,
  },
  quoteText: {
    marginTop: 70,
    marginBottom: 70,
    fontSize: 30,
  },
  quoteMark: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 100,
    position: 'absolute',
  },
  quoteMarkBefore: {},
  quoteMarkAfter: {
    bottom: -50,
    right: 0,
  },
  author: {
    flex: 0.3,
    backgroundColor: 'purple',
    paddingTop: 20,
  },
});

export default Inspire;
