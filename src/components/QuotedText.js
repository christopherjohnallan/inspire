import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const QuotedText = ({ text }) => (
  <View>
    <Text style={[styles.quoteMark, styles.quoteMarkBefore]}>&ldquo;</Text>
    <Text style={styles.quoteText}>{text}</Text>
    <Text style={[styles.quoteMark, styles.quoteMarkAfter]}>&rdquo;</Text>
  </View>
);

const styles = StyleSheet.create({
  quoteText: {
    marginTop: 70,
    marginBottom: 70,
    paddingLeft: 10,
    paddingRight: 10,
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
});

QuotedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuotedText;
