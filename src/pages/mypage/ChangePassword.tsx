import React, { FormEvent, FormEventHandler, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';

type ImgType = {
  src: string;
  alt: string;
};

interface userDataProps {
  email: string;
  img: ImgType;
  name: string;
  phone: string;
}

function ChangePassword() {
  const userData = useOutletContext<userDataProps>();
  const [userPw, setUserPw] = useState<string>('');
  const [changePw, setChangePw] = useState<string>('');
  const [confirmPw, setConfirmPw] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // TODO 비밀번호 유효성 검사
  return (
    <Container>
      <Title>Password</Title>
      <Form onSubmit={handleSubmit}>
        <Input id="userEmail" placeholder="이메일" label="이메일" type="email" value={userData.email} />
        <Input
          id="userPw"
          placeholder="비밀번호"
          label="비밀번호"
          type="password"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
        <Input
          id="changePw"
          placeholder="변경할 비밀번호"
          label="변경할 비밀번호"
          type="password"
          value={changePw}
          onChange={(e) => setChangePw(e.target.value)}
        />
        <Input
          id="confirmPw"
          placeholder="비밀번호 확인"
          label="비밀번호 확인"
          type="password"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
        />
        <ConfirmBtn>수정하기</ConfirmBtn>
      </Form>
    </Container>
  );
}

export default ChangePassword;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 36px 44px;
  border-bottom: 2px solid lightgray;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 100px;
`;

const Form = styled.form<{ onSubmit: FormEventHandler<HTMLFormElement> }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 20px;
  }
`;

const ConfirmBtn = styled.button`
  border-radius: 5px;
  border: lightgray 1px solid;
  padding: 10px 30px;
  margin-top: 30px;
  font-size: 18px;
`;
