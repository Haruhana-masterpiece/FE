import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import Description from '../../atoms/Textarea';
import ValidateCheckBox from '../../atoms/ValidateCheck';

interface Props {
  setTextData: Dispatch<SetStateAction<string>>;
}

function ArtText({ setTextData }: Props) {
  const [text, setText] = useState<string>('');

  const handleClick = (e: any) => {
    setText('');
    setTextData('');
  };

  const handleChange = (e: any) => {
    setText(e.target.value);
    setTextData(e.target.value);
  };
  return (
    <Container>
      <Title>
        작품 소개글
        <TrashBtn type="button" onClick={handleClick}>
          <BsTrash />
        </TrashBtn>
      </Title>
      <CustomText value={text} placeholder=" 작품을 소개해주세요 :) 20자 이상 작성해 주세요." onChange={handleChange} />
      <ValidateCheckBox text="소개글 20자 이상 입력확인" check={text.length >= 20} />
    </Container>
  );
}

export default ArtText;

const Container = styled.div`
  width: 50%;
  height: 300px;
  margin-left: 15px;
  margin-right: 30px;
`;

const CustomText = styled(Description)`
  width: 100%;
  height: 300px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const TrashBtn = styled.button`
  position: absolute;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 170px;
`;
