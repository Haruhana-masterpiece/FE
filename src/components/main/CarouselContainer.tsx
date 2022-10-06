import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Carousel from './Carousel';

function CarouselContainer() {
  return (
    <CarouselContainerStyle>
      <Carousel />
      <MainInputStyle>
        <Input id="mainInput" type="text" />
      </MainInputStyle>
    </CarouselContainerStyle>
  );
}

export default CarouselContainer;

const CarouselContainerStyle = styled.div`
  width: 1280px;
  text-align: center;
`;

const MainInputStyle = styled.div`
  > div {
    align-items: center;
  }

  #mainInput {
    position: absolute;
    top: 40%;
    opacity: 0.6;
    :focus {
      outline: none;
      opacity: 1;
    }
  }
`;
