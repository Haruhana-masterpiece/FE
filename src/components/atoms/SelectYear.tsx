import React, { MouseEvent, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { RightArrow, LeftArrow } from './ArrowBtn';

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
  const [hover, setHover] = useState<boolean>(false);
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

  const handleLeftArrow = () => {
    setCurrYear((curr) => curr - 1);
    setYear((curr) => curr - 1);
  };

  const handleRightArrow = () => {
    setCurrYear((curr) => curr + 1);
    setYear((curr) => curr + 1);
  };

  return (
    <Wrapper onMouseLeave={() => setHover(false)}>
      <ArrowContainer hover={hover}>
        <LeftArrow onClick={handleLeftArrow} />
        <CurrentYear onClick={handleOpen} onMouseEnter={() => setHover(true)}>
          {currYear}
        </CurrentYear>
        <RightArrow onClick={handleRightArrow} />
      </ArrowContainer>
      <YearsContainer open={open}>
        {yearList.map((year) => {
          return (
            <YearItem onClick={selectYear} key={year}>
              {year}
            </YearItem>
          );
        })}
      </YearsContainer>
    </Wrapper>
  );
}

export default Year;

const Wrapper = styled.div`
  position: relative;
`;

const CurrentYear = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const ArrowContainer = styled.div<{ hover: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  > div:first-child,
  > div:last-child {
    visibility: ${({ hover }) => (hover ? 'visible' : 'hidden')};
    opacity: ${({ hover }) => (hover ? 1 : 0)};
    transition: all 0.3s ease;
  }
`;

const YearsContainer = styled.div<{ open: boolean }>`
  display: grid;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  grid-template-columns: 50px 50px 50px;
  grid-gap: 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  position: absolute;
  top: -150px;
  left: 6%;
  padding: 20px;
  transition: all 0.3s ease;
`;

const YearItem = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: lightgray;
  }

  :active {
    background-color: gray;
    color: white;
  }
`;
