import * as React from 'react';
import styled from 'styled-components';
import { useCounterActions, useCounterStore } from 'hooks/counter';
import { useInput } from 'utils/hooks';

const Wrapper = styled.section<{ color: string }>`
  width: 100%;

  font-size: 2rem;
  color: ${({ color }) => color || '#000000'};
`;

const Typography = styled.div<{ color: string }>`
  color: ${({ color }) => color || '#000000'};
  font-size: 2rem;
`;

export default function CounterComponent() {
  const { color, count } = useCounterStore();
  const { increment, decrement } = useCounterActions();

  const [input, setInput] = useInput('');

  return (
    <Wrapper color={color}>
      <input value={input} onChange={setInput} />
      <Typography color={color}>{input}</Typography>
      <div>{count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </Wrapper>
  );
}
