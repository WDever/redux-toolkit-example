import * as React from 'react';

import styled from 'styled-components';
import { useTodosStore, useTodosActions } from 'hooks/todos';
import TodoItemComponent from './todoItem';

const List = styled.article`
  margin-top: 2rem;

  width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TodoListComponent() {
  const { todos } = useTodosStore();
  const { toggleTodo, removeTodo } = useTodosActions();

  const todoList = todos.map(item => (
    <TodoItemComponent
      id={item.id}
      text={item.text}
      done={item.done}
      toggle={toggleTodo}
      remove={removeTodo}
    />
  ));
  return <List>{todoList}</List>;
}
