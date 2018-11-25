import React from 'react';
import { View } from 'react-native';

import Button from '../atoms/Button';

const emptyFunction = () => {};

const PrimaryButton = () => (
  <View>
    <Button onPress={emptyFunction} title="Press me" />
  </View>
);

export default PrimaryButton;