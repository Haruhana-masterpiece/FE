import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}

function MenuBox({ children }: IProps) {
  return <Container>{children}</Container>;
}

export default MenuBox;

const Container = styled.div`
  background-color: black;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;
  color: white;
`;
