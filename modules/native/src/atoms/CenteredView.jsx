import React from 'react';
import styled, { withTheme } from 'styled-components/native';

const CenteredView = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export default withTheme(CenteredView);