import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  like: number | string;
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

function DaysIcon({ like, date }: IProps) {
  const [hoverData, setHoverData] = useState<[string, number | string]>(['', '']);
  const [hover, setHover] = useState(false);

  return (
    <DayContainer
      dayColor={setColor(like)}
      onMouseEnter={() => {
        setHoverData([dayjs(date).format('MM월 D일'), like]);
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover && hoverData[1] !== 'no' && (
        <HoverDataContainer>{`${hoverData[0]}에 담은 작품 수: ${like}점`}</HoverDataContainer>
      )}
    </DayContainer>
  );
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
  background-color: ${({ dayColor }) => dayColor};
  border: 1px solid lightgray;
`;

const HoverDataContainer = styled.div`
  position: absolute;
  top: 35px;
  left: -5px;
  width: 240px;
  text-align: center;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 4px;
  z-index: 1;
`;
