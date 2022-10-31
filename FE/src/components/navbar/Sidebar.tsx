import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BellBtn from './BellBtn';
import MypageBtn from './MypageBtn';
import SettingBtn from './SettingBtn';
import UserImage from '../atoms/UserImage';
import Settingbar from './Settingbar';

function Sidebar({ close }: { close: boolean }) {
  const [settingOpen, setSettingOpen] = useState(false);

  useEffect(() => {
    // 설정 창을 킨 상태에서 햄버거 바를 닫을 경우, 설정 창도 같이 닫는 코드
    if (!close) {
      setSettingOpen(false);
    }
  }, [close]);
  return (
    <>
      <SidebarContainer toggle={close}>
        <SidebarStyle toggle={close}>
          <SidebarBtnStyle>
            <BellBtn />
            <Link to="/mypage">
              <MypageBtn margin="0.5rem" />
            </Link>
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
              <li>
                <Link to={`/details/00${Math.ceil(9 * Math.random())}`}>Today&#39;s Art</Link>
              </li>
              <li>
                <Link to="/collection">My Collection</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MenuContainer>
          <SettingBtnWrapper>
            <SettingBtn onClick={() => setSettingOpen((curr) => !curr)} />
          </SettingBtnWrapper>
        </SidebarStyle>
      </SidebarContainer>
      <Settingbar open={!close && settingOpen} setOpen={setSettingOpen} />
    </>
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

const SettingBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;
