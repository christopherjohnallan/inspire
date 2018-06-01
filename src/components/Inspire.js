import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuotedText from './QuotedText';
import ProfileBio from './ProfileBio';
import { StyleGuide } from './theme';
import { getQuote } from '../api/quoteApi';

class Inspire extends React.Component {
  state = {
    quote: null,
    quoteLoading: false,
  };

  componentWillMount() {
    this.updateQuote();
  }

  updateQuote = async () => {
    if (!this.state.quoteLoading) {
      await this.setState({
        quoteLoading: true,
      });
      const quote = await getQuote();
      await this.setState({
        quote,
        quoteLoading: false,
      });
    }
  };

  render() {
    const { quote } = this.state;
    if (this.state.quote == null) {
      return <View />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.quote}>
          <QuotedText text={quote.text} onPress={() => this.updateQuote()} />
        </View>
        <View style={styles.author}>
          <ProfileBio
            name={quote.author.name}
            imageUri={quote.author.imageUri}
            url={quote.author.url}
            dateOfBirth={quote.author.dateOfBirth}
            dateOfDeath={quote.author.dateOfDeath}
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
    paddingTop: 40,
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
