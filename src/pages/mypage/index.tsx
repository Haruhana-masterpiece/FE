import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import MenuBar from '../../components/organism/MenuBar';
import links from '../../components/constants/MypageData';

const initUserData = {
  img: '',
  name: '',
  email: '',
  phone: '',
};

function Mypage() {
  const [userData, setUserData] = useState(initUserData);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3000/mock/user.json');
      setUserData(res.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <MenuBar img={{ src: userData.img, alt: userData.name, name: userData.name }} links={links} />
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
