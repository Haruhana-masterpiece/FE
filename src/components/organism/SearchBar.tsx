import React, { FormEvent, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';

type SearchValue = {
  category: string;
  result: string;
};

interface IProps {
  setValue: Dispatch<SetStateAction<SearchValue | null>>;
  radio1: string;
  radio2: string;
}

function SearchBar({ setValue, radio1, radio2 }: IProps) {
  const [radio, setRadio] = useState('');
  const [search, setSearch] = useState('');
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue({
      category: radio,
      result: search,
    });
  };

  return (
    <Form onSubmit={handleSearch}>
      <Label htmlFor="author">
        <input
          checked
          id="author"
          type="radio"
          name="search"
          value="author"
          onChange={(e) => setRadio(e.target.value)}
        />{' '}
        {radio1}
      </Label>
      <Label htmlFor="art">
        <input id="art" type="radio" name="search" value="art" onChange={(e) => setRadio(e.target.value)} /> {radio2}
      </Label>
      <Input
        type="text"
        placeholder="검색"
        size="medium"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SubmitBtn type="submit">검색</SubmitBtn>
    </Form>
  );
}

export default SearchBar;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 15px;
  display: flex;
  align-items: center;

  > input[type='radio'],
  > input[type='radio']:checked {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    margin-right: 5px;
  }

  > input[type='radio'] {
    background-color: lightgray;
  }
  > input[type='radio']:checked {
    background-color: #5f5f5f;
  }
`;

const SubmitBtn = styled.button`
  height: 45px;
  padding: 4px 20px;
  margin-left: 10px;
  background-color: lightgray;
  border-radius: 5px;
  font-size: 18px;

  :hover {
    background-color: #bebebe;
  }
  :active {
    background-color: #bebebe;
  }
`;
