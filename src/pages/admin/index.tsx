import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MenuBar from '../../components/organism/MenuBar';
import AdminSideBarData from '../../components/datas/AdminSideBarData';

function Admin() {
  // TODO 유저정보 api 받아서 구현
  const userData = {
    img: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mv9u2cfDIBp7Xjn0otKqsPtVMBoxyZtP6e2cxZ87hA&s',
      alt: 'user',
    },
    name: '배창현',
    email: 'asd@asd.com',
    phone: '01012345678',
  };

  const links = AdminSideBarData;
  return (
    <Container>
      <MenuBar img={{ src: userData.img.src, alt: userData.img.alt, name: userData.name }} links={links} />
      <OutletBody>
        <Outlet context={userData} />
      </OutletBody>
    </Container>
  );
}

export default Admin;

const Container = styled.div`
  height: 100%;
  width: 1280px;
  margin: 0 auto;
  display: flex;
`;

const OutletBody = styled.div`
  width: 1030px;
  height: 100%;
`;
