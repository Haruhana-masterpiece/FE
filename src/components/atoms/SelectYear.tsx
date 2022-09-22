import React, { MouseEvent, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
// import DaysIcon from '../atoms/DaysIcon';

function createYearList(year: number) {
  const list = [];
  for (let i = 4; i >= 1; i -= 1) {
    list.push(year - i);
  }
  list.push(year);
  for (let i = 1; i <= 4; i += 1) {
    list.push(year + i);
  }
  return list;
}

interface YearProps {
  now: number;
  setYear: Dispatch<SetStateAction<number>>;
}

function Year({ now, setYear }: YearProps) {
  const [currYear, setCurrYear] = useState<number>(now);
  const [open, setOpen] = useState<boolean>(false);
  const [yearList, setYearList] = useState<number[]>([]);

  const handleOpen = () => {
    setOpen((curr) => !curr);
    setYearList(createYearList(currYear));
  };

  const selectYear = (e: MouseEvent<HTMLDivElement>) => {
    setCurrYear(Number(e.currentTarget.innerText));
    setYearList(createYearList(currYear));
    setYear(Number(e.currentTarget.innerText));
    setOpen((curr) => !curr);
  };
  return (
    <>
      <CurrentYear onClick={handleOpen}>{currYear}</CurrentYear>
      {open && (
        <YearsContainer>
          {yearList.map((year) => {
            return (
              <YearItem onClick={selectYear} key={year}>
                {year}
              </YearItem>
            );
          })}
        </YearsContainer>
      )}
    </>
  );
}

export default Year;

const CurrentYear = styled.div`
  background-color: aliceblue;
  padding: 10px;
  cursor: pointer;
`;

const YearsContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;
`;

const YearItem = styled.div`
  width: 40px;
  height: 25px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
