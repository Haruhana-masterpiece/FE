import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/mypage';
import EditProfile from './pages/mypage/EditProfile';
import ChangePassword from './pages/mypage/ChangePassword';
import DeleteAccount from './pages/mypage/DeleteAccount';
import Layout from './routes/Layout';
import Admin from './pages/admin';
import AdminHome from './pages/admin/AdminHome';
import UserManagement from './pages/admin/UserManagement';
import ArtAdd from './pages/admin/ArtAdd';
import ArtEdit from './pages/admin/ArtEdit';
import Details from './pages/details/Details';
import MyCollection from './pages/myCollection';
import Tags from './pages/details/Tags';

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
            <Route path="/tags/:value" element={<Tags />} />
            <Route path="/collection" element={<MyCollection />} />
          </Route>
          {/* 마이 페이지 */}
          <Route path="/mypage" element={<Mypage />}>
            <Route index element={<EditProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="changePssword" element={<ChangePassword />} />
            <Route path="deleteAccount" element={<DeleteAccount />} />
          </Route>
          {/* 관리자 페이지 */}
          {/* PrivateRoute 구현 */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminHome />} />
            <Route path="adminHome" element={<AdminHome />} />
            <Route path="artAdd" element={<ArtAdd />} />
            <Route path="artEdit" element={<ArtEdit />} />
            <Route path="userManagement" element={<UserManagement />} />
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
