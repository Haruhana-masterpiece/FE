import React, { useRef, useState } from 'react';
import { GrImage } from 'react-icons/gr';
import styled, { css } from 'styled-components';
import Input from '../../atoms/Input';
import SelectBtn from '../../atoms/SelectBtn';
import Description from '../../atoms/Textarea';

function ArtistAdd() {
  const [previewImg, setPreviewImg] = useState<string>('');
  const [selectState, setSelectState] = useState<boolean>(false);
  const selectFile = useRef<HTMLInputElement>(null);

  // 작가 이름, 출생연도, 소개글 상태 저장
  const [artistName, setArtistName] = useState<string>('');
  const [artistYofB, setArtistYofB] = useState<string>('');
  const [artistDescription, setArtistDescription] = useState<string>('');

  const loadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      const ArtImgFile = e.currentTarget.files[0];
      setPreviewImg(URL.createObjectURL(ArtImgFile));
      setSelectState(true);
    }
  };

  // TODO : type 다시 설정 하기
  const handleClick = (e: any) => {
    e.currentTarget.value = null;
  };

  const resetImg = () => {
    setPreviewImg('');
    setSelectState(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ShowPreviewImg>{selectState ? <Img src={previewImg} alt="ArtistImg" /> : <CustomGrImage />}</ShowPreviewImg>
      <ImgButtons>
        <input
          ref={selectFile}
          style={{ display: 'none' }}
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={loadImg}
          onClick={handleClick}
        />
        {selectState ? (
          <CustomSelectBtn onClick={resetImg} selectState={selectState}>
            이미지 초기화
          </CustomSelectBtn>
        ) : (
          <CustomSelectBtn onClick={() => selectFile.current?.click()} selectState={selectState}>
            이미지 추가
          </CustomSelectBtn>
        )}
      </ImgButtons>
      <Body>
        <ArtistInfo>
          <SubTitle>이름</SubTitle>
          <Input id="ArtistNameInput" type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
          <SubTitle>출생연도</SubTitle>
          <Input id="ArtistYofB" type="text" value={artistYofB} onChange={(e) => setArtistYofB(e.target.value)} />
          <SubTitle>작가 소개</SubTitle>
          <CDescription
            id="ArtistDescription"
            value={artistDescription}
            onChange={(e) => setArtistDescription(e.target.value)}
          />
        </ArtistInfo>
      </Body>
      <CSelectBtn>저장</CSelectBtn>
    </Form>
  );
}

export default ArtistAdd;

const CSelectBtn = styled(SelectBtn)`
  width: 100%;
  height: 40px;
`;

const Body = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  height: 330px;
  margin: 20px 0 10px 0;
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin: 10px 0 10px 0;
`;

const ArtistInfo = styled.div`
  width: 100%;
`;

const CDescription = styled(Description)`
  width: 90%;
  height: 100px;
`;

const Form = styled.form`
  display: block;
  overflow: auto;
  width: 100%;
  height: 400px;
`;

const CustomSelectBtn = styled(SelectBtn)<{ selectState: boolean }>`
  ${({ selectState }) =>
    selectState
      ? css`
          background-color: #ffe3e3;
        `
      : css`
          background-color: #e6fcf5;
        `}
  color: #868e96;
  width: 100%;
  height: 35px;
  border: 0.5px solid #e9ecef;
`;

const ShowPreviewImg = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e9ecef;
  border: 0.5px solid #e9ecef;
`;

const CustomGrImage = styled(GrImage)`
  font-size: 50px;
  opacity: 0.3;
  margin-top: 110px;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const ImgButtons = styled.div`
  margin-top: 5px;
`;
