import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MenuBar from '../../components/organism/MenuBar';
import links from '../../components/constants/MypageData';

function Mypage() {
  // TODO 유저정보 api를 통해 받아온 후 전달
  const userData = {
    img: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mv9u2cfDIBp7Xjn0otKqsPtVMBoxyZtP6e2cxZ87hA&s',
      alt: 'user',
    },
    name: '최정훈',
    email: 'asd@asd.com',
    phone: '01023232121',
  };

  return (
    <Container>
      <MenuBar img={{ src: userData.img.src, alt: userData.img.alt, name: userData.name }} links={links} />
      <Body>
        <Outlet context={userData} />
      </Body>
    </Container>
  );
}

export default Mypage;

const Container = styled.div`
  height: 100vh;
  width: 1280px;
  margin: 0 auto;
  display: flex;
`;

const Body = styled.div`
  width: 1030px;
  height: 100vh;
  overflow-y: scroll;
`;
