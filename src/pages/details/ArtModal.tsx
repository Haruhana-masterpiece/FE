import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

interface ModalProps {
  url: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

function ArtModal({ url, setIsModalOpen }: ModalProps) {
  return (
    <ArtModalStyle
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <div className="imgContainer">
        <img src={url} alt="modal" />
        <AiOutlinePlusCircle size="2em" style={{ position: 'absolute' }} />
        <AiOutlineMinusCircle size="2em" style={{ position: 'absolute' }} />
      </div>
    </ArtModalStyle>
  );
}

export default ArtModal;

const ArtModalStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;

  .imgContainer {
    width: 980px;
    margin: 0 auto;
    height: 100vh;
  }

  img {
    background-color: white;
    width: auto;
    height: 100vh;
  }
`;
