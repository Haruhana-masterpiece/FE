import React, { Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

interface BtnProps {
  color: string;
  close: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}

function HamburgerBtn({ color, close, setClose }: BtnProps) {
  return (
    <HamburgerBtnStyle>
      <GiHamburgerMenu color={color} onClick={() => setClose(!close)} />
    </HamburgerBtnStyle>
  );
}

export default HamburgerBtn;

const HamburgerBtnStyle = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
`;
