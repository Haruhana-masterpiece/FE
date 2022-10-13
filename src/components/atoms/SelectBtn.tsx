<<<<<<< HEAD
import styled from 'styled-components';

const SelectBtn = styled.button`
  padding: a 0.5rem 1.2rem;
  border-radius: 4px;
  background: #ced4da;
  color: #495057;
  font-size: 1.125rem;
  &:hover {
    opacity: 0.7;
  }
`;

export default SelectBtn;
=======
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
>>>>>>> 9a4c398b41e0fc983667a4ee4bfd06c1ef947f23
