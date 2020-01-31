import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoItemType {
  id: number;
  text: string;
  done: boolean;
}

export interface TodosModel {
  todos: TodoItemType[];
}

export interface AddTodoPayload {
  text: string;
}

export interface ToggleTodoPayload {
  id: number;
}

export type RemoveTodoPayload = ToggleTodoPayload;

const initialState: TodosModel = {
  todos: [
    {
      id: 1,
      text: 'Redux with Redux toolkit!',
      done: false,
    },
    {
      id: 2,
      text: 'Learn GraphQL',
      done: false,
    },
    {
      id: 3,
      text: 'Play Basketball',
      done: true,
    },
  ],
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state: TodosModel, action: PayloadAction<AddTodoPayload>) {
      const lastItem = state.todos[state.todos.length - 1];

      state.todos = state.todos.concat({
        id: lastItem.id + 1,
        text: action.payload.text,
        done: false,
      });
    },

    toggleTodo(state: TodosModel, action: PayloadAction<ToggleTodoPayload>) {
      state.todos = state.todos.map(
        (item: TodoItemType): TodoItemType =>
          item.id === action.payload.id
            ? { ...item, done: !item.done }
            : { ...item },
      );
    },

    removeTodo(state: TodosModel, action: PayloadAction<RemoveTodoPayload>) {
      state.todos = state.todos.filter(item => item.id !== action.payload.id);
    },
  },
});

const { addTodo, toggleTodo, removeTodo } = todos.actions;

type addTodo = ReturnType<typeof addTodo>;
type toggleTodo = ReturnType<typeof toggleTodo>;
type removeTodo = ReturnType<typeof removeTodo>;

export type todosActions = addTodo | toggleTodo | removeTodo;

export default todos;
