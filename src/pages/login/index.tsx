import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/atoms/Input';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [idError, setIdError] = useState<boolean>(false);
  const [pwError, setPwError] = useState<boolean>(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIdError(false);
      setPwError(false);
      // TODO 로그인 api 요청
      // await axios.post(
      //   'http://localhost:8888/api/login',
      //   { id, password: pw },
      //   {
      //     withCredentials: true,
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      throw new Error('dd');
      // navigate('/');
    } catch (e: any) {
      // if (e.response.data.code === 'USER_NOT_FOUND') {
      setIdError(true);
      // }
      // if (e.response.data.code === 'INVALID_PASSWORD') {
      setPwError(true);
      // }
    }
  };
  return (
    <Container>
      <Logo>LOGO</Logo>
      <form onSubmit={handleLogin}>
        <Input
          id="email"
          placeholder="이메일"
          size="large"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorMessage visible={idError}>가입된 유저가 아닙니다.</ErrorMessage>
        <Input
          id="password"
          placeholder="비밀번호"
          size="large"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <ErrorMessage visible={pwError}>비밀번호를 다시 확인해주세요.</ErrorMessage>
        <SubmitBtn>로그인</SubmitBtn>
      </form>
      <LinkContainer>
        <Link to="/register">회원가입</Link>
        <Link to="/findEmail">이메일 찾기</Link>
        <Link to="#findPW">비밀번호 찾기</Link>
      </LinkContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  width: 250px;
  margin-bottom: 55px;
  text-align: center;
`;

const LinkContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
`;

const ErrorMessage = styled.div<{ visible: boolean }>`
  width: 400px;
  color: #ff2f2f;
  font-size: 12px;
  padding-left: 5px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
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
