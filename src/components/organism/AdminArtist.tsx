import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import CheckBox from '../atoms/CheckBox';

function Artist() {
  const [boxChecked, setBoxChecked] = useState<boolean>(false);
  console.log(boxChecked);
  return (
    <Container>
      <CheckBox text="작가 미지정" checked={boxChecked} onChange={() => setBoxChecked(!boxChecked)} />
    </Container>
  );
}

export default Artist;

const Container = styled.div`
  display: flex;
`;
