import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Input from '../atoms/Input';
import TagItem from '../atoms/TagItem';

function ArtTag() {
  const [tagItem, setTagItem] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [randomColor, setRandomColor] = useState<string>('');

  // Enter 누를 시 입력
  const onKeyPress = (e: any) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  // 추가한 태그를 array에 push
  const submitTagItem = () => {
    const updateTagList = [...tagList];
    updateTagList.push(tagItem);
    setTagList(updateTagList);
    setTagItem('');
  };

  // delete Tag
  const deleteTagItem = (e: any) => {
    const deleteTag = e.target.parentElement.firstChild.innerHTML;
    const filteredTagList = tagList.filter((targetTag) => targetTag !== deleteTag);
    setTagList(filteredTagList);
  };

  return (
    <Container>
      <Title>태그 검색 & 추가</Title>
      <Input
        id="TagName"
        placeholder="태그를 입력하세요."
        type="text"
        value={tagItem}
        onChange={(e) => setTagItem(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <TagBox>
        {tagList.map((item) => (
          <TagItem key={`itemId-${item}`} text={item} onClick={deleteTagItem} />
        ))}
      </TagBox>
    </Container>
  );
}

export default ArtTag;

const TagBox = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
  border-radius: 10px;
  background-color: rightgray;
`;

const Container = styled.div`
  width: 100%;
  margin: 20px 0 0 80px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 15px;
`;
