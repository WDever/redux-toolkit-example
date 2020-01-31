import * as React from 'react';
import { counter, counterActions, CounterModel, AppState } from 'store';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

const { selectColor } = counter.actions;

interface ColorsType {
  pk: number;
  color: string;
}

const colors: ColorsType[] = [
  { pk: 1, color: '#000000' },
  { pk: 2, color: '#ff0000' },
  { pk: 3, color: '#ffff00' },
  { pk: 4, color: '#0000ff' },
  { pk: 5, color: '#7700ff' },
];

const Wrapper = styled.div`
  width: 100%;

  margin-bottom: 1rem;

  display: flex;
`;

const Color = styled.div<{ bgColor: string; selectedColor: string }>`
  width: 2rem;
  height: 2rem;

  margin-right: 1rem;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: 50%;
  border: ${({ bgColor, selectedColor }) =>
    bgColor === selectedColor ? '2px solid Grey' : '2px solid #ffffff'};
`;

export default function Palette() {
  const { color } = useSelector<AppState, CounterModel>(state => state.counter);
  const dispatch: Dispatch<counterActions> = useDispatch();

  const colorList = colors.map(item => (
    <Color
      key={item.pk}
      bgColor={item.color}
      selectedColor={color}
      onClick={() => dispatch(selectColor({ color: item.color }))}
    />
  ));
  return (
    <Wrapper>
      {colorList}
    </Wrapper>
  );
}
