import React from 'react';
import styled from 'styled-components';

interface CarouselProps {
  numb: string;
  url?: string;
}

function Carousel() {
  return (
    <CarouselBox>
      <Slider>
        <CarouselContent url="https://mdl.artvee.com/sftb/402023mt.jpg" numb="1" />
        <CarouselContent url="https://mdl.artvee.com/sftb/402023mt.jpg" numb="2" />
        <CarouselContent url="https://mdl.artvee.com/sftb/402023mt.jpg" numb="3" />
        <CarouselContent url="https://mdl.artvee.com/sftb/402023mt.jpg" numb="4" />
        <CarouselContent url="https://mdl.artvee.com/sftb/402023mt.jpg" numb="5" />
      </Slider>
      <IndicatorContainer>
        <Indicator numb="1" />
        <Indicator numb="2" />
        <Indicator numb="3" />
        <Indicator numb="4" />
        <Indicator numb="5" />
      </IndicatorContainer>
    </CarouselBox>
  );
}

export default Carousel;

const Slider = styled.div`
  width: calc(1280px * 5);
  display: flex;
  height: 50vh;
`;

const CarouselContent = styled.div<CarouselProps>`
  width: 1280px;
  height: 50vh;
  background-image: ${(props) => `url(${props.url})`};
`;

const CarouselBox = styled.div`
  width: calc(1280px * 5);
  display: flex;
  height: 50vh;
`;

const IndicatorContainer = styled.div`
  width: 1280px;
  position: absolute;
  top: 48%;
  display: flex;
`;

const Indicator = styled.button<CarouselProps>`
  width: 1.4rem;
  border: none;
  height: 0.3rem;
  margin: 0 0.2rem;
  background-color: #ddd;
  :hover {
    background-color: white;
  }

  :first-child {
    margin-left: auto;
  }

  :last-child {
    margin-right: auto;
  }
`;
