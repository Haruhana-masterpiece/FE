import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/atoms/Input';

function FindEmail() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // TODO 이메일 찾기 api 요청
      // await axios.post(
      //   'http://localhost:8888/api/login',
      //   { id, password: pw },
      //   {
      //     withCredentials: true,
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
    } catch (e: any) {
      console.error(e);
      // TODO 검색 결과 어떤식으로 보여줄 것인지???
      // 모달? 아니면 페이지?
    }
  };
  return (
    <Container>
      <Logo>
        <Link to="/login">LOGO</Link>
      </Logo>
      <LinkContainer>
        <Link to="/findEmail">이메일 찾기</Link>
        <Link to="#findPW">비밀번호 찾기</Link>
      </LinkContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="이름"
          size="large"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id="phone"
          placeholder="휴대전화"
          size="large"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <SubmitBtn>이메일 찾기</SubmitBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  > div {
    margin-bottom: 14.5px;
  }
`;

const Logo = styled.h1`
  width: 250px;
  margin-bottom: 25px;
  text-align: center;
`;

const LinkContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const SubmitBtn = styled.button`
  width: 400px;
  height: 45px;
  margin: 17px 0;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  background-color: black;
`;

export default FindEmail;
