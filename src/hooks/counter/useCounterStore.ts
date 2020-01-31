import { useSelector } from 'react-redux';
import { CounterModel, AppState } from 'store';

export function useCounterStore() {
  const counterStore = useSelector<AppState, CounterModel>(
    state => state.counter,
  );

  return counterStore;
}
