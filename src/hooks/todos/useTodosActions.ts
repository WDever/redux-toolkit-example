import { useDispatch } from 'react-redux';
import { todos, todosActions } from 'store';
import { Dispatch } from 'redux';

const { addTodo, removeTodo, toggleTodo } = todos.actions;

export function useTodosActions() {
  const dispatch: Dispatch<todosActions> = useDispatch();

  return {
    addTodo: (text: string) => dispatch(addTodo({ text })),
    removeTodo: (id: number) => dispatch(removeTodo({ id })),
    toggleTodo: (id: number) => dispatch(toggleTodo({ id })),
  };
}
