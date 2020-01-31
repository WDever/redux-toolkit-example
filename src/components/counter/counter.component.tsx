import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState } from 'store';
import counter, { CounterModel, counterActions } from 'store/counter';

const { useState } = React;
const { increment, decrement } = counter.actions;

const Wrapper = styled.section<{ color: string }>`
  width: 100%;

  font-size: 2rem;
  color: ${({ color }) => color || '#000000'};
`;

const Typography = styled.div<{ color: string }>`
  color: ${({ color }) => color || '#000000'};
  font-size: 2rem;
`;

export default function Counter() {
  const { count, color } = useSelector<AppState, CounterModel>(
    state => state.counter,
  );
  const dispatch: Dispatch<counterActions> = useDispatch();

  const [input, setInput] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);

  const dispatchIncrement = () => dispatch(increment());
  const dispatchDecrement = () => dispatch(decrement());

  return (
    <Wrapper color={color}>
      <input value={input} onChange={handleChange} />
      <Typography color={color}>{input}</Typography>
      <div>{count}</div>
      <button type="button" onClick={dispatchIncrement}>
        +
      </button>
      <button type="button" onClick={dispatchDecrement}>
        -
      </button>
    </Wrapper>
  );
}
