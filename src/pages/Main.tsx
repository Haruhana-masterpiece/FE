import React from 'react';
import styled from 'styled-components';
import Archive from '../components/main/Archive';
import CarouselContainer from '../components/main/CarouselContainer';

function Main() {
  return (
    <MainStyle>
      <CarouselContainer />
      <Archive />
    </MainStyle>
  );
}

export default Main;

const MainStyle = styled.div`
  background-color: #f9f9f9;
  overflow: hidden;
  width: 1280px;
  height: auto;
`;
