import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';
import SearchBar from '../../components/organism/SearchBar';

type SearchValue = {
  category: string;
  result: string;
};

type likeType = {
  [key: string]: string;
  art: string;
  author: string;
  img: string;
};

type likeDataType = {
  date: string;
  like: likeType[];
};

function MyCollection() {
  // SearchBar에서 얻어온 결과를 searchValue에 저장하고 searchList를 통해 검색 결과를 보여줌
  const [searchValue, setSearchValue] = useState<SearchValue | null>(null);
  // 캘린더의 날짜 데이터에 따라 명화 데이터를 받아온 후 masterpiece에 저장
  const [masterpiece, setMasterpiece] = useState<likeDataType[]>([]);
  const [searchList, setSearchList] = useState(masterpiece);
  // 컬렉션 리스트 타입 지정 (글 목록 or 이미지 목록)
  const [viewType, setViewType] = useState('art');

  // 컬렉션 검색 부분
  useEffect(() => {
    if (searchValue !== null) {
      // 공백으로 검색버튼 클릭 시 컬렉션 전체 데이터를 보여줌
      if (searchValue.result === '') {
        setSearchList(masterpiece);
      } else {
        // 검색 결과와 일치하는 리스트를 보여줌
        const newList: likeDataType[] = [];
        for (let i = 0; i < masterpiece.length; i += 1) {
          const newImgList: likeType[] = [];
          for (let j = 0; j < masterpiece[i].like.length; j += 1) {
            if (masterpiece[i].like[j][searchValue.category] === searchValue.result) {
              newImgList.push(masterpiece[i].like[j]);
            }
          }
          if (newImgList.length !== 0) {
            const newData = { date: masterpiece[i].date, like: newImgList };
            newList.push(newData);
          }
        }
        setSearchList(newList);
      }
    } else {
      // 해당 페이지에 처음 방문 시 컬렉션 전체 데이터를 보여줌
      setSearchList(masterpiece);
    }
  }, [searchValue, masterpiece]);

  return (
    <Wrapper>
      <LeftWrapper>
        <Head>
          <h1>Collection</h1>
          <SearchBar setValue={setSearchValue} radio1="작가명" radio1Id="author" radio2="작품명" radio2Id="art" />
        </Head>
        {/*  TODO 아카이브 코드 완성되면 공유받아서 작업 마무리하기 */}
        {/* 임시 코드 */}
        <TempContainer>
          <button type="button" onClick={() => setViewType('art')}>
            art
          </button>
          <button type="button" onClick={() => setViewType('list')}>
            list
          </button>
          {searchList.length === 0 && <TempEmptyList>검색 결과와 일치하는 항목이 없습니다.</TempEmptyList>}
          {searchList.map((p, index) => {
            return (
              <Fragment key={`masterpiece-${index + 1}`}>
                {/* TODO 날짜 호버 시 해당 날짜에 담은 컬렉션 전체 삭제 버튼 생성 */}
                <h2>{p.date}</h2>
                {viewType === 'art' ? (
                  <div style={{ display: 'flex', width: '650px', flexWrap: 'wrap' }}>
                    {/* eslint-disable-next-line */}
                    {p.like.map(({ art, img }, index) => {
                      return (
                        <img
                          style={{ width: '200px', height: '300px', margin: '10px 10px 10px 0' }}
                          key={`img-${index + 1}`}
                          src={img}
                          alt={art}
                        />
                      );
                    })}
                  </div>
                ) : (
                  // TODO 리스트 디자인 구상
                  <>
                    {/* eslint-disable-next-line */}
                    {p.like.map(({ art, author }, index) => {
                      return (
                        <div
                          style={{ margin: '10px 10px 10px 0' }}
                          key={`img-${index + 1}`}
                        >{`${author} : ${art}`}</div>
                      );
                    })}
                  </>
                )}
              </Fragment>
            );
          })}
        </TempContainer>
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

  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TempContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 7px; /*스크롤바의 너비*/
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray; /*스크롤바의 색상*/
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent; /*스크롤바 트랙 색상*/
  }
`;

const TempEmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  font-size: 20px;
  color: gray;
  font-weight: bold;
`;

const RightWrapper = styled.div`
  width: 250px;
  border-left: 2px solid lightgray;
  margin: 100px 0 10px 0;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 7px; /*스크롤바의 너비*/
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray; /*스크롤바의 색상*/
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent; /*스크롤바 트랙 색상*/
  }
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
