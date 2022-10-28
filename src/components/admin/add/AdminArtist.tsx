import React, { MouseEventHandler, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import CheckBox from '../../atoms/CheckBox';
import Input from '../../atoms/Input';
import ModalBody from '../../atoms/ModalBody';
import ModalWrapper from '../../atoms/ModalWrapper';
import SelectBtn from '../../atoms/SelectBtn';
import ArtistMockData from '../../constants/ArtistMockData';
import ArtistAdd from './ArtistAdd';
import ArtistList from './ArtistList';

interface IProps {
  id: string;
  Name: string;
  YofB: string;
}

// Artist MockData => useState[]로 데이터 관리

const MockDatas: IProps[] = ArtistMockData;

function Artist() {
  const [boxChecked, setBoxChecked] = useState<boolean>(false);
  const [artistName, setArtistName] = useState<string>('');

  // 작가 검색 useState
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [selectArtistName, setSelectArtistName] = useState<string>('');

  // 작가 추가 useState
  const [previewImg, setPreviewImg] = useState<string>('');
  const [selectState, setSelectState] = useState<boolean>(false);

  // MockData
  const [datas, setDatas] = useState<IProps[]>(MockDatas);

  // TODO : 원하는 결과 값 없을시 값이 없다고 출력
  const seachClickHandler = () => {
    const searchName = datas.filter((data) => data.Name === artistName);
    if (searchName.length === 0) setDatas(MockDatas);
    else setDatas(searchName);
    console.log(datas);
  };

  // TODO : event type 찾아서 설정
  const selectClickHandler = (event: any) => {
    setArtistName(event.target.name);
    setSelectArtistName(event.target.name);
    setSearchModal(false);
  };

  return (
    <Container>
      <TBody>
        <Title>작가 선택</Title>
        <CheckBox text="작가 미지정" checked={boxChecked} onChange={() => setBoxChecked(!boxChecked)} />
      </TBody>
      <Body>
        <Input
          id="ArtistName"
          placeholder="작가 이름을 입력해주세요"
          value={artistName}
          type="text"
          disabled={boxChecked}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <ArtistSearchBtn disabled={boxChecked} onClick={() => setSearchModal(!searchModal)}>
          작가 검색
        </ArtistSearchBtn>
        <ArtistAddBtn disabled={boxChecked} onClick={() => setAddModal(!addModal)}>
          작가 추가
        </ArtistAddBtn>
      </Body>
      {/* 작가 검색 Modal */}
      {searchModal && (
        <ModalWrapper onClick={() => setSearchModal(!searchModal)}>
          <CModalBody onClick={(e) => e.stopPropagation()}>
            <ModalTopBar>
              <ModalTitle>작가 조회</ModalTitle>
              <ModalCloseBtn onClick={() => setSearchModal(!searchModal)} />
            </ModalTopBar>
            <ModalSearchBar>
              <Input
                id="ArtistSearchInput"
                value={artistName}
                type="text"
                onChange={(e) => setArtistName(e.target.value)}
              />
              <CSearchBtn
                onClick={() => {
                  seachClickHandler();
                }}
              >
                검색
              </CSearchBtn>
            </ModalSearchBar>
            {/* 작가 검색 리스트  */}
            <TableSheet>
              <TableHead>
                <TableTr>
                  <TalbeTh>이름</TalbeTh>
                  <TalbeTh>출생연도</TalbeTh>
                  <TalbeTh>선택</TalbeTh>
                </TableTr>
              </TableHead>
              <TableBody>
                {datas.map((data) => (
                  <ArtistList
                    key={data.id}
                    id={data.id}
                    name={data.Name}
                    yofb={data.YofB}
                    onClick={selectClickHandler}
                  />
                ))}
              </TableBody>
            </TableSheet>
          </CModalBody>
        </ModalWrapper>
      )}
      {/* 작가 추가 Modal */}
      {addModal && (
        <ModalWrapper onClick={() => setAddModal(!addModal)}>
          <CModalBody onClick={(e) => e.stopPropagation()}>
            <ModalTopBar>
              <ModalTitle>작가 추가</ModalTitle>
              <ModalCloseBtn onClick={() => setAddModal(!addModal)} />
            </ModalTopBar>
            <ArtistAdd />
          </CModalBody>
        </ModalWrapper>
      )}
    </Container>
  );
}

export default Artist;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 130px;
  margin-left: 50px;
  border-bottom: 1px solid lightgray;
`;

const TBody = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 35px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
  margin-top: 20px;
  margin-left: 35px;
`;

const ArtistSearchBtn = styled(SelectBtn)<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled
      ? css`
          color: gray;
        `
      : css`
          color: black;
        `}
  width: 100px;
  height: 80%;
  margin-left: 10px;
`;

const ArtistAddBtn = styled(SelectBtn)<{ disabled: boolean }>`
  ${({ disabled }) =>
    disabled
      ? css`
          color: gray;
        `
      : css`
          color: black;
        `}
  width: 100px;
  height: 80%;
  margin-left: 10px;
`;

// 작가 검색 css
const CModalBody = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 700px;
`;

const ModalSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CSearchBtn = styled(SelectBtn)`
  width: 200px;
  height: 45px;
  margin-left: 10px;
  margin-top: auto;
`;

const ModalTopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled(Title)`
  font-size: 25px;
  margin-left: auto;
`;
const ModalCloseBtn = styled(AiOutlineClose)`
  display: flex;
  margin-left: auto;
  margin-bottom: 30px;
  font-size: 20px;
  cursor: pointer;
`;

// Table css
const TableSheet = styled.table`
  display: block;
  overflow: auto;
  width: 100%;
  height: 400px;
  margin-top: 15px;
  border: 0.5px solid #dee2e6;
`;

const TableHead = styled.thead`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 10px;
`;

const TableBody = styled.div``;

const TableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`;

const TalbeTh = styled.th`
  margin: 0 77px 0 40px;
`;
