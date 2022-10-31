import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import DaysIcon from './DaysIcon';

function createDaysList(startDate: number, endDate: number, dayOfWeek: number, likeList: number[]) {
  const days = [];
  let day = startDate;
  let week = 1;

  while (day <= endDate) {
    let list = [];
    if (week === 1) {
      for (let i = 0; i < 7; i += 1) {
        if (i < dayOfWeek) {
          list.push([0, 0]);
        } else if (i === dayOfWeek) {
          list.push([day, likeList[day]]);
          day += 1;
        } else {
          list.push([day, likeList[day]]);
          day += 1;
        }
      }
    } else {
      for (let i = 0; i < 7; i += 1) {
        if (day <= endDate) {
          list.push([day, likeList[day]]);
          day += 1;
        } else {
          list.push([0, 0]);
        }
      }
    }

    week += 1;
    days.push(list);
    list = [];
  }

  return days;
}

type likeType = {
  art: string;
  author: string;
  img: string;
};

type likeDataType = {
  date: string;
  like: likeType[];
};

interface Iprops {
  year: number;
  month: number;
  data: likeDataType[];
}

function DaysList({ year, month, data }: Iprops) {
  const selectedDate = dayjs(`${year}-${month}`);
  const startDate = selectedDate.get('date');
  const dayOfWeek = selectedDate.get('day');
  const endDate = selectedDate.endOf('month').get('date');
  // 컬렉션에 담은 수를 나타내는 리스트
  const likeList = [0];
  for (let i = 1; i <= endDate; i += 1) {
    // 0번 인덱스는 사용하지 않음.
    likeList.push(0);
  }
  // 각 날짜의 like 수를 likeList에 반영
  data.forEach(({ date, like }) => {
    likeList[dayjs(date).get('date')] = like.length;
  });

  const days = createDaysList(startDate, endDate, dayOfWeek, likeList);
  return (
    <div>
      {Array(days.length)
        .fill(0)
        .map((n, i) => {
          return (
            <Week key={`weekKey-${i + 1}`}>
              {days[i].map((day: number[], index) => {
                if (day[0] !== 0) {
                  return (
                    <DaysIcon like={day[1]} date={dayjs(`${year}-${month}-${day[0]}`)} key={`days-${index + 1}`} />
                  );
                }
                return <DaysIcon like="no" key={`days-${index + 1}`} />;
              })}
            </Week>
          );
        })}
    </div>
  );
}

export default DaysList;

const Week = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
