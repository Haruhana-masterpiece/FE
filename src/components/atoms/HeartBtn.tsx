import React, { useState } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

interface btnProps {
  size: string;
  color: string;
}

function HeartBtn({ size, color }: btnProps) {
  const [bookmark, setBookmark] = useState(true);
  return bookmark ? (
    <HiOutlineHeart
      size={size}
      color={color}
      style={{
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={() => setBookmark(false)}
    />
  ) : (
    <HiHeart
      size={size}
      style={{
        color: 'red',
        cursor: 'pointer',
      }}
      onClick={() => setBookmark(true)}
    />
  );
}

export default HeartBtn;
