import React from 'react';
import Button from '../../atoms/native/Button';
import { View } from 'react-native';

const emptyFunction = () => {};

const PrimaryButton = () => (
  <View>
    <Button onPress={emptyFunction} title="Press me" />
  </View>
);

export default PrimaryButton;