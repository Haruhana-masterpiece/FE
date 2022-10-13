import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Archive from '../../components/main/Archive';

function Tags() {
  const location = useLocation();
  const params = location.pathname.split('/');
  return (
    <TagsPage>
      <h1>{params[2]}</h1>
      <Archive />
    </TagsPage>
  );
}

export default Tags;

const TagsPage = styled.div`
  width: 1280px;
  text-align: center;

  h1 {
    margin: 80px 0 40px 0;
  }
`;
