import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SelectYear from '../atoms/SelectYear';
import SelectMonth from '../atoms/SelectMonth';
import DaysList from '../atoms/DaysList';

type likeDataType = {
  date: string;
  like: number;
};

function Calendar() {
  const [year, setYear] = useState<number>(dayjs().get('year'));
  const [month, setMonth] = useState<number>(dayjs().get('month') + 1);
  const [likeData, setLikeData] = useState<likeDataType[]>([]);

  useEffect(() => {
    // TODO api 요청하여 날짜별 컬렉션한 개수를 전달해줘야 함
    if (month === 9) {
      const data: likeDataType[] = [
        {
          date: '2022-09-01',
          like: 1,
        },
        {
          date: '2022-09-02',
          like: 1,
        },
        {
          date: '2022-09-03',
          like: 1,
        },
        {
          date: '2022-09-04',
          like: 1,
        },
        {
          date: '2022-09-05',
          like: 7,
        },
        {
          date: '2022-09-15',
          like: 3,
        },
        {
          date: '2022-09-30',
          like: 5,
        },
      ];
      setLikeData(data);
    } else {
      setLikeData([]);
    }
  }, [year, month]);

  return (
    <>
      <SelectYear now={year} setYear={setYear} />
      <SelectMonth now={month} setMonth={setMonth} />
      <DaysList year={year} month={month} data={likeData} />
    </>
  );
}

export default Calendar;
