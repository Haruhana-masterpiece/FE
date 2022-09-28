import React from 'react';
import styled from 'styled-components';

const Description = styled.textarea`
  border: 0.1px solid gray;
  border-radius: 2px;
  font-size: 20px;
  letter-spacing: 0.5px;
  word-spacing: 0.5px;
  line-height: 1.3;
  resize: none;
  white-space: pre-wrap;
  &::placeholder {
    font-size: 20px;
  }
`;

export default Description;
