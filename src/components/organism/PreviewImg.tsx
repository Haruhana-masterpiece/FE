import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { GrImage } from 'react-icons/gr';
import Spinner from '../atoms/Spinner';
// atoms에 버튼 생성
import SelectBtn from '../atoms/SelectBtn';

interface Props {
  setImgData: Dispatch<SetStateAction<string>>;
}

// 이미지 파일 전송 (ArtAdd 부모 컴포넌트로)
function PreviewImg({ setImgData }: Props) {
  const [previewImg, setPreviewImg] = useState<string>('');
  const [selectState, setSelectState] = useState<boolean>(false);
  // 파일선택 버튼이랑 selectBtn 연결
  const selectFile = useRef<HTMLInputElement>(null);

  const loadImg = (e: any) => {
    const ArtImgFile = e.target.files;
    setPreviewImg(URL.createObjectURL(ArtImgFile[0]));
    setImgData(URL.createObjectURL(ArtImgFile[0]));
    setSelectState(true);
  };

  const handleClick = (e: any) => {
    e.target.value = null;
  };

  const resetImg = (e: any) => {
    setPreviewImg('');
    setImgData('');
    setSelectState(false);
  };

  return (
    <Container>
      <Title>작품 이미지</Title>
      <ShowPreviewImg>{selectState ? <Img src={previewImg} alt="ArtImg" /> : <CustomGrImage />}</ShowPreviewImg>
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
    </Container>
  );
}

export default PreviewImg;

const Container = styled.div`
  width: 50%;
  height: 300px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
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
  height: 35px;z
  border: 0.5px solid #e9ecef;
`;

const ShowPreviewImg = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e9ecef;
  border: 0.5px solid #e9ecef;
`;

const ImgButtons = styled.div`
  margin-top: 5px;
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
