import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerBtn from '../atoms/HamburgerBtn';

function Sidebar() {
  const [close, setClose] = useState<boolean>(false);

  return (
    <SidebarStyle>
      <HamburgerBtn color={close ? 'black' : 'white'} setClose={setClose} close={close} />
    </SidebarStyle>
  );
}

export default Sidebar;

const SidebarStyle = styled.div`
  display: block;
  position: absolute;
  right: 0;
  width: 20vw;
  height: 100vh;
  background-color: black;
`;
