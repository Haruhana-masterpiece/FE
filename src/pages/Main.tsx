import React from 'react';
import styled from 'styled-components';
import Archive from '../components/organism/Archive';
import CarouselContainer from '../components/organism/CarouselContainer';

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
  overflow: hidden;
  width: 1280px;
  height: auto;
  margin: 0 auto;
`;
