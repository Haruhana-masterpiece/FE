import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiImages, BiListUl } from 'react-icons/bi';
import { GoX } from 'react-icons/go';
import Calendar from '../../components/calendar/Calendar';
import SearchBar from '../../components/organism/SearchBar';
import ArtContainer from '../../components/organism/ArtContainer';

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

        <MasterpieceContainer>
          <ViewTypeWrapper>
            <ViewBtn onClick={() => setViewType('art')}>
              <BiImages />
            </ViewBtn>
            <ViewBtn onClick={() => setViewType('list')}>
              <BiListUl />
            </ViewBtn>
          </ViewTypeWrapper>
          {searchList.length === 0 && <EmptyList>검색 결과와 일치하는 항목이 없습니다.</EmptyList>}

          {searchList.map((collectionArt, index) => {
            return (
              <Fragment key={`masterpiece-${index + 1}`}>
                <h2>
                  {collectionArt.date}
                  {/* TODO 호버시 생성  */}
                  {/* TODO 컬렉션 삭제는 api요청하는 쪽으로 해야함 */}
                  <button type="button" onClick={() => console.log('삭제하기')}>
                    <GoX />
                  </button>
                </h2>

                {viewType === 'art' ? (
                  <ArtWrapper>
                    {/* eslint-disable-next-line */}
                    {collectionArt.like.map(({ art, img }, index) => {
                      return <ArtContainer url={img} data={art} type="collection" key={`${art}-${index + 1}`} />;
                    })}
                  </ArtWrapper>
                ) : (
                  <ListWrapper>
                    <Category>
                      <li>작가명</li>
                      <li>작품명</li>
                    </Category>
                    {/* eslint-disable-next-line */}
                    {collectionArt.like.map(({ art, author }, index) => {
                      return (
                        <ArtList key={`img-${index + 1}`}>
                          <li>{author}</li>
                          <li>{art}</li>
                        </ArtList>
                      );
                    })}
                  </ListWrapper>
                )}
              </Fragment>
            );
          })}
        </MasterpieceContainer>
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
  min-width: 1030px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MasterpieceContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

const ViewTypeWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 10px;
`;

const ViewBtn = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  font-size: 20px;
  color: gray;
  font-weight: bold;
`;

const ArtWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListWrapper = styled.div`
  margin: 20px 0;
`;

const Category = styled.ul`
  display: flex;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;

  > li:first-child {
    width: 200px;
  }

  > li {
    border-left: 5px solid lightgray;
    border-radius: 2px;
    padding-left: 15px;
  }
`;

const ArtList = styled.ul`
  display: flex;
  margin-bottom: 10px;

  > li:first-child {
    width: 200px;
  }

  > li {
    padding-left: 20px;
    overflow-wrap: break-word;
  }
`;

const RightWrapper = styled.div`
  min-width: 250px;
  border-left: 2px solid lightgray;
  margin: 100px 0 0;
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
