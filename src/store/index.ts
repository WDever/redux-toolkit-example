import { combineReducers } from '@reduxjs/toolkit';
import counter, { CounterModel } from './counter';

export interface AppState {
  counter: CounterModel;
}

const reducer = combineReducers({ counter: counter.reducer });

export default reducer;

export * from './counter';
export { default as counter} from './counter';
