import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
  return (
    <LogoStyle>
      <Link to="/">LOGO</Link>
    </LogoStyle>
  );
}

export default Logo;

const LogoStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;
