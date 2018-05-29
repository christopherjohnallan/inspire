import React from 'react';
import { Font, AppLoading } from 'expo';
import Inspire from './src/components/Inspire';

const AbrilFatFaceRegular = require('./fonts/AbrilFatface-Regular.ttf');

export default class App extends React.Component {
  state = { isReady: false };

  async componentWillMount() {
    const fonts = Font.loadAsync({
      'AbrilFatface-Regular': AbrilFatFaceRegular,
    });
    await Promise.all([fonts]);
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <Inspire />;
  }
}
