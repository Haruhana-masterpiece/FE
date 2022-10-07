import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

function MypageBtn({ margin }: { margin: string }) {
  return <FaRegUserCircle style={{ marginLeft: margin }} />;
}
export default MypageBtn;
