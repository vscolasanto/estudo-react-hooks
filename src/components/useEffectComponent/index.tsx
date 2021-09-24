import React from 'react';
import './index.css';

/**
 * O Hook useEffect simula os comportamentos de lifecycle do componente.
 * Pode ser executado na montagem do componente, passando o segundo parametro como um array vazio,
 * na atualização do componente, sem passar um segundo parametro
 * e na atualização do componente baseado em dependências específicas.
 * Deve-se tomar cuidado com esta última opção para não utilizar como dependência
 * um mesmo objeto que é alterado dentro do useEffect, para evitar loop infinito como no exemplo abaixo:
 *   React.useEffect(() => {
 *     setCounter(counter + 1);
 *   }, [counter]);
 *
 * Dentro do useEffect podemos utilizar o return () => {} que é uma função que simula
 * o lifecycle ComponentWillUnmount, que executa algo quando o componente é desmontado (re-renderizado),
 * utilizado para fazer alguma limpeza
 */

const eventFn = () => {
  console.log('h1 clicado');
};

export const UseEffectComponent: React.FC = () => {
  const [counter, setCounter] = React.useState(0);

  //ComponentDidMount - executa uma única vez quando o componente é montado
  React.useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // ComponentWillUnmount - utilizado para limpar
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //ComponentDidUpdate - executa toda vez que o componente é atualizado
  React.useEffect(() => {
    console.log('component did UPDATE');
  });

  //Dependência - executa sempre que a dependência for atualizada
  React.useEffect(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  return (
    <div className="comp">
      <h1>UseEffect</h1>
      <div className="counter">
        <h3>Contador: {counter}</h3>
        <div>
          <button className="plus" onClick={() => setCounter(counter + 1)}>
            +
          </button>
          <button className="minus" onClick={() => setCounter(counter - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
