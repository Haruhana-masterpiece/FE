import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';
import SearchBar from '../../components/organism/SearchBar';

type SearchValue = {
  category: string;
  result: string;
};

type likeDataType = {
  date: string;
  like: string[];
};

function MyCollection() {
  const [searchValue, setSearchValue] = useState<SearchValue | null>(null);
  const [masterpiece, setMasterpiece] = useState<likeDataType[]>([]);
  // TODO searchValue이용하여 받아온 컬렉션 데이터 중에서 검색결과와 일치하는 자료 뿌려주기, 프론트단에서 처리하는게 나을듯
  // mock data like 값에 명화 이름, 작가 이름, 이미지주소 형태로 넣어줘야할 듯

  return (
    <Wrapper>
      <LeftWrapper>
        <Head>
          <h1>Collection</h1>
          <SearchBar setValue={setSearchValue} radio1="작가명" radio1Id="author" radio2="작품명" radio2Id="art" />
        </Head>
        {/*  TODO 아카이브 코드 완성되면 공유받아서 작업 마무리하기 */}
        {/* 임시 코드 */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 0' }}>
          {masterpiece.map((p) => {
            return (
              <>
                {/* TODO 날짜 호버 시 해당 날짜에 담은 컬렉션 전체 삭제 버튼 생성 */}
                <h2>{p.date}</h2>
                <div style={{ display: 'flex', width: '650px', flexWrap: 'wrap' }}>
                  {p.like.map((img) => {
                    return (
                      <img
                        style={{ width: '200px', height: '300px', margin: '10px 10px 10px 0' }}
                        src={img}
                        alt="img"
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </LeftWrapper>
      <RightWrapper>
        {/* TODO api로 history 정보 받아와서 뿌려주기 */}
        <History>
          <h2>History</h2>
          <p>총 즐겨찾기 수 : 00</p>
          <p>오늘의 작품 수 : 00</p>
          <p>가장 좋아하는 작가 : 00</p>
          <p>이 달의 출석 수: 00</p>
        </History>
        <Calendar setMasterpiece={setMasterpiece} />
      </RightWrapper>
    </Wrapper>
  );
}

export default MyCollection;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LeftWrapper = styled.div`
  flex-grow: 1;
  margin-top: 100px;
  overflow: scroll;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RightWrapper = styled.div`
  width: 250px;
  border-left: 2px solid lightgray;
  margin-top: 100px;
  margin-bottom: 10px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  margin-top: 50px;
  margin-bottom: 200px;

  > h2 {
    margin-bottom: 20px;
  }

  > p {
    margin-bottom: 10px;
  }
`;
