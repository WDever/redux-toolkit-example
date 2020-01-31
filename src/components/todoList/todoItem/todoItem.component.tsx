import * as React from 'react';
import styled from 'styled-components';
import { GoX } from 'react-icons/go';

const Item = styled.section<{ done: boolean }>`
  width: 100%;
  height: 2rem;

  background-color: #4470ff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.25rem;

  margin-bottom: 1rem;

  color: #ffffff;

  p {
    margin: 0 0 0 0.5rem;

    ${({ done }) => done && 'text-decoration: line-through'};
  }

  button {
    border: none;

    margin: 0 0.5rem;

    background-color: transparent;
  }
`;

interface TodoItemComponentProps {
  id: number;
  text: string;
  done: boolean;
  toggle(id: number): void;
  remove(id: number): void;
}

export default function TodoItemComponent({
  id,
  text,
  done,
  toggle,
  remove,
}: TodoItemComponentProps) {
  return (
    <Item done={done}>
      <p onClick={() => toggle(id)}>{text}</p>
      <button type="button" onClick={() => remove(id)}>
        <GoX color="#ff476c" size="1rem" />
      </button>
    </Item>
  );
}
