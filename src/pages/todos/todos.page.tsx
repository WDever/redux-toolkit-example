import * as React from 'react';

import styled from 'styled-components';
import TodoInputComponent from 'components/todoInput';
import TodoListComponent from 'components/todoList';

const Wrapper = styled.article`
  width: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: #ffffff;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.08);

  font-family: 'Roboto';
`;

export default function TodosPage() {
  return (
    <Wrapper>
      <TodoInputComponent />
      <TodoListComponent />
    </Wrapper>
  );
}
