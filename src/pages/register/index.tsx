import React, { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VscSettingsGear } from 'react-icons/vsc';
import ValidateInput from '../../components/organism/ValidateInput';
import { validateEmail, validatePhone, validatePw } from '../../utils/validate';
import UserImage from '../../components/atoms/UserImage';

function Register() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [confirmPw, setConfirmPw] = useState<string>('');
  const [previewImg, setPreviewImg] = useState<string>('');
  const [profileImg, setProfileImg] = useState<FileList | null>(null);

  const navigate = useNavigate();

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      URL.revokeObjectURL(previewImg);
      // const res = await axios.post(
      //   'http://localhost:8888/api/register',
      //   {
      //     id,
      //     password: pw,
      //     email,
      //     phone_number: phone,
      //   },
      //   { withCredentials: true },
      // );
      // if (res.data === 'OK') {
      //   navigate('/');
      // }
      console.log(name, email, phone, pw, previewImg, profileImg);
    } catch (e: any) {
      console.error(e);
    }
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
      <Logo>
        <Link to="/login">LOGO</Link>
      </Logo>
      <Form onSubmit={handleRegister}>
        <ProfileWrapper>
          <ImageWrapper>
            {/* TODO 이미지 값 없이 가입 요청할 경우 기본이미지 제공 */}
            {previewImg ? <UserImage src={previewImg} alt="유저 프로필 이미지" /> : <DefaultImage />}
            <Label htmlFor="imgFile" style={{ cursor: 'pointer' }}>
              <CustomGear />
              <input style={{ display: 'none' }} type="file" id="imgFile" accept="image/*" onChange={loadImg} />
            </Label>
          </ImageWrapper>

          <ValidateInput
            id="name"
            label="이름"
            placeholder="이름"
            type="text"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            validateValue="2자 이상"
            validationCheck={name.length >= 2}
          />
        </ProfileWrapper>

        {/* TODO 중복확인 기능 넣는지??? */}
        {/* <button type="button" onClick={() => console.log('중복확인 하기')}>
          이메일 중복확인
        </button> */}
        <ValidateInput
          id="email"
          label="이메일"
          placeholder="이메일"
          type="email"
          size="large"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validateValue="@ 포함"
          validationCheck={validateEmail(email)}
        />
        <ValidateInput
          id="phone"
          label="휴대전화"
          placeholder="휴대전화"
          type="tel"
          size="large"
          value={phone}
          onChange={(e) => {
            // 하이픈 자동입력
            const phoneNumber: string[] = [];
            phoneNumber.push(e.target.value);
            if (e.target.value.length === 3 || e.target.value.length === 8) {
              if (e.target.value.length > phone.length) {
                phoneNumber.push('-');
              }
            }
            setPhone(phoneNumber.join(''));
          }}
          validateValue="(-) 없이"
          validationCheck={validatePhone(phone)}
        />
        <ValidateInput
          id="password"
          label="비밀번호"
          placeholder="비밀번호"
          type="password"
          size="large"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          validateValue="8자 이상"
          validationCheck={validatePw(pw)}
        />
        <ValidateInput
          id="confirmPw"
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          type="password"
          size="large"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          validateValue="비밀번호와 동일"
          validationCheck={confirmPw.length >= 8 && pw === confirmPw}
        />
        <SubmitBtn>가입하기</SubmitBtn>
      </Form>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  width: 250px;
  margin-bottom: 55px;
  text-align: center;
`;

const Form = styled.form`
  > div {
    margin-bottom: 10px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 170px;
    height: 170px;
    margin: 0 30px 0 0;
  }
`;

const DefaultImage = styled.div`
  background-color: lightgray;
  border-radius: 50%;
  width: 170px;
  height: 170px;
  margin-right: 30px;
`;

const Label = styled.label`
  position: relative;
`;

const CustomGear = styled(VscSettingsGear)`
  position: absolute;
  top: -45px;
  right: 30px;
  font-size: 32px;
  transition: all ease 0.5s;

  :hover {
    transform: rotate(90deg);
  }
`;

const SubmitBtn = styled.button`
  width: 400px;
  height: 45px;
  margin: 17px 0;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  background-color: black;
`;
