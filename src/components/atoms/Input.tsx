import React, { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  id: string;
  placeholder?: string;
  type: string;
  label?: string;
  size?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function Input({ id, label, placeholder, size, type, value, onChange }: InputProps) {
  return (
    <Container>
      {/* label은 선택사항 */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputContainer id={id} placeholder={placeholder} type={type} sz={size} value={value} onChange={onChange} />
    </Container>
  );
}

const defaultProps = {
  label: '',
  size: 'large',
  placeholder: '',
  value: '',
  onChange: () => null,
};

Input.defaultProps = defaultProps;

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
`;

const InputContainer = styled.input<{ sz: string | undefined }>`
  ${({ sz }) =>
    sz === 'large' &&
    css`
      width: 400px;
      height: 45px;
    `}
  ${({ sz }) =>
    sz === 'medium' &&
    css`
      width: 300px;
      height: 45px;
    `}

  border: lightgray 1px solid;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
  }

  :focus {
    outline: none;
  }
`;
