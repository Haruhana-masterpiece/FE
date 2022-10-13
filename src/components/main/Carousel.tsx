import React, { useState } from 'react';
import styled from 'styled-components';

interface urlProps {
  url: string;
}

function Carousel() {
  const [current, setCurrent] = useState('0');
  const urlArray = [
    'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/go/pokemon-party.jpg',
    'https://i.pinimg.com/originals/b4/b3/a1/b4b3a1b024504202c540ed0b098ba182.jpg',
    'https://getwallpapers.com/wallpaper/full/4/d/4/763055-best-pokemon-wallpapers-1920x1080-hd.jpg',
    'https://lh3.googleusercontent.com/FyWwdoAa9zaYJ7tyNa86AVGXerHYw8dbOWa25G6QIJUFlixiGEb3Oapm0QsowMDOh121=h500',
    'https://cdn.wallpapersafari.com/24/30/vfdJob.jpg',
  ];
  return (
    <CarouselBox>
      <div
        className="slider"
        style={{
          marginLeft: `-${current}00%`,
        }}
      >
        {urlArray.map((url) => {
          return <CarouselContent key={Math.random()} url={url} />;
        })}
      </div>
      <IndicatorContainer>
        {urlArray.map((data, i) => {
          return (
            <Indicator
              key={Math.random()}
              name={`${i}`}
              onClick={(e: React.MouseEvent) => {
                const target = e.target as HTMLButtonElement;
                setCurrent(target.name);
              }}
            />
          );
        })}
      </IndicatorContainer>
    </CarouselBox>
  );
}

export default Carousel;

const CarouselContent = styled.div<urlProps>`
  width: 1280px;
  height: 50vh;
  background-image: ${(props) => `url(${props.url})`};
  flex: none;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const CarouselBox = styled.div`
  width: 1280px;
  display: flex;
  height: 50vh;
  background-color: white;

  .slider {
    width: 1280px;
    display: flex;
    height: 50vh;
    transition: 0.5s ease;
  }
`;

const IndicatorContainer = styled.div`
  width: 1280px;
  position: absolute;
  top: 48%;
  display: flex;
`;

const Indicator = styled.button`
  width: 1.4rem;
  border: none;
  height: 0.3rem;
  margin: 0 0.2rem;
  background-color: white;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }

  :focus {
    opacity: 1;
  }

  :first-child {
    margin-left: auto;
  }

  :last-child {
    margin-right: auto;
  }
`;
