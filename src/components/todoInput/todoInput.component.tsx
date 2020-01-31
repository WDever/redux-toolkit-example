import * as React from 'react';
import { useTodosActions } from 'hooks/todos';
import styled from 'styled-components';
import { useInput } from 'utils/hooks';
import { GoPlus } from 'react-icons/go';

const Input = styled.form`
  width: 30rem;

  display: flex;

  margin: 1rem 0;

  input {
    width: calc(100% - 2rem);

    border: none;
    border-bottom: 1px solid #ff476c;
  }

  button {
    width: 2rem;

    border: none;

    cursor: pointer;

    img {
      width: 100%;
    }
  }
`;

export default function TodoInputComponent() {
  const { addTodo } = useTodosActions();

  const [input, setInput] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(input);
  };

  return (
    <Input onSubmit={handleSubmit}>
      <input value={input} onChange={setInput} />
      <button type="submit">
        <GoPlus />
      </button>
    </Input>
  );
}
