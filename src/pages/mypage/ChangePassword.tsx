import React, { FormEvent, FormEventHandler, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';
import ValidateInput from '../../components/organism/ValidateInput';

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
    // TODO 수정 api 요청 시 기존 비밀번호 맞는지 체크하고 틀리면 에러반환, 맞으면 그대로 진행
  };
  return (
    <Container>
      <Title>비밀번호 변경</Title>
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
        <ValidateInput
          id="changePw"
          placeholder="변경할 비밀번호"
          label="변경할 비밀번호"
          type="password"
          value={changePw}
          onChange={(e) => setChangePw(e.target.value)}
          validateValue="8자 이상"
          validationCheck={changePw.length >= 8}
        />
        <ValidateInput
          id="confirmPw"
          placeholder="비밀번호 확인"
          label="비밀번호 확인"
          type="password"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          validateValue="비밀번호와 동일"
          validationCheck={confirmPw.length >= 8 && changePw === confirmPw}
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
`;

const Form = styled.form<{ onSubmit: FormEventHandler<HTMLFormElement> }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;

  > div {
    margin: 10px;
  }
`;

const ConfirmBtn = styled.button`
  border-radius: 5px;
  border: lightgray 1px solid;
  padding: 10px 30px;
  margin-top: 30px;
  font-size: 18px;
`;
