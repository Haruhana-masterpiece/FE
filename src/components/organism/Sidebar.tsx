import React from 'react';
import styled from 'styled-components';
import BellBtn from '../atoms/BellBtn';
import MypageBtn from '../atoms/MypageBtn';
import SettingBtn from '../atoms/SettingBtn';
import UserImage from '../atoms/UserImage';

function Sidebar({ close }: { close: boolean }) {
  return (
    <SidebarContainer toggle={close}>
      <SidebarStyle toggle={close}>
        <SidebarBtnStyle>
          <BellBtn />
          <MypageBtn margin="0.5rem" />
        </SidebarBtnStyle>
        <ProfileContainer>
          <UserImage
            src="https://blogpfthumb-phinf.pstatic.net/20110901_251/newborn18_1314817631012_SX9V6o_jpg/%BB%E7%C1%F8090904_005_%BC%F6%C1%A41_%BC%F6%C1%A41.jpg?type=w161"
            alt="프로필이미지"
            name="sangjin yoon"
          />
        </ProfileContainer>
        <MenuContainer>
          <ul>
            <li>Today&#39;s Art</li>
            <li>My Collection</li>
            <li>About</li>
          </ul>
        </MenuContainer>
        <SettingBtn />
      </SidebarStyle>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div<{ toggle: boolean }>`
  position: absolute;
  right: 0;
  overflow: hidden;
  width: ${(props) => (props.toggle ? '0' : '25rem')};
  transition: ease 0.3s;
  height: 100vh;
`;

const SidebarStyle = styled.div<{ toggle: boolean }>`
  z-index: 2;
  width: 25rem;
  padding: 0.5rem;
  position: absolute;
  right: ${(props) => (props.toggle ? '-25rem' : '0')};
  height: 100vh;
  transition: ease 0.3s;
  background-color: black;
`;

const SidebarBtnStyle = styled.button`
  border: none;
  display: flex;
  color: white;
  position: absolute;
  right: 2.5rem;
  background-color: transparent;
  font-size: 1.5rem;
  margin: 0.25rem;
`;

const ProfileContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
  height: 20%;
  color: white;
`;

const MenuContainer = styled.div`
  text-align: center;
  line-height: 4rem;
  padding-top: 2rem;
  color: white;
  font-size: 1.5rem;
  height: 66%;
`;
