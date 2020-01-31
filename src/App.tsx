import React from 'react';
import styled from 'styled-components';
import CounterPage from 'pages/counter';
import TodosPage from 'pages/todos';

const Wrapper = styled.main`
  width: 100%;
  margin: 1rem 0 0 1rem;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <CounterPage />
      <TodosPage />
    </Wrapper>
  );
};

export default App;
