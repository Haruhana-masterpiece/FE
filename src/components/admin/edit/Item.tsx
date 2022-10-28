import React from 'react';

interface IProps {
  title: string;
  authorId: string;
  key: string;
  img: string; // TODO: imageData Type 설정
  paintedAt: string;
  tag: string[];
}

function ArtItem({ title, authorId, ...rest }: IProps) {
  // 작가명과 작품명 출력
  // 수정 & 삭제 버튼 구현
  // 수정 => Form 으로 보내기
  // 삭제 => 해당
  return (
    <>
      <li>{title}</li>
      <li>{authorId}</li>
    </>
  );
}

export default ArtItem;
