import React from 'react';
import './index.css';

/**
 * useMemo, assim como useCallback é utilizado para melhorar a performance.
 * enquanto o useCallback guarda em 'cache' as funções, o useMemo guarda valores (components, etc).
 */

export interface ButtonAddProps {
  incrementCounter(n: number): void;
}

export interface ButtonDecProps {
  decrementCounter(n: number): void;
}

const ButtonAdd = ({ incrementCounter }: ButtonAddProps) => {
  console.log('filho ADD renderizou');
  return (
    <button className="plus" onClick={() => incrementCounter(10)}>
      +
    </button>
  );
};

const ButtonDec = ({ decrementCounter }: ButtonDecProps) => {
  console.log('filho DEC renderizou');
  return (
    <button className="minus" onClick={() => decrementCounter(10)}>
      -
    </button>
  );
};

export const UseMemoComponent: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = React.useCallback((num: number) => {
    setCounter((prev) => prev + num);
  }, []);

  const decrementCounter = React.useCallback((num: number) => {
    setCounter((prev) => prev - num);
  }, []);

  const btnDec = React.useMemo(() => {
    return <ButtonDec decrementCounter={decrementCounter} />;
  }, [decrementCounter]);

  console.log('pai renderizou');

  return (
    <div className="comp">
      <h1>useMemo</h1>
      <div className="counter">
        <h3>Contador: {counter}</h3>
        <div>
          {/* formas diferentes de utilização */}
          {React.useMemo(() => {
            return <ButtonAdd incrementCounter={incrementCounter} />;
          }, [incrementCounter])}

          {btnDec}
        </div>
      </div>
    </div>
  );
};
