import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  onClick: () => void;
}

export function LeftArrow({ onClick }: IProps) {
  return (
    <BtnContainer onClick={onClick}>
      <FiChevronLeft />
    </BtnContainer>
  );
}

export function RightArrow({ onClick }: IProps) {
  return (
    <BtnContainer onClick={onClick}>
      <FiChevronRight />
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
`;
