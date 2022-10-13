import React, { useState, useEffect, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  key: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function TagItem({ key, text, onClick }: IProps) {
  const [randomColor, setRandomColor] = useState<string>('');

  useEffect(() => {
    // RandomColor 생성
    const Rcolor = '#'.concat(Math.random().toString(16).substr(-6));
    setRandomColor(Rcolor);
  }, [key]);

  return (
    <Item key={key} randomColor={randomColor}>
      <p>{text}</p>
      <CloseButton type="button" onClick={onClick}>
        X
      </CloseButton>
    </Item>
  );
}

const defaultProps = {
  onClick: () => null,
};

TagItem.defaultProps = defaultProps;

export default TagItem;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
  color: #495057;
`;

const Item = styled.div<{ randomColor: string }>`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  /* backgroundcolor Random */
  ${({ randomColor }) => css`
    background-color: ${randomColor};
  `}
  border-radius: 5px;
  color: #f1f3f5;
  font-size: 15px;
`;
