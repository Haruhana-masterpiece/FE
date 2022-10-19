import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeartBtn from '../atoms/HeartBtn';
import ShareBtn from '../atoms/ShareBtn';

interface ArtContainerHoverProps {
  data: string;
  type: string | undefined;
}

function ArtContainerHover({ data, type }: ArtContainerHoverProps) {
  return (
    <ArtContainerHoverStyle>
      <Link to={`/details/${data}`} className="linkToDetails" />
      <div className="icons">
        {type !== 'collection' && <HeartBtn size="1.5em" color="white" />}
        <ShareBtn size="1.5em" color="white" />
      </div>
    </ArtContainerHoverStyle>
  );
}

export default ArtContainerHover;

const ArtContainerHoverStyle = styled.div`
  width: 250px;
  height: 250px;
  background-color: #000;
  border-radius: 5px;
  opacity: 0.5;
  display: flex;
  flex-flow: column;

  .linkToDetails {
    width: 250px;
    height: 200px;
  }

  .icons {
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    place-content: center;

    svg {
      margin: 0.5rem;
    }
  }
`;
