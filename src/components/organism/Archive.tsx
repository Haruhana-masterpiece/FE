import React from 'react';
import styled from 'styled-components';
import ArtContainer from './ArtContainer';

function Archive() {
  return (
    <ArchiveStyle>
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
    </ArchiveStyle>
  );
}

export default Archive;

const ArchiveStyle = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
`;
