import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native';
import PropTypes from 'prop-types';

const ProfileBio = ({
  name, imageUri, yearOfBirth, yearOfDeath, url,
}) => (
  <TouchableWithoutFeedback onPressIn={() => Linking.openURL(url)}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.info}>
        <Text>{name}</Text>
        <Text>
          {yearOfBirth} - {yearOfDeath}
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
    paddingLeft: 10,
  },
});

ProfileBio.defaultProps = {
  yearOfDeath: null,
  imageUri: null, // TODO: update to a locally stored generic profile shape picture
  url: null,
};

ProfileBio.propTypes = {
  name: PropTypes.string.isRequired,
  imageUri: PropTypes.string,
  url: PropTypes.string,
  yearOfBirth: PropTypes.number.isRequired,
  yearOfDeath: PropTypes.number,
};

export default ProfileBio;
