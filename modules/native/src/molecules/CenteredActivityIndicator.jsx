import { ActivityIndicator, View } from 'react-native';
import React from 'react';

import CenteredView from '../atoms/CenteredView';

const CenteredActivityIndicator = () => (
    <CenteredView>
        <ActivityIndicator />
    </CenteredView>
);

export default CenteredActivityIndicator;