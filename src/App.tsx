import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/Main';
import Sidebar from './components/organism/Sidebar';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Sidebar />
        <Main />
      </div>
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
