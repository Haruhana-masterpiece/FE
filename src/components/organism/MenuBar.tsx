import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuBox from '../atoms/MenuBox';
import UserImage from '../atoms/UserImage';
// import Logo from '../atoms/Logo';

type ImgType = {
  src: string;
  alt: string;
  name: string;
};

type LinkType = {
  link: string;
  text: string;
};

interface IProps {
  img: ImgType;
  links: LinkType[];
}

function MenuBar({ img, links }: IProps) {
  // MenuBar의 default메뉴를 첫 번째 메뉴로 활성화하고, 각 메뉴 선택 시 해당 메뉴를 활성화시키는 코드
  const location = useLocation();
  const [currLinkIndex, setCurrLinkIndex] = useState<number>(0);

  useEffect(() => {
    links.forEach(({ link }, index) => {
      if (location.pathname.includes(link)) {
        setCurrLinkIndex(index);
      }
    });
  }, [location, links]);

  return (
    <MenuBox>
      {/* <Logo /> */}
      <UserImage src={img.src} alt={img.alt} name={img.name} />
      <LinkContainer>
        {links.map(({ link, text }, idx) => {
          return (
            <Link to={link} key={`${link}-link`}>
              <Text active={idx === currLinkIndex}>{text}</Text>
            </Link>
          );
        })}
      </LinkContainer>
    </MenuBox>
  );
}

export default MenuBar;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 57px;

  > a {
    margin-bottom: 32px;
    text-align: center;
  }
`;

const Text = styled.span<{ active: boolean }>`
  font-size: 24px;
  color: ${({ active }) => (active ? 'white' : '#979797')};
`;
