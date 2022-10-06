import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';

function DeleteAccount() {
  const [isOk, setIsOk] = useState<boolean>(false);
  const [pw, setPw] = useState<string>('');

  const handleIsOk = () => {
    setIsOk((curr) => !curr);
  };

  const handleSubmit = () => {
    // TODO 회원탈퇴 api 요청
  };

  return (
    <Container>
      <Title>회원 탈퇴</Title>
      <WarningBox>
        {!isOk ? (
          <>
            <p>탈퇴 후 복구할 수 없습니다.</p>
            <p>탈퇴 하시겠습니까?</p>
            <DeleteButton onClick={handleIsOk}>탈퇴하기</DeleteButton>
          </>
        ) : (
          <>
            <p>회원 탈퇴를 위해서 패스워드를 입력해주세요.</p>
            <Input
              id="userPassword"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <BtnContainer>
              <CancelButton onClick={handleIsOk}>취소하기</CancelButton>
              <DeleteButton onClick={handleSubmit}>탈퇴하기</DeleteButton>
            </BtnContainer>
          </>
        )}
      </WarningBox>
    </Container>
  );
}

export default DeleteAccount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 36px 44px;
  border-bottom: 2px solid lightgray;
  font-size: 32px;
  font-weight: 400;
`;

const WarningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 63px 44px;

  > p {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const DeleteButton = styled.button`
  background-color: #ff4b4b;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  margin-right: 30px;
`;
