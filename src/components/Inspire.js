import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuotedText from './QuotedText';
import ProfileBio from './ProfileBio';
import { StyleGuide } from './theme';

const quotes = [
  {
    text: 'Good thoughts are no better than good dreams, unless they be executed',
    author: {
      name: 'Ralph Waldo Emerson',
      yearOfBirth: 1803,
      yearOfDeath: 1882,
      imageUri:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg/220px-Ralph_Waldo_Emerson_ca1857_retouched.jpg',
      url: 'https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson',
    },
  },
  {
    text:
      'We must be willing to let go of the life we have so as to have the life that is waiting for us',
    author: {
      name: 'E. M. Forster',
      yearOfBirth: 1879,
      yearOfDeath: 1970,
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg/200px-E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg',
      url: 'https://en.wikipedia.org/wiki/E._M._Forster',
    },
  },
];

class Inspire extends React.Component {
  state = { quoteIndex: 1, quote: quotes[0] };

  getQuote = () => {
    this.setState({
      quote: quotes[this.state.quoteIndex % 2],
      quoteIndex: this.state.quoteIndex + 1,
    });
  };

  render() {
    const { quote } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.quote}>
          <QuotedText text={quote.text} onPress={() => this.getQuote()} />
        </View>
        <View style={styles.author}>
          <ProfileBio
            name={quote.author.name}
            imageUri={quote.author.imageUri}
            url={quote.author.url}
            yearOfBirth={quote.author.yearOfBirth}
            yearOfDeath={quote.author.yearOfDeath}
          />
        </View>
      </View>
    );
  }
}

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
