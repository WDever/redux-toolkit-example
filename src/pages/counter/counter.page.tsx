import * as React from 'react';
import CounterComponent from 'components/counter';
import PaletteComponent from 'components/palette';

export default function CounterPage() {
  return (
    <>
      <PaletteComponent />
      <CounterComponent />
    </>
  );
}
