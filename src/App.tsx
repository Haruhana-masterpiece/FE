import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import EditProfile from './pages/Mypage/EditProfile';
import ChangePassword from './pages/Mypage/ChangePassword';
import DeleteAccount from './pages/Mypage/DeleteAccount';
import MyCollection from './pages/MyCollection';
import Layout from './Routes/Layout';
import Sidebar from './components/organism/Sidebar';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
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
