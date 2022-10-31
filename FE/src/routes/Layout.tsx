import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';

function Layout() {
  return (
    <Container>
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
