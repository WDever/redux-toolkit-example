import { combineReducers } from '@reduxjs/toolkit';
import counter, { CounterModel } from './counter';
import todos, { TodosModel } from './todos';

export interface AppState {
  counter: CounterModel;
  todos: TodosModel;
}

const reducer = combineReducers({
  counter: counter.reducer,
  todos: todos.reducer,
});

export default reducer;

export * from './counter';
export * from './todos';
export { default as counter } from './counter';
export { default as todos } from './todos';
