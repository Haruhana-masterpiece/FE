import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import axios from 'axios';
import SelectYear from './SelectYear';
import SelectMonth from './SelectMonth';
import DaysList from './DaysList';

type likeDataType = {
  date: string;
  like: string[];
};

interface IProps {
  setMasterpiece: Dispatch<SetStateAction<likeDataType[]>>;
}

function Calendar({ setMasterpiece }: IProps) {
  const [year, setYear] = useState<number>(dayjs().get('year'));
  const [month, setMonth] = useState<number>(dayjs().get('month') + 1);
  const [likeData, setLikeData] = useState<likeDataType[]>([]);

  async function getData() {
    const res = await axios('http://localhost:3000/mock/collection.json');
    const { data } = res;
    const filteredData = data.filter((d: likeDataType) => {
      return dayjs(d.date).isSame(`${year}-${month}`, 'month');
    });
    setLikeData(filteredData);
    setMasterpiece(filteredData);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [year, month]);

  return (
    <Wrapper>
      <SelectYear now={year} setYear={setYear} />
      <SelectMonth now={month} setMonth={setMonth} />
      <DaysList year={year} month={month} data={likeData} />
    </Wrapper>
  );
}

export default Calendar;

const Wrapper = styled.div`
  padding: 10px;
  width: 250px;
  margin: 0 auto;

  > div:first-child {
    margin-bottom: 5px;
  }

  > div:last-child {
    margin-top: 30px;
  }
`;
