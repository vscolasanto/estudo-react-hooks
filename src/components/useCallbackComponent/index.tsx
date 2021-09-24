import React from 'react';
import './index.css';

/**
 * O hook useCallback geralmente é utilizado em otimizações.
 * Quando o componente é baseado em função e ele precisa ser re-renderizado, todo
 * o componente é chamado novamente, incluindo as funções que existem dentro dele.
 * Para evitar que uma função seja re-renderizada, utiliza-se o useCallback.
 * useCallback deve ser utilizado quando uma função muito grande é re-renderizada
 * junto com o componente. Não é recomendado utiliza-lo em funções simples.
 * Se usar o useState dentro de um useCallback, não podemos usar como dependência
 * o valor [0] do setState pois ele será alterado e por ser uma dependência
 * será obervado a toda mudança, o que causará um loop. Nesses casos, é bom utilizar
 * um callback no setState.
 */

export interface ButtonAddProps {
  incrementCounter(n: number): void;
}

export interface ButtonDecProps {
  decrementCounter(n: number): void;
}

const ButtonAdd = React.memo(function ButtonAdd({ incrementCounter }: ButtonAddProps) {
  console.log('filho ADD renderizou');
  return (
    <button className="plus" onClick={() => incrementCounter(10)}>
      +
    </button>
  );
});

const ButtonDec = React.memo(function ButtonDec({ decrementCounter }: ButtonDecProps) {
  console.log('filho DEC renderizou');
  return (
    <button className="minus" onClick={() => decrementCounter(10)}>
      -
    </button>
  );
});

export const UseCallbackComponent: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  // Causará problema pois a dependencia do useCallback é atualizada dentro do setCounter.
  // const incrementCounter2 = React.useCallback(
  //   (num: number) => {
  //     setCounter(counter + num);
  //   },
  //   [counter],
  // );

  const incrementCounter = React.useCallback((num: number) => {
    setCounter((prev) => prev + num);
  }, []);

  const decrementCounter = React.useCallback((num: number) => {
    setCounter((prev) => prev - num);
  }, []);

  console.log('pai renderizou');

  return (
    <div className="container">
      <h1>UseCallback</h1>
      <div className="counter">
        <h3>Contador: {counter}</h3>
        <div>
          <ButtonAdd incrementCounter={incrementCounter} />
          <ButtonDec decrementCounter={decrementCounter} />
        </div>
      </div>
    </div>
  );
};
