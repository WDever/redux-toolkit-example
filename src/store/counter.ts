import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterModel {
  count: number;
  color: string;
}

export interface ColorPayload {
  color: string;
}

const initialState: CounterModel = {
  count: 0,
  color: '#000000',
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: CounterModel) {
      state.count += 1;
    },

    decrement(state: CounterModel) {
      state.count -= 1;
    },

    selectColor(state: CounterModel, action: PayloadAction<ColorPayload>) {
      state.color = action.payload.color;
    },
  },
});

const { increment, decrement, selectColor } = counter.actions;

type increment = ReturnType<typeof increment>;
type decrement = ReturnType<typeof decrement>;
type selectColor = ReturnType<typeof selectColor>;

export type counterActions = increment | decrement | selectColor;

export default counter;
