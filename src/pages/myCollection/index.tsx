import React from 'react';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';

function MyCollection() {
  return (
    <Wrapper>
      <LeftWrapper>
        <h1>Collection</h1>
      </LeftWrapper>
      <RightWrapper>
        {/* TODO 임시 코드, 추후 기능 추가하여 컴포넌트로 추가해야함. */}
        <History>
          <h2>History</h2>
          <p>총 즐겨찾기 수 : 00</p>
          <p>오늘의 작품 수 : 00</p>
          <p>가장 좋아하는 작가 : 00</p>
          <p>이 달의 출석 수: 00</p>
        </History>
        <Calendar />
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

// TODO 기능 구현 후 지워야 함
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
