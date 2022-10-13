import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TagBtn({ value }: { value: string }) {
  return (
    <Link to={`/tags/${value}`}>
      <TagBtnStyle>{value}</TagBtnStyle>
    </Link>
  );
}

export default TagBtn;

const TagBtnStyle = styled.button`
  border-radius: 5rem;
  padding: 5px;
  background-color: greenyellow;
  font-weight: bold;
`;
