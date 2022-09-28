import React from 'react';
import styled from 'styled-components';

function Textarea() {
  return <Description />;
}

export default Textarea;

const Description = styled.textarea`
  width: 50%;
  heigh: 300px;
  border: 0.3px solid gray;
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
