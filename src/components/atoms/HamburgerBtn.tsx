import React, { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

interface BtnProps {
  close: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}

function HamburgerBtn({ close, setClose }: BtnProps) {
  return (
    <HamburgerBtnStyle toggle={close}>
      <GiHamburgerMenu color="white" onClick={() => setClose(!close)} />
    </HamburgerBtnStyle>
  );
}

export default HamburgerBtn;

const HamburgerBtnStyle = styled.button<{ toggle: boolean }>`
  position: absolute;
  z-index: 3;
  right: 0.5rem;
  top: 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
`;
