import React, { FormEvent, useState, FormEventHandler, ChangeEvent } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { VscSettingsGear } from 'react-icons/vsc';
import UserImage from '../../components/atoms/UserImage';
import Input from '../../components/atoms/Input';
import ValidateInput from '../../components/organism/ValidateInput';

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

// TODO 유효성 검사 함수만 별도로 모아서 관리하기
function validatePhone(phone: string): boolean {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
  return regPhone.test(phone);
}

function EditProfile() {
  const userData = useOutletContext<userDataProps>();
  const [phone, setPhone] = useState<string>(userData.phone);
  const [previewImg, setPreviewImg] = useState<string>(userData.img.src);
  const [profileImg, setProfileImg] = useState<FileList | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 메모리 누수 방지를 위해 revokeObjectURL 메소드로 url을 무효화 시켜줌
    // URL.revokeObjectURL(previewImg);
    console.log(profileImg);
  };

  const loadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files;
    setProfileImg(e.target.files);
    if (imgFile) {
      setPreviewImg(URL.createObjectURL(imgFile[0]));
    }
  };
  return (
    <Container>
      <Title>프로필 수정</Title>
      <Form onSubmit={handleSubmit}>
        <UserImage src={previewImg} alt={userData.img.alt} />
        <Label htmlFor="imgFile" style={{ cursor: 'pointer' }}>
          <CustomGear />
          <input style={{ display: 'none' }} type="file" id="imgFile" accept="image/*" onChange={loadImg} />
        </Label>
        <Input id="userName" placeholder="이름" label="이름" type="text" value={userData.name} />
        <Input id="userEmail" placeholder="이메일" label="이메일" type="email" value={userData.email} />
        <ValidateInput
          id="userPhone"
          placeholder="휴대전화"
          label="휴대전화"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          validateValue="(-) 없이"
          validationCheck={validatePhone(phone)}
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
`;

const Form = styled.form<{ onSubmit: FormEventHandler<HTMLFormElement> }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
  > img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  > div {
    margin: 10px;
  }
`;

const Label = styled.label`
  position: relative;
`;

const CustomGear = styled(VscSettingsGear)`
  position: absolute;
  top: -50px;
  right: -70px;
  font-size: 32px;
  transition: all ease 0.5s;

  :hover {
    transform: rotate(90deg);
  }
`;

const ConfirmBtn = styled.button`
  border-radius: 5px;
  border: lightgray 1px solid;
  padding: 10px 30px;
  margin-top: 30px;
  font-size: 18px;
`;
