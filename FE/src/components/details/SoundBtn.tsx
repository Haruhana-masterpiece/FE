import React, { useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import styled from 'styled-components';

function SoundBtn() {
  const [isTTS, setIsTTS] = useState(false);
  return (
    <SoundBtnStyle>
      <AiFillSound onClick={() => setIsTTS(!isTTS)} color={isTTS ? 'black' : '#ddd'} />
    </SoundBtnStyle>
  );
}

export default SoundBtn;

const SoundBtnStyle = styled.button`
  padding: 1rem;
`;
