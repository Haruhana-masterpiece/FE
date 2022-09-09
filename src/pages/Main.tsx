import React from 'react';
import styled from 'styled-components';
import Archive from '../components/organism/Archive';
import Carousel from '../components/organism/Carousel';
import Navbar from '../components/organism/Navbar';

function Main() {
  return (
    <MainStyle>
      <Navbar />
      <Carousel />
      <Archive />
    </MainStyle>
  );
}

export default Main;

const MainStyle = styled.div`
  width: 100vw;
  height: auto;
  background-color: #fafafa;
`;
