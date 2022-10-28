import React, { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import ArtistList from '../../components/admin/add/ArtistList';
import ArtItem from '../../components/admin/edit/Item';
import ArtMockData from '../../components/constants/ArtMockData';
import SearchBar from '../../components/organism/SearchBar';

interface SearchValue {
  category: string;
  result: string;
}

interface ArtData {
  title: string;
  description: string;
  image: string;
  painted_at: string;
  author: string;
  tags: string[];
}

function ArtEdit() {
  const [searchValue, setSearchValue] = useState<SearchValue | null>(null);
  const [artList, setArtList] = useState(ArtMockData);

  const [categoryValue, setCategoryValue] = useState<string | undefined>('');
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [findData, setFindData] = useState(false);

  useEffect(() => {
    setCategoryValue(searchValue?.category);
    setInputValue(searchValue?.result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  // 작가, 작품 명에 따른 filter 구현
  // 1. 입력창이 빈 값 일 때  => 전체 목록 가져오기
  // 2. 입력창과 일치하는 값이 있을 때 => 해당 목록만 출력
  // 3. 입력창과 일치하는 값이 없을 때 => 빈값 & 검색된 결과가 없습니다 문구 출력()
  useEffect(() => {
    if (inputValue === '') {
      setArtList(ArtMockData);
    } else if (inputValue !== '') {
      if (categoryValue === 'ArtistRadioBtn') {
        const result = ArtMockData.filter((item) => item.author === inputValue);
        setArtList(result);
      } else if (categoryValue === 'ArtNameRadioBtn') {
        const result = ArtMockData.filter((item) => item.title === inputValue);
        setArtList(result);
      } else {
        setFindData(!findData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryValue, inputValue]);

  return (
    <>
      <div>
        <SearchBar
          setValue={setSearchValue}
          radio1="작가명"
          radio1Id="ArtistRadioBtn"
          radio2="작품명"
          radio2Id="ArtNameRadioBtn"
        />
      </div>
      {findData ? (
        <div>
          {artList.map((item) => {
            return (
              <ArtItem
                title={item.title}
                authorId={item.author}
                key={`ArtId_${item.author}`}
                img={item.image}
                paintedAt={item.painted_at}
                tag={item.tags}
              />
            );
          })}
        </div>
      ) : (
        <div>검색한 결과를 찾을 수 없습니다.</div>
      )}
    </>
  );
}

export default ArtEdit;
