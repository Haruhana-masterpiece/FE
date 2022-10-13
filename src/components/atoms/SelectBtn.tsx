import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  value: string;
  onClick: () => void;
  active: boolean;
}

function SelectBtx({ value, onClick, active }: IProps) {
  return (
    <SelectButton onClick={onClick} active={active}>
      {value}
    </SelectButton>
  );
}

export default SelectBtx;

const SelectButton = styled.button<{ active: boolean }>`
  background-color: lightgray;
  width: 100px;
  height: 30px;
  padding: 6px 14px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: black;
    border: 1px solid white;
    color: white;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: black;
      border: 1px solid white;
      color: white;
    `}
`;
