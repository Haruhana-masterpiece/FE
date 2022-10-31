import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import SettingBtn from './SettingBtn';
import SelectBtn from './SelectBtn';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Settingbar({ open, setOpen }: IProps) {
  const [tts, setTts] = useState('male');
  const [display, setDisplay] = useState('normal');
  const [colorFilter, setColorFilter] = useState(true);

  useEffect(() => {
    // TODO 설정 값이 변할 때마다 api 호출하여 설정 변경할 수 있도록 하기.
    // 스로틀링 지정해서 광클은 막자 0.5초 정도?
    console.log(tts, display, colorFilter);
  }, [tts, display, colorFilter]);
  return (
    <SettingbarContainer toggle={open}>
      <SettingbarStyle toggle={open}>
        <Head>Settings</Head>
        <SettingsContainer>
          <SettingWrapper>
            <h2>TTS</h2>
            <div>
              <SelectBtn value="남성" onClick={() => setTts('male')} active={tts === 'male'} />
              <SelectBtn value="여성" onClick={() => setTts('female')} active={tts === 'female'} />
              <SelectBtn value="아이" onClick={() => setTts('child')} active={tts === 'child'} />
            </div>
          </SettingWrapper>
          <SettingWrapper>
            <h2>DisPlay</h2>
            <div>
              <SelectBtn value="NORMAL" onClick={() => setDisplay('normal')} active={display === 'normal'} />
              <SelectBtn value="DARK" onClick={() => setDisplay('dark')} active={display === 'dark'} />
            </div>
          </SettingWrapper>
          <SettingWrapper>
            <h2>Color Filter</h2>
            <div>
              <SelectBtn value="ON" onClick={() => setColorFilter(true)} active={colorFilter === true} />
              <SelectBtn value="OFF" onClick={() => setColorFilter(false)} active={colorFilter === false} />
            </div>
          </SettingWrapper>
        </SettingsContainer>
        <SettingBtnWrapper>
          <SettingBtn onClick={() => setOpen((curr) => !curr)} />
        </SettingBtnWrapper>
      </SettingbarStyle>
    </SettingbarContainer>
  );
}

export default Settingbar;

const SettingbarContainer = styled.div<{ toggle: boolean }>`
  position: absolute;
  right: 0;
  overflow: hidden;
  width: ${(props) => (props.toggle ? '25rem' : '0')};
  transition: ease 0.3s;
  height: 100vh;
`;

const SettingbarStyle = styled.div<{ toggle: boolean }>`
  width: 25rem;
  padding: 0.5rem;
  position: absolute;
  right: ${(props) => (props.toggle ? '0' : '-25rem')};
  height: 100vh;
  transition: ease 0.3s;
  background-color: black;
  color: white;
`;

const Head = styled.h2`
  color: white;
  position: absolute;
  left: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0.25rem;
`;

const SettingsContainer = styled.div`
  line-height: 4rem;
  margin-top: 8rem;
  color: white;
  font-size: 1.3rem;
  height: 75%;
`;

const SettingWrapper = styled.div`
  margin: 5rem 0;

  > h2 {
    margin-left: 2rem;
  }
  > div {
    display: flex;
    margin: 0 auto;
    width: 20rem;
    align-items: center;
  }
`;

const SettingBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;
