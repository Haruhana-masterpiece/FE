import React, { MouseEvent, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
// import DaysIcon from '../atoms/DaysIcon';

interface MonthProps {
  now: number;
  setMonth: Dispatch<SetStateAction<number>>;
}

function Month({ now, setMonth }: MonthProps) {
  const [currMonth, setCurrMonth] = useState<number>(now);
  const [open, setOpen] = useState<boolean>(false);
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  const selectMonth = (e: MouseEvent<HTMLDivElement>) => {
    setCurrMonth(Number(e.currentTarget.innerText));
    setMonth(Number(e.currentTarget.innerText));
    setOpen((curr) => !curr);
  };
  return (
    <>
      <CurrentMonth onClick={handleOpen}>{currMonth}</CurrentMonth>
      {open && (
        <MonthsContainer>
          {monthList.map((month) => {
            return (
              <MonthItem onClick={selectMonth} key={month}>
                {month}
              </MonthItem>
            );
          })}
        </MonthsContainer>
      )}
    </>
  );
}

export default Month;

const CurrentMonth = styled.div`
  background-color: aliceblue;
  padding: 10px;
  cursor: pointer;
`;

const MonthsContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;
`;

const MonthItem = styled.div`
  width: 40px;
  height: 25px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
