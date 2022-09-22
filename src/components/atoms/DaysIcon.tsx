import { Dayjs } from 'dayjs';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  collectionCount: number | string;
  date?: Dayjs;
}

function setColor(count: number | string): string {
  if (count === 'no') return 'white';
  if (count === 0) return '#D9D9D9';
  if (count <= 2) return '#999999';
  if (count <= 4) return '#777777';
  if (count <= 6) return '#444444';
  return '#000000';
}

function DaysIcon({ collectionCount, date }: IProps) {
  // TODO 마우스 호버시 date값으로 해당 날짜 보여주기
  return <DayContainer dayColor={setColor(collectionCount)} />;
}

const defaultProps = {
  date: '',
};

DaysIcon.defaultProps = defaultProps;

export default DaysIcon;

const DayContainer = styled.div<{ dayColor: string }>`
  width: 25px;
  height: 25px;
  margin: 3px;
  /* TODO 백그라운드 색상은 컬렉션에 담은 개수만큼 달라지도록 */
  background-color: ${({ dayColor }) => dayColor};
  border: 1px solid black;
`;
