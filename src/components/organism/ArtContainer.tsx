import React, { useState } from 'react';
import styled from 'styled-components';
import ArtContainerHover from './ArtContainerHover';

function ArtContainer() {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <ArtContainerStyle onMouseOver={() => setHide(false)} onMouseLeave={() => setHide(true)}>
      {!hide && <ArtContainerHover />}
    </ArtContainerStyle>
  );
}

export default ArtContainer;

const ArtContainerStyle = styled.div`
  margin: 1rem;
  width: 250px;
  height: 250px;
  background-image: url('https://mdl.artvee.com/ft/300867rg.jpg');
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`;
