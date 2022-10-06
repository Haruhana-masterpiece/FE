import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/mypage';
import EditProfile from './pages/mypage/EditProfile';
import ChangePassword from './pages/mypage/ChangePassword';
import DeleteAccount from './pages/mypage/DeleteAccount';
import Layout from './routes/Layout';
import Details from './pages/details/Details';
import MyCollection from './pages/myCollection';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/details/:index" element={<Details />} />
            {/* <Route path="/collection" element={<MyCollection />} /> */}
            <Route path="/collection" element={<MyCollection />} />
          </Route>
          {/* 마이 페이지 */}
          <Route path="/mypage" element={<Mypage />}>
            <Route index element={<EditProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="changePssword" element={<ChangePassword />} />
            <Route path="deleteAccount" element={<DeleteAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
/* other styles */
* {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
body {
  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;
}
*, :after, :before {
    box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    cursor: pointer;
  }
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
ul,
ol {
  list-style: none;
}
`;
