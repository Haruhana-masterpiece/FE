import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { VscInfo } from 'react-icons/vsc';
import PreviewImg from '../../components/organism/PreviewImg';
import Textarea from '../../components/atoms/Textarea';

interface Props {
  setImgData: Dispatch<SetStateAction<string>>;
}

function ArtAdd() {
  const [imgData, setImgData] = useState<string>('');
  return (
    <Container>
      <MainTitle>작품 추가 하기</MainTitle>
      <Body>
        <PreviewImg setImgData={setImgData} />
      </Body>
    </Container>
  );
}

export default ArtAdd;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h2`
  padding: 36px 44px;
  border-bottom: 2px solid lightgray;
  font-size: 32px;
  font-weight: 500;
  magin-bottom: 86px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  text-align: center;
`;
