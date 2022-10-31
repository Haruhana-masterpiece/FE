import React from 'react';
import styled from 'styled-components';

function CloseBtn() {
  return <CloseBtnStyle>x</CloseBtnStyle>;
}

export default CloseBtn;

const CloseBtnStyle = styled.button`
  position: relative;
  left: 79%;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  color: #fff;
`;
