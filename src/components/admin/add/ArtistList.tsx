import React from 'react';
import styled from 'styled-components';
import SelectBtn from '../../atoms/SelectBtn';

interface IProps {
  id: string;
  name: string;
  yofb: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ArtistList({ id, name, yofb, onClick }: IProps) {
  return (
    <TableTr>
      <TalbeTd>{name}</TalbeTd>
      <TalbeTd>{yofb}</TalbeTd>
      <TalbeTd>
        <CSelectBtn key={`Select-${id}`} name={name} onClick={onClick}>
          선택
        </CSelectBtn>
      </TalbeTd>
    </TableTr>
  );
}

export default ArtistList;

const TableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  width: 98%;
  margin: 10px;
`;

const TalbeTd = styled.td`
  margin: 0 50px 0 35px;
`;

const CSelectBtn = styled(SelectBtn)`
  width: 80px;
  padding: 2px;
  margin-bottom: 5px;
  border: 0.5px solid #dee2e6;
  background-color: #e9ecef;
`;
