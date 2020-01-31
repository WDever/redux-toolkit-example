import { useDispatch } from 'react-redux';
import { counter, counterActions } from 'store';
import { Dispatch } from 'redux';

const { selectColor, increment, decrement } = counter.actions;

export function useCounterActions() {
  const dispatch: Dispatch<counterActions> = useDispatch();

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    selectColor: (color: string) => dispatch(selectColor({ color })),
  };
}
