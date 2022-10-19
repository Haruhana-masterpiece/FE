import React, { useState } from 'react';
import styled from 'styled-components';
import ArtContainerHover from './ArtContainerHover';

interface ArtContainerProps {
  url: string;
  data: string;
  type?: string;
}

function ArtContainer({ url, data, type }: ArtContainerProps) {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <ArtContainerStyle url={url} onMouseOver={() => setHide(false)} onMouseLeave={() => setHide(true)}>
      {!hide && <ArtContainerHover data={data} type={type} />}
    </ArtContainerStyle>
  );
}

const defaultProps = {
  type: '',
};

ArtContainer.defaultProps = defaultProps;

export default ArtContainer;

const ArtContainerStyle = styled.div<{ url: string }>`
  cursor: pointer;
  margin: 2rem;
  width: 250px;
  height: 250px;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
`;
