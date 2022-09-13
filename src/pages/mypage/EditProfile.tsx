import React, { FormEvent, useState, FormEventHandler, ChangeEvent } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import UserImage from '../../components/atoms/UserImage';
import Input from '../../components/atoms/Input';

type ImgType = {
  src: string;
  alt: string;
};

interface userDataProps {
  email: string;
  img: ImgType;
  name: string;
  phone: string;
}

function EditProfile() {
  const userData = useOutletContext<userDataProps>();
  const [phone, setPhone] = useState<string>(userData.phone);
  const [previewImg, setPreviewImg] = useState<string>(userData.img.src);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 메모리 누수 방지를 위해 revokeObjectURL 메소드로 url을 무효화 시켜줌
    URL.revokeObjectURL(previewImg);
  };

  const loadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files;
    if (imgFile) {
      setPreviewImg(URL.createObjectURL(imgFile[0]));
    }
  };
  // TODO 휴대전화 유효성 검사
  return (
    <Container>
      <Title>Edit Profile</Title>
      <Form onSubmit={handleSubmit}>
        <UserImage src={previewImg} alt={userData.img.alt} />
        <label htmlFor="imgFile" style={{ cursor: 'pointer' }}>
          이미지 추가하기
          <input style={{ display: 'none' }} type="file" id="imgFile" accept="image/*" onChange={loadImg} />
        </label>
        <Input id="userName" placeholder="이름" label="이름" type="text" value={userData.name} />
        <Input id="userEmail" placeholder="이메일" label="이메일" type="email" value={userData.email} />
        <Input
          id="userPhone"
          placeholder="휴대전화"
          label="휴대전화"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <ConfirmBtn>수정하기</ConfirmBtn>
      </Form>
    </Container>
  );
}

export default EditProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 36px 44px;
  border-bottom: 2px solid lightgray;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 86px;
`;

const Form = styled.form<{ onSubmit: FormEventHandler<HTMLFormElement> }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  > div {
    margin: 20px;
  }
`;

const ConfirmBtn = styled.button`
  border-radius: 5px;
  border: lightgray 1px solid;
  padding: 10px 30px;
  margin-top: 30px;
  font-size: 18px;
`;
