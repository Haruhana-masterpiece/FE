import React, { MouseEvent, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { RightArrow, LeftArrow } from './ArrowBtn';

interface MonthProps {
  now: number;
  setMonth: Dispatch<SetStateAction<number>>;
}

function Month({ now, setMonth }: MonthProps) {
  const [currMonth, setCurrMonth] = useState<number>(now);
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  const selectMonth = (e: MouseEvent<HTMLDivElement>) => {
    const month = e.currentTarget.id;
    setCurrMonth(monthList.indexOf(month) + 1);
    setMonth(monthList.indexOf(month) + 1);
    setOpen(false);
  };

  const handleLeftArrow = () => {
    if (currMonth <= 1) {
      return;
    }
    setCurrMonth((curr) => curr - 1);
    setMonth((curr) => curr - 1);
  };

  const handleRightArrow = () => {
    if (currMonth >= 12) {
      return;
    }
    setCurrMonth((curr) => curr + 1);
    setMonth((curr) => curr + 1);
  };

  return (
    <Wrapper onMouseLeave={() => setHover(false)}>
      <ArrowContainer hover={hover}>
        <LeftArrow onClick={handleLeftArrow} />
        <CurrentMonth onClick={handleOpen} onMouseEnter={() => setHover(true)}>
          {monthList[currMonth - 1]}
        </CurrentMonth>
        <RightArrow onClick={handleRightArrow} />
      </ArrowContainer>
      <MonthsContainer open={open}>
        {monthList.map((month) => {
          return (
            <MonthItem onClick={selectMonth} key={month} id={month}>
              {month.slice(0, 3)}
            </MonthItem>
          );
        })}
      </MonthsContainer>
    </Wrapper>
  );
}

export default Month;

const Wrapper = styled.div`
  position: relative;
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

const CurrentMonth = styled.div`
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

const MonthsContainer = styled.div<{ open: boolean }>`
  display: grid;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  grid-template-columns: 50px 50px 50px;
  grid-gap: 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  position: absolute;
  top: 30px;
  left: 6.5%;
  padding: 20px;
  transition: all 0.3s ease;
  z-index: 2;
`;

const MonthItem = styled.div`
  margin: 0 auto;
  width: 50px;
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
