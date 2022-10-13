import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { VscInfo } from 'react-icons/vsc';
import PreviewImg from '../../components/organism/PreviewImg';
import ArtText from '../../components/organism/ArtText';
import Artist from '../../components/organism/AdminArtist';
import ArtTag from '../../components/organism/ArtTag';
import SelectBtn from '../../components/atoms/SelectBtn';

interface Props {
  setImgData: Dispatch<SetStateAction<string>>;
  setTextData: Dispatch<SetStateAction<string>>;
}

function ArtAdd() {
  const [imgData, setImgData] = useState<string>('');
  const [textData, setTextData] = useState<string>('');

  return (
    <Container>
      <MainTitle>작품 추가 하기</MainTitle>
      <TBody>
        <PreviewImg setImgData={setImgData} />
        <ArtText setTextData={setTextData} />
      </TBody>
      <Body>
        <Artist />
        <ArtTag />
      </Body>
      <Buttons>
        <ArtAddBtn>작품추가</ArtAddBtn>
        <ResetBtn>초기화</ResetBtn>
      </Buttons>
    </Container>
  );
}

export default ArtAdd;
const ArtAddBtn = styled(SelectBtn)`
  text-align: center;
  width: 100px;
  height: 30px;
  font-size: 20px;
`;

const ResetBtn = styled(SelectBtn)`
  text-align: center;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
`;

const Body = styled.div``;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h2`
  padding: 36px 44px;
  border-bottom: 2px solid lightgray;
  font-size: 32px;
  font-weight: 500;
`;

const TBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  text-align: center;
  padding-bottom: 140px;
  border-bottom: 1px solid lightgray;
`;
