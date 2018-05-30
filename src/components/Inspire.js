import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuotedText from './QuotedText';
import ProfileBio from './ProfileBio';
import { StyleGuide } from './theme';

const quote = {
  text: 'Good thoughts are no better than good dreams, unless they be executed',
  author: {
    name: 'Ralph Waldo Emerson',
    yearOfBirth: 1803,
    yearOfDeath: 1882,
    imageUri:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg/220px-Ralph_Waldo_Emerson_ca1857_retouched.jpg',
  },
};

const Inspire = () => (
  <View style={styles.container}>
    <View style={styles.quote}>
      <QuotedText text={quote.text} />
    </View>
    <View style={styles.author}>
      <ProfileBio
        name={quote.author.name}
        imageUri={quote.author.imageUri}
        yearOfBirth={quote.author.yearOfBirth}
        yearOfDeath={quote.author.yearOfDeath}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  quote: {
    flex: 0.7,
    backgroundColor: StyleGuide.styles.backgroundColor,
    borderRadius: StyleGuide.styles.borderRadius,
    marginBottom: 10,
  },
  author: {
    flex: 0.3,
    marginTop: 10,
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: StyleGuide.styles.backgroundColor,
    borderRadius: StyleGuide.styles.borderRadius,
  },
});

export default Inspire;
