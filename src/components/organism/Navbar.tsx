import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return <NavbarStyle />;
}

export default Navbar;

const NavbarStyle = styled.div`
  position: absolute;
  width: 100vw;
  height: 5vh;
`;
