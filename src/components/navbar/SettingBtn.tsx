import React from 'react';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

function SettingBtn() {
  return (
    <SettingBtnStyle>
      <CustomBtn />
    </SettingBtnStyle>
  );
}

export default SettingBtn;

const SettingBtnStyle = styled.button`
  float: right;
  color: white;
  font-size: 2rem;
  margin-right: 1rem;
`;

const CustomBtn = styled(FiSettings)`
  transition: 0.5s ease;
  :hover {
    transform: rotate(90deg);
  }
`;
