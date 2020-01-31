import React from 'react';
import styled from 'styled-components';
import Counter from './counter';
import Palette from './palette/palette.component';

const Wrapper = styled.main`
  width: 100%;
  margin: 1rem 0 0 1rem;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Palette />
      <Counter />
    </Wrapper>
  );
};

export default App;
