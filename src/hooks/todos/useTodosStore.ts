import { useSelector } from 'react-redux';
import { TodosModel, AppState } from 'store';

export function useTodosStore() {
  const todosStore = useSelector<AppState, TodosModel>(state => state.todos);

  return todosStore;
}
