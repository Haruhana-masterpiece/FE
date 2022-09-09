import React from 'react';
import styled from 'styled-components';
import CloseBtn from '../atoms/CloseBtn';
import HeartBtn from '../atoms/HeartBtn';
import ShareBtn from '../atoms/ShareBtn';

function ArtContainerHover() {
  return (
    <ArtContainerHoverStyle>
      <HeartBtn />
      <ShareBtn />
      <CloseBtn />
    </ArtContainerHoverStyle>
  );
}

export default ArtContainerHover;

const ArtContainerHoverStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 5px;
  opacity: 0.5;
`;
