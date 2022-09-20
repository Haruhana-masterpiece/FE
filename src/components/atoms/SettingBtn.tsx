import React from 'react';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

function SettingBtn() {
  return (
    <SettingBtnStyle>
      <FiSettings />
    </SettingBtnStyle>
  );
}

export default SettingBtn;

const SettingBtnStyle = styled.button`
  float: right;
  color: white;
  font-size: 2rem;
  margin-right: 1rem;
  transition: 0.5s ease;
  :hover {
    transform: rotate(-30deg);
  }
`;
