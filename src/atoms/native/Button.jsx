import React from 'react';
import styled, { withTheme } from 'styled-components/native';

const Button = styled.Button`
    color: white;
    background-color: transparent;
    border: 1rem solid grey;
`;

export default withTheme(Button);