import React from 'react';
import { HiOutlineShare } from 'react-icons/hi';

interface btnProps {
  size: string;
  color: string;
}

function ShareBtn({ size, color }: btnProps) {
  return <HiOutlineShare size={size} color={color} style={{ cursor: 'pointer' }} />;
}

export default ShareBtn;
