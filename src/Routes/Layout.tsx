import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/atoms/Logo';
import Navbar from '../components/navbar/Navbar';

function Layout() {
  return (
    <Container>
      <Logo />
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  max-width: 1280px;
  height: auto;
  margin: 0 auto;
`;
