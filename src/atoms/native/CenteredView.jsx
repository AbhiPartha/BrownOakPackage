import styled, { withTheme } from 'styled-components/native';
import React from 'react';

const CenteredView = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export default withTheme(CenteredView);