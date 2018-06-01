import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';

const ProfileBio = ({
  name, imageUri, dateOfBirth, dateOfDeath, url,
}) => (
  <TouchableWithoutFeedback onPressIn={() => Linking.openURL(url)}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.info}>
        <Text numberOfLines={1} adjustsFontSizeToFit>
          {name}
        </Text>
        <Text>
          {dateOfBirth} {dateOfBirth && dateOfDeath && '-'} {dateOfDeath}
        </Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    paddingLeft: 10,
  },
});

ProfileBio.defaultProps = {
  name: null,
  imageUri: null, // TODO: update to a locally stored generic profile shape picture
  url: null,
  dateOfBirth: null,
  dateOfDeath: null,
};

ProfileBio.propTypes = {
  name: PropTypes.string,
  imageUri: PropTypes.string,
  url: PropTypes.string,
  dateOfBirth: PropTypes.string,
  dateOfDeath: PropTypes.string,
};

export default ProfileBio;
