import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerBtn from '../atoms/HamburgerBtn';
import Sidebar from './Sidebar';

function Navbar() {
  const [close, setClose] = useState<boolean>(false);
  return (
    <NavbarStyle>
      <Sidebar close={close} />

      <HamburgerBtn setClose={setClose} close={close} />
    </NavbarStyle>
  );
}

export default Navbar;

const NavbarStyle = styled.div`
  position: fixed;
  top: 0;
  width: 1280px;
  height: 5vh;
`;
