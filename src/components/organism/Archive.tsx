import React from 'react';
import styled from 'styled-components';
import ArtContainer from './ArtContainer';

function Archive() {
  return (
    <ArchiveStyle>
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
      <ArtContainer />
    </ArchiveStyle>
  );
}

export default Archive;

const ArchiveStyle = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-areas: 'a a a a';
  width: 100%;
  height: auto;
`;
